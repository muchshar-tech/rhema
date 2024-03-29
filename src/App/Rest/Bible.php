<?php
/**
 * Rhema
 *
 * @package   rhema
 * @author    TXIpartners <jive.cheng@txipartners.com>
 * @copyright 2022 Rhema
 * @link      https://txipartners.com
 */

declare( strict_types = 1 );

namespace Rhema\App\Rest;

use Exception;
use WP_REST_Request;
use WP_Error;

use Rhema\Common\Abstracts\Base;
use Rhema\Integrations\Logos;
use Rhema\Common\Constants;
use Rhema\Common\Traits\RestCommons;
/**
 * Class Example
 *
 * @package Rhema\App\Rest
 * @since 1.0.0
 */
class Bible extends Base {
	use RestCommons;
	/**
	 * Initialize the class.
	 *
	 * @since 1.0.0
	 */
	public function init() {
		/**
		 * This class is only being instantiated if REST_REQUEST is defined in the requester as requested in the Bootstrap class
		 *
		 * @see Requester::isRest()
		 * @see Bootstrap::__construct
		 */

		if ( class_exists( 'WP_REST_Server' ) ) {
			add_action( 'rest_api_init', [ $this, 'addPluginRestApi' ] );
		}
	}

	/**
	 * @since 1.0.0
	 */
	public function addPluginRestApi() {
		$this->addBibleRoute();
	}

	/**
	 * Examples
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function addBibleRoute() {
		register_rest_route(
			'rhema/v1',
			'/bible',
			[
				'methods'  => \WP_REST_Server::READABLE,
				'callback' => [ $this, 'getRaws' ],
				'args'     => [
					'range'  => [
						'default' => 'gen1:1',
					],
					'with_prev_chapter'  => [
						'default' => false,
					],
					'with_next_chapter'  => [
						'default' => false,
					],
				],
				'permission_callback' => '__return_true',
			]
		);
		register_rest_route(
			'rhema/v1',
			'/bible/search',
			[
				'methods'  => \WP_REST_Server::READABLE,
				'callback' => [ $this, 'searchRaws' ],
				'args'     => [
					'words'  => [
						'default' => false,
					],
					'from'  => [
						'default' => 0,
					],
				],
				'permission_callback' => '__return_true',
			]
		);
	}
	/**
	 * getRaws
	 *
	 * @param WP_REST_Request $request Values.
	 * @return array
	 * @since 1.0.0
	 */
	public function getRaws( WP_REST_Request $request ): array|WP_Error {
		/** @var Logos\Api */
		$integration_logos_api = Logos\Api::init();
		/** @var Constants */
		$constants = Constants::init();
		$param = $request->get_param( 'range' );
		$with_prev_chapter = $request->get_param( 'with_prev_chapter' );
		$with_next_chapter = $request->get_param( 'with_next_chapter' );
		if ( is_string( $param ) ) {
			$param = [ $param ];
		}
		$query_schema = rhema()->bible()->getQuerySchema( false, $param, [
			'with_prev_chapter' => (bool) $with_prev_chapter,
			'with_next_chapter' => (bool) $with_next_chapter,
		] );
		$raw_params = rhema()->bible()->generateGetRawParam( $query_schema );
		$query_string = rhema()->bible()->generateQueryString( $raw_params );
		$rhema_res = $integration_logos_api->getRaws( $query_string );

		if ( $rhema_res instanceof WP_Error ) {
			$exception = new Exception( $rhema_res->get_error_message(), $rhema_res->get_error_code() );
			return $this->sendError( $exception );
		}

		if ( empty( $rhema_res ) ) {
			$exception = new Exception( $constants->error_message['no_found'], 404 );
			return $this->sendError( $exception );
		}

		return $this->sendRes( $rhema_res );
	}
	/**
	 * Search bible by keywords
	 *
	 * @param WP_REST_Request $request
	 * @return array|WP_Error
	 */
	public function searchRaws( WP_REST_Request $request ): array|WP_Error {
		/** @var Logos\Api */
		$integration_logos_api = Logos\Api::init();
		$keyword = $request->get_param( 'words' );
		$from = (int) $request->get_param( 'from' );
		/** @var Constants */
		$constants = Constants::init();

		try {

			if ( empty( $keyword ) ) {
				throw new Exception( $constants->error_message['system/integrations/logos/api/param_wrong'], 400 );
			}

			$rhema_res = $integration_logos_api->searchRaws( $keyword, $from );

			if ( is_wp_error( $rhema_res ) ) {
				throw new Exception( $rhema_res->get_error_message(), $rhema_res->get_error_code() );
			}

			return $this->sendRes( $rhema_res );
		} catch ( Exception $exception ) {
			return $this->sendError( $exception );
		}
	}
}

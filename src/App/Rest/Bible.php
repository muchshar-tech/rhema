<?php
/**
 * Rhema
 *
 * @package   rhema
 * @author    TXIpartners <jive.cheng@txipartners.com>
 * @copyright 2022 Rhema
 * @license   MIT
 * @link      https://txipartners.com
 */

declare( strict_types = 1 );

namespace Rhema\App\Rest;

use Rhema\Common\Abstracts\Base;
use Rhema\Integrations\Logos;

/**
 * Class Example
 *
 * @package Rhema\App\Rest
 * @since 1.0.0
 */
class Bible extends Base {

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
				'callback' => [ $this, 'getRaw' ],
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
			]
		);
	}

	/**
	 * Examples
	 *
	 * @param WP_REST_Request $request Values.
	 * @return array
	 * @since 1.0.0
	 */
	public function getRaw( $request ): array {
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
		$bible_remote = rhema()->bible()->remote();
		$rhema_res = wp_remote_get( "$bible_remote/cuv?{$query_string}" );
		if ( $rhema_res instanceof WP_Error ) {
			return $rhema_res;
		}
		if ( empty( $rhema_res['body'] ) ) {
			return [];
		}
		wp_cache_add( 'fetched_bible', $rhema_res['body'], rhema()->plugin->name() );
		return json_decode( $rhema_res['body'] );
	}
}

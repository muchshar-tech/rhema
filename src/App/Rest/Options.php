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

use Respect\Validation\Validator as v;
use Respect\Validation\Exceptions\ValidationException;
use WP_REST_Request;
use Exception;

use Rhema\Common\Abstracts\Base;
use Rhema\Common\Constants;
use Rhema\Common\Traits\RestCommons;
/**
 * Class Example
 *
 * @package Rhema\App\Rest
 * @since 1.0.0
 */
class Options extends Base {
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
			add_action( 'rest_api_init', [ $this, 'addUpdateOptionsRestApi' ] );
		}
	}

	/**
	 * @since 1.0.0
	 */
	public function addUpdateOptionsRestApi() {
		$this->addUpdateOptionsRoute();
	}

	/**
	 * Examples
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function addUpdateOptionsRoute() {
		register_rest_route(
			'rhema/v1',
			'/options',
			[
				'methods'  => \WP_REST_Server::READABLE,
				'callback' => [ $this, 'getOptions' ],
				'permission_callback' => '__return_true',
			]
		);
		register_rest_route(
			'rhema/v1',
			'/options',
			[
				'methods'  => \WP_REST_Server::CREATABLE,
				'callback' => [ $this, 'updateOptions' ],
				'args'     => [
					'bible_entry' => [
						'type'              => 'string',
						'required'          => true,
						'sanitize_callback' => [ $this, 'bibleEntrySanitize' ],
					],
					'bible_default_translation' => [
						'type'              => 'string',
						'required'          => true,
						'sanitize_callback' => [ $this, 'bibleDefaultTranslationSanitize' ],
					],
				],
				'permission_callback' => function () {
					return current_user_can( 'manage_options' );
				},
			]
		);
	}
	/**
	 * Get options
	 *
	 * @param WP_REST_Request $request Values.
	 * @return array
	 * @since 1.0.0
	 */
	public function getOptions( WP_REST_Request $request ) {
		// TODO: 加入 nonce 驗證 check_ajax_referer( 'get_options' );;
		$plugin_domain = $this->plugin->textDomain();
		$options = get_option( $plugin_domain );
		return $options;
	}
	/**
	 * Update options
	 *
	 * @param WP_REST_Request $request Values.
	 * @return array
	 * @since 1.0.0
	 */
	public function updateOptions( WP_REST_Request $request ) {
		$functions_options = rhema()->options();
		$options = $functions_options->get();
		$general = isset( $options['general'] ) ? $options['general'] : null;
		$bible_entry_path = '';
		if ( isset( $general['bible_entry'] ) ) {
			$bible_entry_path = $general['bible_entry'];
		}

		$json = $request->get_json_params();

		if ( empty( $json ) ) {
			$exception = new Exception( Constants::init()->error_message['system/app/rest/options/field_is_wrong'], 400 );
		}

		$rewrite_isempty = $functions_options->checkRewriteIsEmpty( $json['bible_entry'] );
		if ( $bible_entry_path !== $json['bible_entry'] && is_wp_error( $rewrite_isempty ) ) {
			$exception = new Exception( Constants::init()->error_message['system/app/rest/options/field_is_wrong'], 400 );
		}

		try {
			v::key( 'bible_entry', v::stringType() )
				->key( 'bible_default_translation', v::stringType() )
				->assert( $json );
		} catch ( ValidationException $exception ) {
			$exception = new Exception( $exception->getMessage(), $exception->getCode() );
			return $this->sendError( $exception );
		} catch ( Exception $exception ) {
			$exception = new Exception( $exception->getMessage(), $exception->getCode() );
			return $this->sendError( $exception );
		}

		$plugin_domain = $this->plugin->textDomain();

		$updated = update_option( $plugin_domain, json_encode( [
			'general' => $json,
		] ) );

		flush_rewrite_rules();

		if ( ! $updated ) {
			return $this->sendRes( [
				'message' => Constants::init()->error_message['system/app/rest/options/noting_to_save'],
			] );
		}

		return $this->sendRes( [
			'message' => Constants::init()->error_message['system/app/rest/options/option_saved'],
		] );
	}
	/**
	 * Option bible entry sanitize
	 *
	 * @param WP_REST_Request $request Values.
	 * @return array
	 * @since 1.0.0
	 */
	public function bibleEntrySanitize( $value, $request, $param ) {
		return $value;
	}
	/**
	 * Option bible default translation sanitize
	 *
	 * @param WP_REST_Request $request Values.
	 * @return array
	 * @since 1.0.0
	 */
	public function bibleDefaultTranslationSanitize( $value, $request, $param ) {
		return $value;
	}
}

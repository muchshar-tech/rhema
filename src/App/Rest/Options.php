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

/**
 * Class Example
 *
 * @package Rhema\App\Rest
 * @since 1.0.0
 */
class Options extends Base {
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
	public function getOptions( $request ) {
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
	public function updateOptions( $request ) {
		// TODO: 加入 nonce 驗證 check_ajax_referer( 'update_options' );
		$params = $request->get_body_params();
		$plugin_domain = $this->plugin->textDomain();
		update_option( $plugin_domain, json_encode( [
			'general' => $params,
		] ) );
		return true;
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

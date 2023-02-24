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

use WP_REST_Request;
use WP_Error;
use Exception;

use Rhema\Common\Abstracts\Base;
use Rhema\Integrations\Logos;
use Rhema\Common\Constants;
/**
 * Class Example
 *
 * @package Rhema\App\Rest
 * @since 1.0.0
 */
class Account extends Base {

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
		$this->addAccountRoute();
	}

	/**
	 * Examples
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function addAccountRoute() {
		register_rest_route(
			'rhema/v1',
			'/account/signin',
			[
				'methods'  => \WP_REST_Server::CREATABLE,
				'callback' => [ $this, 'signin' ],
				'args'     => [
					'username' => [
						'required' => true,
					],
					'password' => [
						'required' => true,
					],
				],
				'permission_callback' => '__return_true',
			]
		);
		register_rest_route(
			'rhema/v1',
			'/account/orders',
			[
				'methods'  => \WP_REST_Server::CREATABLE,
				'callback' => [ $this, 'orders' ],
				'args'     => [],
				'permission_callback' => '__return_true',
			]
		);
	}
	/**
	 * Singin
	 *
	 * @param WP_REST_Request $request
	 * @return array
	 */
	public function signin( WP_REST_Request $request ): array {
		$body = $request->get_json_params();

		/** @var Logos\Api */
		$integration_logos_api = Logos\Api::init();
		$signin = $integration_logos_api->signin( $body['username'], $body['password'] );
		if ( is_wp_error( $signin ) ) {
			$error = new WP_Error( 500, __( 'Sorry, you are not allowed to do that.' ) );
			return wp_send_json_error( $error, 500 );
		}

		if ( 300 < $signin['response']['code'] ) {
			$error = new WP_Error( $signin['response']['code'], $signin['body'] );
			return wp_send_json_error( [ 'message' => $signin['body'] ], $signin['response']['code'] );
		}

		$response_body = json_decode( $signin['body'], true );

		return [
			'response' => [
				'code' => $signin['response']['code'],
			],
			'data' => $response_body,
		];
	}
	/**
	 * Orders
	 *
	 * @param WP_REST_Request $request
	 * @return array
	 */
	public function orders( WP_REST_Request $request ): array {
		$body = $request->get_json_params();

		/** @var Logos\Api */
		$integration_logos_api = Logos\Api::init();

		return [
			'response' => [
				'code' => 200,
			],
			'body' => $license_key,
		];
	}
}

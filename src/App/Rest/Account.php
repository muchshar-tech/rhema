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

use WP_REST_Request;
use Exception;

use Rhema\Common\Abstracts\Base;
use Rhema\Integrations\Logos;
use Rhema\Common\Traits\RestCommons;
/**
 * Class Example
 *
 * @package Rhema\App\Rest
 * @since 1.0.0
 */
class Account extends Base {
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
				'permission_callback' => function () {
					return current_user_can( 'manage_options' );
				},
			]
		);
		register_rest_route(
			'rhema/v1',
			'/account/orders',
			[
				'methods'  => \WP_REST_Server::READABLE,
				'callback' => [ $this, 'orders' ],
				'args'     => [],
				'permission_callback' => function () {
					return current_user_can( 'manage_options' );
				},
			]
		);
	}
	/**
	 * Singin
	 *
	 * @param WP_REST_Request $request
	 * @return array
	 */
	public function signin( WP_REST_Request $request ) {
		$body = $request->get_json_params();

		/** @var Logos\Api */
		$integration_logos_api = Logos\Api::init();
		$signin = $integration_logos_api->signin( $body['username'], $body['password'] );
		if ( is_wp_error( $signin ) ) {
			$exception = new Exception( $signin->get_error_message(), $signin->get_error_code() );
			return $this->sendError( $exception );
		}

		if ( 300 < $signin['response']['code'] ) {
			$exception = new Exception( $signin['body'], $signin['response']['code'] );
			return $this->sendError( $exception );
		}

		$response_body = json_decode( $signin['body'], true );

		return $this->sendRes( [
			'token' => $response_body['token'],
		] );
	}
	/**
	 * Orders
	 *
	 * @param WP_REST_Request $request
	 *
	 */
	public function orders( WP_REST_Request $request ) {
		$header_authorization = $request->get_header( 'Authorization' );
		$token = preg_replace( '/^Bearer /', '', $header_authorization );
		/** @var Logos\Api */
		$integration_logos_api = Logos\Api::init();
		try {
			$orders = $integration_logos_api->orders( $token );
			if ( is_wp_error( $orders ) ) {
				throw new Exception( $orders->get_error_message(), $orders->get_error_code() );
			}
		} catch ( Exception $exception ) {
			return $this->sendError( $exception );
		}
		return $this->sendRes( $orders );
	}
}

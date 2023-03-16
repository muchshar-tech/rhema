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
class Orders extends Base {

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
		$this->addOrdersRoute();
	}

	/**
	 * Examples
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function addOrdersRoute() {
		register_rest_route(
			'rhema/v1',
			'/orders',
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
	 * Activate core feature callback
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
		} catch ( Exception $error ) {
			wp_send_json_error( [ 'message' => $error->getMessage() ], $error->getCode() );
		}
		wp_send_json_success( $orders, 200 );
	}
}

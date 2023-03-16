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
class Deactivate extends Base {

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
		$this->addDeactivateRoute();
	}

	/**
	 * Examples
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function addDeactivateRoute() {
		register_rest_route(
			'rhema/v1',
			'/deactivate',
			[
				'methods'  => \WP_REST_Server::CREATABLE,
				'callback' => [ $this, 'deactivate' ],
				'args'     => [
					'product_slug' => [
						'required' => true,
					],
					'license' => [
						'required' => true,
					],
				],
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
	 * @return array
	 */
	public function deactivate( WP_REST_Request $request ): array {
		$body = $request->get_json_params();

		/** @var Logos\Api */
		$integration_logos_api = Logos\Api::init();
		$license_key = $integration_logos_api->getLogosCoreTransient( 'license_key' );
		if ( $license_key === $body['license'] ) {
			$error = new WP_Error( 500, __( 'Sorry, you are not allowed to do that.' ) );
			return wp_send_json_error( $error, 500 );
		}
		// $integration_logos_api->deleteLogosCoreTransient( 'license_key' );
		// $integration_logos_api->deleteLogosCoreTransient( 'license_renew_date' );
		// $integration_logos_api->deleteLogosCoreTransient( 'license_data' );

		return [
			'response' => [
				'code' => 200,
			],
			'body' => $license_key,
		];
	}
}
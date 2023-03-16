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

use Respect\Validation\Validator as v;
use Respect\Validation\Exceptions\ValidationException;
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
class Activate extends Base {

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
		$this->addActivateRoute();
	}

	/**
	 * Examples
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function addActivateRoute() {
		register_rest_route(
			'rhema/v1',
			'/activate/core',
			[
				'methods'  => \WP_REST_Server::CREATABLE,
				'callback' => [ $this, 'activateFeature' ],
				'args'     => [
					'proudct_slug'  => [
						'default' => 'wp-rehema-core-feature',
					],
					'email'  => [
						'default' => false,
					],
					'identity_type'  => [
						'default' => 'domain',
					],
					'username'  => [
						'default' => $this->plugin->hostname(),
					],
					'password'  => [
						'default' => false,
					],
				],
				'permission_callback' => '__return_true',
			]
		);
		register_rest_route(
			'rhema/v1',
			'/activate/license',
			[
				'methods'  => \WP_REST_Server::CREATABLE,
				'callback' => [ $this, 'activateByLicense' ],
				'args'     => [
					'proudct_slug'  => [
						'default' => 'wp-rehema-core-feature',
						'required' => true,
					],
					'email'  => [
						'default' => false,
						'required' => true,
					],
					'identity_type'  => [
						'default' => 'domain',
						'required' => true,
					],
					'username'  => [
						'default' => $this->plugin->hostname(),
						'required' => true,
					],
					'license'  => [
						'default' => false,
						'required' => true,
					],
				],
				'permission_callback' => '__return_true',
			]
		);
	}

	public function activateByLicense( WP_REST_Request $request ): array {
		/** @var Logos\Api */
		$integration_logos_api = Logos\Api::init();
		$body = $request->get_json_params();
		try {
			v::key( 'license', v::stringType() )
				->key( 'email', v::email() )
				->key( 'identity_type', v::stringType() )
				->key( 'product_slug', v::stringType() )
				->key( 'username', v::stringType() )
				->assert( $body );
			$license_key = $body['license'];
			$license_data = [
				'email' => $body['email'],
				'identity_type' => $body['identity_type'],
				'product_slug' => $body['product_slug'],
				'username' => $body['username'],
			];
			$token = $integration_logos_api->getBibleToken( $license_key, $license_data );
			$payload = $integration_logos_api->getPayloadFromJWT( $token );
			$license_renew_date = $payload['license_renew_date'];
			if ( is_wp_error( $token ) ) {
				return $token;
			}
		} catch ( ValidationException $exception ) {
			return new WP_Error( 500, $exception->getMessage() );
		} catch ( Exception $exception ) {
			return new WP_Error( 500, $exception->getMessage() );
		}

		$integration_logos_api->setLogosCoreTransient( 'license_key', $license_key );
		$integration_logos_api->setLogosCoreTransient( 'license_renew_date', $license_renew_date );
		$integration_logos_api->setLogosCoreTransient( 'license_data', json_encode( $license_data ) );
		$integration_logos_api->setLogosCoreTransient( 'token', $token );

		$body = [
			'license_key' => $license_key,
			'license_data' => $license_data,
			'renew_date' => $license_renew_date,
		];
		$response = [
			'response' => [
				'code' => 200,
			],
			'body' => $body,
		];
		return $response;
	}
	/**
	 * Activate core feature callback
	 *
	 * @param WP_REST_Request $request
	 * @return array
	 */
	public function activateFeature( WP_REST_Request $request ): array {
		/** @var Logos\Api */
		$integration_logos_api = Logos\Api::init();
		$body = $request->get_json_params();
		$response = $integration_logos_api->getBibleLicense( [
			'email' => $body['email'],
			'identity_type' => $body['identity_type'],
			'product_slug' => $body['product_slug'],
			'username' => $body['username'],
			'password' => $body['password'],
		] );
		if ( is_wp_error( $response ) ) {
			return $response;
		}
		if ( 300 < $response['response']['code'] ) {
			return $response;
		}

		$response['body'] = json_decode( $response['body'], true );

		if ( empty( $response['body'] ) || empty( $response['body']['license_key'] ) || empty( $response['body']['renew_date'] ) ) {
			return new WP_Error( 500, Constants::init()->error_message['system/app/rest/bible/response_wrong'] );
		}

		$license_key = $response['body']['license_key'];
		$license_renew_date = $response['body']['renew_date'];
		$license_data = [
			'email' => $body['email'],
			'identity_type' => $body['identity_type'],
			'product_slug' => $body['product_slug'],
			'username' => $body['username'],
		];
		$response['body']['license_data'] = $license_data;

		$integration_logos_api->setLogosCoreTransient( 'license_key', $license_key );
		$integration_logos_api->setLogosCoreTransient( 'license_renew_date', $license_renew_date );
		$integration_logos_api->setLogosCoreTransient( 'license_data', json_encode( $license_data ) );

		$authenticated = $integration_logos_api->authenticated();
		if ( is_wp_error( $authenticated ) ) {
			return $authenticated;
		}
		if ( ! $authenticated ) {
			return new WP_Error( 500, Constants::init()->error_message['unknown_error'] );
		}
		return $response;
	}
}

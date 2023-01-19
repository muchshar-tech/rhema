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

namespace Rhema\Integrations\Logos;

use Respect\Validation\Validator as v;
use Respect\Validation\Exceptions\NestedValidationException;

use Rhema\Common\Traits\Singleton;
use Rhema\Common\Constants;
use WP_Error;
use Exception;

/**
 * Class Api
 *
 * @package Rhema\Integrations\Logos
 * @since 1.0.0
 */
class Api {
	private static $require_data = [];
	/**
	 * Singleton trait
	 */
	use Singleton;
	/**
	 * Base constructor.
	 *
	 * @since 1.0.0
	 */
	public function __construct() {
		if ( ! empty( self::$instance ) ) {
			return;
		}
		if ( ! function_exists( 'get_transient' ) || ! function_exists( 'set_transient' ) ) {
			throw new Exception( 'Must have \'set_transient,get_transient\' before initialization.' );
		}
		self::$require_data['license_key'] = $this->get_logos_core_transient( 'license_key' );
		self::$require_data['license_data'] = $this->get_logos_core_transient( 'license_data' );
		self::$require_data['token'] = $this->get_logos_core_transient( 'token' );
		self::$instance = $this;
	}
	/**
	 * Get payload from jwt
	 *
	 * @param string $jwt
	 * @return array
	 */
	public function getPayloadFromJWT( string $jwt ): array {
		$slice_jwt = explode( '.', $jwt );
		if ( empty( $slice_jwt[1] ) ) {
			throw new Exception( Constants::init()->error_message['system/integrations/logos/api/jwt_wrong'] );
		}
		$payload = json_decode( base64_decode( $slice_jwt[1] ), true );
		return $payload;
	}
	/**
	 * Refresh bible token
	 *
	 * @return boolean
	 */
	public function refreshBibleToken(): bool {
		try {
			if ( empty( self::$require_data['token'] ) ) {
				$token = $this->getBibleToken();
				$this->set_logos_core_transient( 'token', $token );
				self::$require_data['token'] = $token;
				return true;
			}

			$payload = $this->getPayloadFromJWT( self::$require_data['token'] );
			$token_expiry_date = $payload['exp'];
			$exp = gmdate( 'Y-m-d H:i:s', $token_expiry_date );
			$distance = strtotime( "$exp -2 days" ) - strtotime( gmdate( 'Y-m-d H:i:s', time() ) );

			if ( 0 > $distance ) {
				$token = $this->getBibleToken();
				$this->set_logos_core_transient( 'token', $token );
				self::$require_data['token'] = $token;
				return true;
			}
		} catch ( \Throwable $err ) {
			return false;
		}
		return true;
	}
	/**
	 * Get bible token
	 *
	 * @return string
	 */
	public function getBibleToken(): string {
		$remote_host = $this->remote();
		$remote = "$remote_host/auth/verify";
		$license_key = self::$require_data['license_key'];
		$license_data = self::$require_data['license_data'];
		$response = wp_remote_post( $remote, [
			'body'        => [
				'license' => $license_key,
				'data' => $license_data,
			],
		] );
		if ( is_wp_error( $response ) ) {
			throw new Exception( $response->get_error_message() );
		}
		if ( 200 !== $response['response']['code'] ) {
			throw new Exception( $response['body'], $response['response']['code'] );
		}
		$body = $response['body'];
		return json_decode( $body )['token'];
	}

	public function getBibleLicense( array $args = [] ) {
		if ( empty( $args ) ) {
			return false;
		}
		try {

			v::key( 'email', v::email() )
				->key( 'identity_type', v::stringType() )
				->key( 'product_slug', v::stringType() )
				->key( 'username', v::stringType() )
				->key( 'password', v::stringType() )
				->validate( $args );
		} catch ( NestedValidationException $exception ) {
			throw $exception->getFullMessage();
		}
		$remote_host = $this->remote();
		$remote = "$remote_host/auth/license";
		$response = wp_remote_post( $remote, [
			'body'        => [
				'email' => $args['email'],
				'identity_type' => $args['identity_type'],
				'product_slug' => $args['product_slug'],
				'username' => $args['username'],
				'password' => $args['password'],
			],
		] );
	}
	/**
	 * Authenticated.
	 *
	 * @return void
	 */
	public function authenticated() {
		if ( empty( self::$require_data ) ) {
			return new WP_Error( 401, Constants::init()->error_message['should_activate'] );
		}
		if ( empty( self::$require_data['license_key'] ) ) {
			return new WP_Error( 401, Constants::init()->error_message['should_activate'] );
		}
		if ( empty( self::$require_data['license_data'] ) ) {
			return new WP_Error( 401, Constants::init()->error_message['should_input_register_info'] );
		}
		$refreshed = $this->refreshBibleToken();
		if ( is_wp_error( $refreshed ) ) {
			return $refreshed;
		}
		return $refreshed;
	}
	/**
	 * Get bible source remote host url by using rhema()->bible()->remote()
	 *
	 * @return string
	 */
	private function remote(): string {
		return ! empty( $_ENV['LOGOS_REMOTE'] ) ? $_ENV['LOGOS_REMOTE'] : 'https://logos.api';
	}
	/**
	 * Get translation info.
	 *
	 * @param string $translate_abbr
	 * @return void
	 */
	public function getTranslationInfo( $translate_abbr = 'kjv' ): array | WP_Error {
		$is_valid = $this->authenticated();
		if ( is_wp_error( $is_valid ) ) {
			return $is_valid;
		}
		if ( ! $is_valid ) {
			return new WP_Error( 401, Constants::init()->error_message['should_activate'] );
		}

		$bible_remote = $this->remote();
		$remote_query = "{$bible_remote}/{$translate_abbr}";
		$token = self::$require_data['token'];

		$translate_res = wp_remote_get( $remote_query, [
			'headers' => [
				'Authorization' => "Bearer $token",
			],
		] );
		$response = $translate_res['response'];
		$status_code = $response['code'];
		if ( 200 !== $status_code ) {
			return [];
		}
		if ( is_wp_error( $translate_res ) ) {
			return $translate_res;
		}
		if ( empty( $translate_res['body'] ) ) {
			return [];
		}
		return $translate_res['body'];
	}
	/**
	 * Get verse raws
	 *
	 * @param WP_REST_Request $request Values.
	 * @return array
	 * @since 1.0.0
	 */
	public function getRaws( $query_string ): array {
		$is_valid = $this->authenticated();
		if ( is_wp_error( $is_valid ) ) {

		}
		if ( ! $is_valid ) {

		}
		$bible_remote = rhema()->bible()->remote();
		$rhema_res = wp_remote_get( "$bible_remote/cuv?{$query_string}", [
			'headers' => [
				'Authorization' => 'Bearer ',
			],
		] );
		if ( is_wp_error( $rhema_res ) ) {
			return $rhema_res;
		}
		if ( empty( $rhema_res['body'] ) ) {
			return [];
		}
		wp_cache_add( 'fetched_bible', $rhema_res['body'], rhema()->plugin->name() );
		return json_decode( $rhema_res['body'] );
	}
	/**
	 * Get transient
	 *
	 * @param string $attr_name
	 * @param string $prefix
	 * @return mixed
	 */
	public function get_logos_core_transient( $attr_name, $prefix = 'rhema.bible.integrations.logos.core' ): mixed {
		$transient_label = "$prefix.$attr_name";
		return get_transient( $transient_label );
	}
	/**
	 * Set transient
	 *
	 * @param string $attr_name
	 * @param mixed $value
	 * @param string $prefix
	 * @param integer $expiration
	 * @return boolean
	 */
	public function set_logos_core_transient( $attr_name, $value, $prefix = 'rhema.bible.integrations.logos.core', $expiration = 0 ): bool {
		$transient_label = "$prefix.$attr_name";
		return set_transient( $transient_label, $value, $expiration );
	}
}

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

use Rhema\Common\Abstracts\Base;
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
final class Api extends Base {
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
		parent::__construct();
		self::$require_data['license_key'] = $this->getLogosCoreTransient( 'license_key' );
		self::$require_data['license_renew_date'] = $this->getLogosCoreTransient( 'license_renew_date' );
		self::$require_data['license_data'] = $this->getLogosCoreTransient( 'license_data' );
		self::$require_data['token'] = $this->getLogosCoreTransient( 'token' );
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
			if ( empty( $this->getSavedToken() ) ) {
				$token = $this->getBibleToken();
				$this->setLogosCoreTransient( 'token', $token );
				return true;
			}

			$payload = $this->getPayloadFromJWT( $this->getSavedToken() );
			$token_expiry_date = $payload['exp'];
			$exp = gmdate( 'Y-m-d H:i:s', $token_expiry_date );
			$distance = strtotime( "$exp -2 days" ) - strtotime( gmdate( 'Y-m-d H:i:s', time() ) );

			if ( 0 > $distance ) {
				$token = $this->getBibleToken();
				$this->setLogosCoreTransient( 'token', $token );
				return true;
			}
		} catch ( \Throwable $err ) {
			return false;
		}
		return true;
	}
	/**
	 * Get saved license data
	 *
	 * @return array
	 */
	public function getSavedData(): array {
		return [
			'key' => self::$require_data['license_key'],
			'renew_date' => self::$require_data['license_renew_date'],
			'data' => self::$require_data['license_data'],
		];
	}
	/**
	 * Get bible token from logos
	 *
	 * @return string|bool
	 */
	public function getSavedToken(): string | bool {
		if ( empty( self::$require_data['token'] ) ) {
			return '';
		}
		return self::$require_data['token'];
	}
	/**
	 * Get bible token from logos
	 *
	 * @return string
	 */
	public function getBibleToken( string $license_key = '', array $license_data = [] ): string {
		$remote_host = $this->remote();
		$remote = "$remote_host/auth/verify";
		$license_key = empty( $license_key ) ? self::$require_data['license_key'] : $license_key;
		$license_data = empty( $license_data ) ? self::$require_data['license_data'] : json_encode( $license_data );
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
		return json_decode( $body, true )['token'];
	}
	/**
	 * Get bible license
	 *
	 * @param array $args
	 * @return array|WP_Error
	 */
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
		return $response;
	}
	/**
	 * Authenticated.
	 *
	 * @return boolean|WP_Error
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
	private function remote( $path = '' ): string {
		$host = ! empty( $_ENV['LOGOS_REMOTE'] ) ? $_ENV['LOGOS_REMOTE'] : 'https://logos.api';
		if ( empty( $path ) ) {
			return $host;
		}
		$remote_url = "$host/$path";
		return $remote_url;
	}
	/**
	 * Get translation list.
	 *
	 * @return array|WP_Error
	 */
	public function getTranslationList(): array | WP_Error {
		$remote_query = $this->remote( 'bible/translates' );
		$translation_list_res = wp_remote_get( $remote_query );
		if ( is_wp_error( $translation_list_res ) ) {
			return $translation_list_res;
		}
		$response = $translation_list_res['response'];
		$status_code = $response['code'];
		if ( 200 !== $status_code ) {
			return new WP_Error( $status_code, $response['message'] );
		}

		if ( empty( $translation_list_res['body'] ) ) {
			return [];
		}
		return json_decode( $translation_list_res['body'], true );
	}
	/**
	 * Get translation info.
	 *
	 * @param string $translate_abbr
	 * @return array|WP_Error
	 */
	public function getTranslationInfo( $translate_abbr = 'kjv' ): array | WP_Error {
		$is_valid = $this->authenticated();
		if ( is_wp_error( $is_valid ) ) {
			return $is_valid;
		}
		if ( ! $is_valid ) {
			return new WP_Error( 401, Constants::init()->error_message['should_activate'] );
		}

		$remote_query = $this->remote( "bible/{$translate_abbr}" );
		$token = $this->getSavedToken();

		$translate_res = wp_remote_get( $remote_query, [
			'headers' => [
				'Authorization' => "Bearer $token",
			],
		] );
		$response = $translate_res['response'];
		$status_code = $response['code'];
		if ( 200 !== $status_code ) {
			return new WP_Error( $status_code, $response['message'] );
		}
		if ( is_wp_error( $translate_res ) ) {
			return $translate_res;
		}
		if ( empty( $translate_res['body'] ) ) {
			return [];
		}
		return json_decode( $translate_res['body'], true );
	}
	/**
	 * Get verse raws
	 *
	 * @param WP_REST_Request $request Values.
	 * @return array|WP_Error
	 * @since 1.0.0
	 */
	public function getRaws( $query_string ): array|WP_Error {
		$is_valid = $this->authenticated();
		if ( is_wp_error( $is_valid ) ) {
			return $is_valid;
		}
		if ( ! $is_valid ) {
			return new WP_Error( 403, Constants::init()->error_message['logos_authorization_failed'] );
		}
		if ( ! empty( wp_cache_get( 'fetched_bible', $this->plugin->name() ) ) ) {
			return wp_cache_get( 'fetched_bible', $this->plugin->name() );
		}
		$bible_remote = rhema()->bible()->remote();
		$token = $this->getSavedToken();
		$rhema_res = wp_remote_get( "$bible_remote/cuv?{$query_string}", [
			'headers' => [
				'Authorization' => "Bearer $token",
			],
		] );
		if ( is_wp_error( $rhema_res ) ) {
			return $rhema_res;
		}

		if ( 401 === $rhema_res['response']['code'] ) {
			return new WP_Error( 401, Constants::init()->error_message['should_activate'] );
		}

		if ( 200 !== $rhema_res['response']['code'] ) {
			return new WP_Error( 404, 'Can\'t get verse.' );
		}

		if ( empty( $rhema_res['body'] ) ) {
			return [];
		}

		$json_parsed = json_decode( $rhema_res['body'], true );
		wp_cache_add( 'fetched_bible', $json_parsed, $this->plugin->name() );
		return $json_parsed;
	}
	/**
	 * Search bible.
	 *
	 * @param string $keyword
	 * @param int $from
	 * @return array|WP_Error
	 */
	public function searchRaws( string $keyword, int $from = 0 ): array|WP_Error {
		$is_valid = $this->authenticated();
		if ( is_wp_error( $is_valid ) ) {
			return $is_valid;
		}
		if ( ! $is_valid ) {
			return new WP_Error( 403, Constants::init()->error_message['logos_authorization_failed'] );
		}
		$search_remote = "{$this->remote()}/search/cuv";
		$token = $this->getSavedToken();
		$rhema_res = wp_remote_get( "$search_remote?words={$keyword}&from={$from}", [
			'headers' => [
				'Authorization' => "Bearer $token",
			],
		] );
		if ( is_wp_error( $rhema_res ) ) {
			return $rhema_res;
		}

		if ( 401 === $rhema_res['response']['code'] ) {
			return new WP_Error( 401, Constants::init()->error_message['should_activate'] );
		}

		if ( 200 !== $rhema_res['response']['code'] ) {
			return new WP_Error( 404, 'Can\'t get verse.' );
		}
		$json_parsed = json_decode( $rhema_res['body'], true );
		return $json_parsed;
	}
	/**
	 * Signin function
	 *
	 * @param string $username
	 * @param string $pw
	 * @return array|WP_Error
	 */
	public function signin( string $username, string $pw ): array|WP_Error {
		if ( empty( $username ) ) {
			return new WP_Error( 400, 'Bad request.' );
		}
		try {
			v::key( 'username', v::stringType() )
				->key( 'password', v::stringType() )
				->validate( [
					'username' => $username,
					'password' => $pw,
				] );
		} catch ( NestedValidationException $exception ) {
			throw $exception->getFullMessage();
		}
		$remote_host = $this->remote();
		$remote = "$remote_host/users/signin";
		$response = wp_remote_post( $remote, [
			'body'        => [
				'identity_type' => 'domain',
				'username' => $username,
				'password' => $pw,
			],
		] );
		return $response;
	}
	/**
	 * Orders listing
	 *
	 * @param string $token
	 * @return array|WP_Error
	 */
	public function orders( string $token ): array|WP_Error {
		if ( empty( $token ) ) {
			return new WP_Error( 400, 'Bad request.' );
		}
		if ( ! empty( wp_cache_get( 'fetched_logos_orders', $this->plugin->name() ) ) ) {
			return wp_cache_get( 'fetched_logos_orders', $this->plugin->name() );
		}
		$remote_host = $this->remote();
		$remote = "$remote_host/orders";
		$response = wp_remote_get( $remote, [
			'headers' => [
				'Authorization' => "Bearer $token",
			],
		] );

		if ( is_wp_error( $response ) ) {
			return $response;
		}

		if ( 200 !== $response['response']['code'] ) {
			$error_message = ! empty( $response['body'] ) ? $response['body'] : 'Get orders wrong.';
			return new WP_Error( $response['response']['code'], $error_message );
		}

		if ( empty( $response['body'] ) ) {
			return [];
		}

		$json_parsed = json_decode( $response['body'], true );
		wp_cache_add( 'fetched_logos_orders', $json_parsed, $this->plugin->name() );
		return $json_parsed;
	}
	/**
	 * Get core transient
	 *
	 * @param string $attr_name
	 * @param string $prefix
	 * @return mixed
	 */
	public function getLogosCoreTransient( $attr_name, $prefix = 'rhema.bible.integrations.logos.core' ): mixed {
		$transient_label = "$prefix.$attr_name";
		return get_transient( $transient_label );
	}
	/**
	 * Set core transient
	 *
	 * @param string $attr_name
	 * @param mixed $value
	 * @param string $prefix
	 * @param integer $expiration
	 * @return boolean
	 */
	public function setLogosCoreTransient( $attr_name, $value, $prefix = 'rhema.bible.integrations.logos.core', $expiration = 0 ): bool {
		$transient_label = "$prefix.$attr_name";
		$transient_seted = set_transient( $transient_label, $value, $expiration );
		self::$require_data[ $attr_name ] = $value;
		return $transient_seted;
	}
	/**
	 * Delete core transient
	 *
	 * @param string $attr_name
	 * @param string $prefix
	 * @return boolean
	 */
	public function deleteLogosCoreTransient( $attr_name, $prefix = 'rhema.bible.integrations.logos.core' ): bool {
		$transient_label = "$prefix.$attr_name";
		$transient_deleted = delete_transient( $transient_label );
		return $transient_deleted;
	}
}

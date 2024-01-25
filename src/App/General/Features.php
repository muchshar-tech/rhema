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

namespace Rhema\App\General;

use Rhema\Common\Abstracts\Base;
use Rhema\Common\Traits\Singleton;
use Rhema\Common\Constants;
use Rhema\Integrations\Logos;
use Exception;
use WP_Error;

/**
 * Main function class for external uses
 *
 * @see rhema()
 * @package Rhema\Common
 */
final class Features extends Base {
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
		parent::__construct();
	}
	/**
	 * 取得所有功能的狀態
	 *
	 * @return void
	 */
	public function getActiveInfo() {
		$feature_names = array_values( Constants::FEATURE_NAMES );
		return array_reduce( $feature_names, function( $info, $feature_name ) {
			if ( isset( $info[ $feature_name ] ) && ! empty( $info[ $feature_name ] ) ) {
				return $info;
			}
			$info[ $feature_name ] = [];
		}, [] );
	}
	/**
	 * 檢查功能是否啟用
	 */
	public function isActive( $feature_name ): bool {
		$available_features = array_values( Constants::FEATURE_NAMES );
		if ( ! in_array( $feature_name, $available_features, true ) ) {
			return false;
		}
		
	}
	/**
	 * Get transient data
	 *
	 * @param string $prefix
	 * @param string $query_string
	 * @return mixed
	 */
	public function getTransient( string $prefix, string $query_string = '' ): mixed {
		$transient_label = "$prefix";
		if ( ! empty( $query_string ) ) {
			$remote_query_string_hash = hash( 'sha1', $query_string );
			$transient_label = "$prefix.$remote_query_string_hash";
		}
		return get_transient( $transient_label );
	}
	/**
	 * Set transient data
	 * prefix namespace = 'rhema'
	 *
	 * @param string $prefix
	 * @param string $query_string
	 * @param mixed $value
	 * @param integer $expiration
	 * @return boolean
	 */
	public function setTransient( string $prefix, mixed $value, string $query_string = '', $expiration = 0 ): bool {
		$transient_label = "$prefix";
		if ( ! empty( $query_string ) ) {
			$remote_query_string_hash = hash( 'sha1', $query_string );
			$transient_label = "$prefix.$remote_query_string_hash";
		}
		return set_transient( $transient_label, $value, $expiration );
	}
	/**
	 * Delete transient
	 *
	 * @param string $prefix
	 * @param string $query_string
	 * @return boolean
	 */
	public function deleteTransient( string $prefix, string $query_string = '' ): bool {
		$transient_label = "$prefix";
		if ( ! empty( $query_string ) ) {
			$remote_query_string_hash = hash( 'sha1', $query_string );
			$transient_label = "$prefix.$remote_query_string_hash";
		}
		$transient_deleted = delete_transient( $transient_label );
		return $transient_deleted;
	}
}

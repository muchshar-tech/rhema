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

namespace Rhema\App\General;

use Rhema\Common\Abstracts\Base;
use Rhema\Common\Traits\Singleton;

/**
 * Main function class for external uses
 *
 * @see rhema()
 * @package Rhema\Common
 */
final class Options extends Base {
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
	 * Get options
	 *
	 * @param WP_REST_Request $request Values.
	 * @return array
	 * @since 1.0.0
	 */
	public function get(): array {
		$plugin_domain = $this->plugin->textDomain();
		// TODO: 拿到 option 後要做一次 valid，要跟前台的 schema validator 一致
		$options = get_option( $plugin_domain );
		if ( empty( $options ) || ! $options ) {
			$options = '{}';
		}
		return json_decode( $options, true );
	}
	/**
	 * Update options
	 *
	 * @param WP_REST_Request $request Values.
	 * @return array
	 * @since 1.0.0
	 */
	public function set( $params ) {
		$plugin_domain = $this->plugin->textDomain();
		return update_option( $plugin_domain, json_encode( [
			'general' => $params,
		] ) );
	}

	public function checkRewriteIsEmpty( string $bible_entry_path ): bool {
		global $wp_rewrite;

		$permastruct = $wp_rewrite->get_extra_permastruct( 'post' );
		$rewrite_rules = get_option( 'rewrite_rules' );

		// 檢查新的 rewrite rule 是否已經存在
		foreach ( $new_rule as $pattern => $query ) {
			if ( array_key_exists( $pattern, $rewrite_rules ) ) {
				return false;
			}
		}
		return false;
	}
}

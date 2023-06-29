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

use WP_Error;
use WP_Query;

use Rhema\Common\Abstracts\Base;
use Rhema\Common\Traits\Singleton;
use Rhema\Common\Constants;

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
	 * @param string $key Key.
	 * @return array|string
	 * @since 1.0.0
	 */
	public function get( $keys = '' ): array|string {
		$plugin_domain = $this->plugin->textDomain();
		// TODO: 拿到 option 後要做一次 valid，要跟前台的 schema validator 一致
		$options = get_option( $plugin_domain );
		if ( empty( $options ) || ! $options ) {
			$options = '{}';
		}
		$options_decoded = json_decode( $options, true );
		if ( empty( $keys ) ) {
			return $options;
		}
		$keys = explode( '.', $keys );
		$option = 'kjv';
		$options = $options_decoded;
		foreach ( $keys as $key ) {
			if ( isset( $options[ $key ] ) && ! empty( $options[ $key ] ) ) {
				$options = $options[ $key ];
			} else {
				break;
			}
		}

		$option = $options;

		if ( empty( $option ) ) {
			return 'kjv';
		}
		return $option;
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

	public function checkRewriteIsEmpty( string $bible_entry_path ): bool | WP_Error {
		global $wp_rewrite;

		$new_rule = Constants::REWRITE_RULES;

		$rewrite_rules = get_option( 'rewrite_rules' );

		if ( is_string( $rewrite_rules ) ) {
			$rewrite_rules = [ $rewrite_rules ];
		}

		foreach ( $new_rule as $rule_pattern => $query ) {
			$rule_string = strtr( $rule_pattern, [ '$bible_entry_path' => $bible_entry_path ] );
			if ( array_key_exists( $rule_string, $rewrite_rules ) ) {
				return new WP_Error( 500, Constants::init()->error_message['system/app/general/options/rewrite_rules_exsited'] );
			}
		}

		$args = [
			's'              => $bible_entry_path,
			'post_type'      => [ 'post', 'page', 'my_custom_post_type' ],
			'post_status'    => [ 'publish', 'draft', 'future' ],
			'fields'         => 'ids',
			'posts_per_page' => -1,
		];

		$query_result = new WP_Query( $args );

		if ( $query_result->have_posts() ) {
			return new WP_Error( 500, Constants::init()->error_message['system/app/general/options/rewrite_rules_exsited'] );
		}

		return false;
	}
}

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
	 * Available options keys
	 */
	public $available_options_keys = [
		'general' => [
			'bible_entry',
			'bible_default_translation',
		],
	];
	public $default_options = [
		'general.bible_entry' => 'bible',
		'general.bible_default_translation' => 'kjv',
	];
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
		$options = get_option( $plugin_domain );
		if ( empty( $options ) || ! $options ) {
			$options = '{}';
		}
		if ( empty( $keys ) && ! empty( $options ) ) {
			return $options;
		}
		if ( ! $this->checkKeyIsValid( $keys ) ) {
			return '';
		}

		$options_decoded = json_decode( $options, true );
		if ( empty( $keys ) ) {
			return $options;
		}
		$keys = explode( '.', $keys );
		$option = null;
		$options = $options_decoded;
		foreach ( $keys as $key ) {
			if ( ! isset( $options[ $key ] ) ) {
				return null;
			}
			$options = $options[ $key ];
		}

		$option = $options;

		return $this->isNeedConvert2DefaultOption( $keys, $option );
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
	/**
	 * Check key is valid
	 * @param string $keys
	 * @return bool
	 */
	public function checkKeyIsValid( string $keys ): bool {
		$result = true;
		$keys = explode( '.', $keys );
		$available_options_keys = $this->available_options_keys;
		foreach ( $keys as $key ) {
			if ( count( array_filter( array_keys( $available_options_keys ), 'is_string' ) ) > 0 ) {
				if ( ! isset( $available_options_keys[ $key ] ) ) {
					$result = false;
					break;
				}
				$available_options_keys = $available_options_keys[ $key ];
			} else {
				if ( ! in_array( $key, $available_options_keys, true ) ) {
					$result = false;
					break;
				}
			}
		}
		return $result;
	}

	public function isNeedConvert2DefaultOption( $keys, $retrieved_option ) {
		if ( null !== $retrieved_option || ( ! empty( $retrieved_option ) || in_array( $retrieved_option, [ 0, '0', false ] ) ) ) {
			return $retrieved_option;
		}
		$default_options = $this->default_options;
		if ( ! in_array( $keys, $default_options ) ) {
			return null;
		}
		return $default_options[ $keys ];
	}
	/**
	 * Check rewrite rules is empty
	 *
	 * @param string $bible_entry_path
	 * @return bool|WP_Error
	 */
	public function checkRewriteIsEmpty( string $bible_entry_path ): bool | WP_Error {
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

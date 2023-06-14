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

namespace Rhema\App\Frontend;

use Rhema\Common\Abstracts\Base;
use Rhema\Common\Constants;

/**
 * UrlRewrite
 *
 * @package Rhema\App\Frontend
 * @since 1.0.0
 */
class UrlRewrite extends Base {
	/**
	 * Initialize the class.
	 *
	 * @since 1.0.0
	 */
	public function init() {
		add_action( 'init', function() {
			$options = rhema()->options()->get();
			$bible_entry_path = 'bible';
			$general = isset( $options['general'] ) ? $options['general'] : null;
			if ( isset( $general['bible_entry'] ) ) {
				$bible_entry_path = $general['bible_entry'];
			}

			foreach ( Constants::REWRITE_RULES as $rule_pattern => $url ) {
				$rule_regex_str = strtr( $rule_pattern, [ '$bible_entry_path' => $bible_entry_path ] );
				
				add_rewrite_rule( $rule_regex_str, $url, 'top' );
			}
			flush_rewrite_rules();
		}, 0 );

		add_filter( 'query_vars', function ( $query_vars ) {
			$query_vars[] = 'is_bible';
			$query_vars[] = 'bible_from';
			$query_vars[] = 'bible_to';
			return $query_vars;
		}, 10 );

		add_filter( 'template_include', function( $template ) {
			$query_var_is_bible = get_query_var( 'is_bible' );
			$is_bible = boolval( $query_var_is_bible );
			if ( ! $is_bible ) {
				return $template;
			}
			if ( preg_match( '/404\.php$/', $template ) ) {
				return $template;
			}

			return rhema()->templates()->get( 'entry-template', null, null, false );
		}, 10 );
	}
}

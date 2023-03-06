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
		do_action( 'qm/debug', 'Run UrlRewrite init' );

		add_filter( 'query_vars', function ( $query_vars ) {
			$query_vars[] = 'is_bible';
			$query_vars[] = 'bible_from';
			$query_vars[] = 'bible_to';
			return $query_vars;
		}, 0 );

		add_action( 'init', function() {
			$options = rhema()->options()->get();
			$bible_entry_path = 'bible';
			$general = isset( $options['general'] ) ? $options['general'] : null;
			if ( isset( $general['bible_entry'] ) ) {
				$bible_entry_path = $general['bible_entry'];
			}
			add_rewrite_rule( "($bible_entry_path)\/?$", 'index.php?is_bible=1', 'top' );
			add_rewrite_rule( "($bible_entry_path)\/(([^\/]+)\/([0-9]{0,3}):?([0-9]{0,3})?)\/?(?=(to|-)\/?(([^\/]+)\/([0-9]{0,3}):?([0-9]{0,3})?)\/?)?", 'index.php?is_bible=1&bible_from=$matches[2]&bible_to=$matches[7]', 'top' );
			flush_rewrite_rules();
		}, 0 );

		add_filter( 'template_include', function( $template ) {
			$is_bible = boolval( get_query_var( 'is_bible' ) );
			if ( ! $is_bible ) {
				return $template;
			}
			if ( preg_match( '/404\.php$/', $template ) ) {
				return $template;
			}

			return rhema()->templates()->get( 'entry-template', null, null, false );
		}, 0 );
	}
	public function retrieveRewriteRule() {
		return array(
			"($bible_entry_path)\/?$" => 'index.php?is_bible=1',
			"($bible_entry_path)\/(([^\/]+)\/([0-9]{0,3}):?([0-9]{0,3})?)\/?(?=(to|-)\/?(([^\/]+)\/([0-9]{0,3}):?([0-9]{0,3})?)\/?)?" => 'index.php?is_bible=1&bible_from=$matches[2]&bible_to=$matches[7]',
		);
	}
}

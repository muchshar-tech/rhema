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

		add_action( 'init', function() {
			add_rewrite_rule( 'bible\/(([^\/]+)\/([0-9]{0,3}):?([0-9]{0,3})?)\/?(?=(to|-)\/?(([^\/]+)\/([0-9]{0,3}):?([0-9]{0,3})?)\/?)?', 'index.php?bible_from=$matches[1]&bible_to=$matches[6]', 'top' );
			flush_rewrite_rules();
		}, 0 );

		add_filter( 'query_vars', function ( $query_vars ) {
			$query_vars[] = 'bible_from';
			$query_vars[] = 'bible_to';
			return $query_vars;
		}, 0 );

		add_filter( 'template_include', function( $template ) {
			if ( preg_match( '/404\.php$/', $template ) ) {
				return $template;
			}

			return rhema()->templates()->get( 'entry-template', null, null, false );
		}, 0 );
	}
}

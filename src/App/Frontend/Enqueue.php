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
 * Class Enqueue
 *
 * @package Rhema\App\Frontend
 * @since 1.0.0
 */
class Enqueue extends Base {

	/**
	 * Initialize the class.
	 *
	 * @since 1.0.0
	 */
	public function init() {
		/**
		 * This frontend class is only being instantiated in the frontend as requested in the Bootstrap class
		 *
		 * @see Requester::isFrontend()
		 * @see Bootstrap::__construct
		 *
		 * Add plugin code here
		 */
		add_action( 'wp_enqueue_scripts', [ $this, 'enqueueScripts' ] );
	}

	/**
	 * Enqueue scripts function
	 *
	 * @since 1.0.0
	 */
	public function enqueueScripts() {
		$enqueue_styles = [
			// [
			// 	'deps'    => [],
			// 	'handle'  => 'plugin-name-frontend-css',
			// 	'media'   => 'all',
			// 	'source'  => plugins_url( '/assets/public/css/frontend.css', RHEMA_PLUGIN_FILE ), // phpcs:disable ImportDetection.Imports.RequireImports.Symbol -- this constant is global
			// 	'version' => $this->plugin->version(),
			// ],
		];
		$enqueue_scripts = [
			[
				'deps'      => [],
				'handle'    => 'rhema-frontend-js',
				'in_footer' => true,
				'source'    => plugins_url( '/assets/public/js/frontend.js', RHEMA_PLUGIN_FILE ), // phpcs:disable ImportDetection.Imports.RequireImports.Symbol -- this constant is global
				'version'   => $this->plugin->version(),
			],
		];
		// Enqueue CSS
		foreach ( $enqueue_styles as $css ) {
			wp_enqueue_style( $css['handle'], $css['source'], $css['deps'], $css['version'], $css['media'] );
		}
		// Enqueue JS
		foreach ( $enqueue_scripts as $js ) {
			wp_enqueue_script( $js['handle'], $js['source'], $js['deps'], $js['version'], $js['in_footer'] );
		}

		// Send variables to JS
		global $wp_query;

		// localize script and send variables
		wp_localize_script( 'rhema-frontend-js', 'LOCALIZE_SCRIPT_VARIABLES',
			[
				'RHEMA_FRONTEND_CSS_URL'  => plugins_url( "/assets/public/css/frontend.css?ver={$this->plugin->version()}", RHEMA_PLUGIN_FILE ),
				'RHEMA_FRONTEND_URL'  => admin_url( 'admin-ajax.php' ),
				'RHEMA_WP_QUERY_VARS' => $wp_query->query_vars,
				'RHEMA_BIBLE' => rhema()->getBible(),
			]
		);
	}
}

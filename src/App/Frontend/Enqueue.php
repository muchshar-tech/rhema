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

use Exception;
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
				'deps'      => [ 'wp-i18n' ],
				'handle'    => '6c578e31e43e3a17dea38f6a319e105d',
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

		$functions_options = rhema()->options();

		// localize script and send variables

		try {
			$options = $functions_options->get();
			$bible_default_translation = ( empty( $options ) || empty( $options['general']['bible_default_translation'] ) ) ? 'kjv' : $options['general']['bible_default_translation'];
			$initial_raw = rhema()->bible()->getInitialRaw();
			if ( is_wp_error( $initial_raw ) ) {
				/** @var WP_Error $initial_raw */
				throw new Exception( $initial_raw->get_error_message() );
			}
			$translation_info = rhema()->bible()->getTranslationInfo( $bible_default_translation );
			if ( is_wp_error( $translation_info ) ) {
				/** @var WP_Error $translation_info */
				throw new Exception( $translation_info->get_error_message() );
			}

			$initial_data = [
				'NONCE' => $this->plugin->createNonce(),
				'UI' => rhema()->ui(),
				'RAW' => $initial_raw,
				'TRANSLATION' => [
					'ABBR' => rhema()->getData()['settings'],
					'INFO' => $translation_info,
				],
				'BOOKS' => rhema()->bible()->getBooks(),
				'QUERYS' => rhema()->bible()->getQuerySchema( true ),
			];
		} catch ( Exception $e ) {
			$initial_data = [
				'ERROR' => $e->getMessage(),
			];
		}
		$plugin_rel_path = plugin_dir_path( RHEMA_PLUGIN_FILE ) . 'languages';
		wp_localize_script( '6c578e31e43e3a17dea38f6a319e105d', 'LOCALIZE_SCRIPT_VARIABLES',
			[
				'RHEMA_SITE_ROOT'  => get_site_url( null, '', 'relative' ),
				'RHEMA_FRONTEND_CSS_URL'  => plugins_url( "/assets/public/css/frontend.css?ver={$this->plugin->version()}", RHEMA_PLUGIN_FILE ),
				'RHEMA_REST_ENDPOINTS'  => rhema()->bible()->restEndpoints(),
				'RHEMA_WP_QUERY_VARS' => $wp_query->query_vars,
				'RHEMA_DOMAIN_TEXT' => $this->plugin->textDomain(),
				// Send initail data to window, raw, title, comment...etc.
				'RHEMA_INITAIL_DATA' => $initial_data,
			]
		);
		wp_set_script_translations( '6c578e31e43e3a17dea38f6a319e105d', 'rhema', $plugin_rel_path );
	}
}

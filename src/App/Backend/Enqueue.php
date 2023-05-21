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

namespace Rhema\App\Backend;

use Exception;
use Rhema\Common\Abstracts\Base;
use Rhema\App\Backend\Notices;
use Rhema\Integrations\Logos;

/**
 * Class Enqueue
 *
 * @package Rhema\App\Backend
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
		 * This backend class is only being instantiated in the backend as requested in the Bootstrap class
		 *
		 * @see Requester::isAdminBackend()
		 * @see Bootstrap::__construct
		 *
		 * Add plugin code here
		 */
		
		add_action( 'admin_enqueue_scripts', [ $this, 'enqueueScripts' ] );
	}
	/**
	 * Enqueue scripts
	 *
	 * @since 1.0.0
	 */
	public function enqueueScripts() {
		$current_screen = get_current_screen();
		if ( 'toplevel_page_rhema' !== $current_screen->base ) {
			return;
		}
		$class_notices = new Notices();
		// Enqueue CSS
		foreach (
			[
				[
					'deps'    => [],
					'handle'  => 'rhema-backend-css',
					'media'   => 'all',
					'source'  => plugins_url( '/assets/public/css/backend.css', RHEMA_PLUGIN_FILE ), // phpcs:disable ImportDetection.Imports.RequireImports.Symbol -- this constant is global
					'version' => $this->plugin->version(),
				],
			] as $css ) {
			wp_enqueue_style( $css['handle'], $css['source'], $css['deps'], $css['version'], $css['media'] );
		}
		// Enqueue JS
		foreach (
			[
				[
					'deps'      => [],
					'handle'    => 'rhema-backend-js',
					'in_footer' => true,
					'source'    => plugins_url( '/assets/public/js/backend.js', RHEMA_PLUGIN_FILE ), // phpcs:disable ImportDetection.Imports.RequireImports.Symbol -- this constant is global
					'version'   => $this->plugin->version(),
				],
				[
					'deps'      => [ 'wp-i18n' ],
					'handle'    => 'rhema-translations',
					'in_footer' => true,
					'source'    => plugins_url( '/assets/public/js/translations.js', RHEMA_PLUGIN_FILE ), // phpcs:disable ImportDetection.Imports.RequireImports.Symbol -- this constant is global
					'version'   => $this->plugin->version(),
				]
			] as $js ) {
			wp_enqueue_script( $js['handle'], $js['source'], $js['deps'], $js['version'], $js['in_footer'] );
		}

		/** @var Logos\Api */
		$integration_logos_api = Logos\Api::init();

		$functions_options = rhema()->options();

		try {
			$options = $functions_options->get();
			$core_license_data = rhema()->bible()->getLicenseData();
			if ( is_wp_error( $core_license_data ) ) {
				/** @var WP_Error $core_license_data */
				throw new Exception( $core_license_data->get_error_message() );
			}

			$licenses_data = [
				'bible' => $core_license_data,
			];
			$availabel_translations = $integration_logos_api->getTranslationList();
			if ( is_wp_error( $availabel_translations ) ) {
				add_action( 'admin_notices', [ $class_notices, 'logosRemoteTimeout' ] );
				/** @var WP_Error $availabel_translations */
				throw new Exception( $availabel_translations->get_error_code() );
			}

			$backend = [
				'NONCE' => $this->plugin->createNonce(),
				'OPTIONS' => $options,
				'LICENSES' => $licenses_data,
				'DATA' => [
					'AVAILABLE_TRANSLATIONS' => $availabel_translations,
				],
			];
		} catch ( Exception $e ) {
			$licenses_data = [
				'ERROR' => $e->getMessage(),
			];
		}
		// localize script and send variables
		$plugin_rel_path = plugin_dir_path(RHEMA_PLUGIN_FILE) . 'languages';
		wp_set_script_translations( 'rhema-translations', 'rhema', $plugin_rel_path );
		wp_localize_script( 'rhema-backend-js', 'LOCALIZE_SCRIPT_VARIABLES',
			[
				'RHEMA_SITE_ROOT'  => get_site_url( null, '', ),
				'WP_REST_ENDPOINTS'  => rest_url( 'v2' ),
				'RHEMA_ADMIN_ROOT'  => admin_url(),
				'RHEMA_REST_ENDPOINTS'  => rhema()->bible()->restEndpoints(),
				'RHEMA_DOMAIN_TEXT' => $this->plugin->textDomain(),
				'WP_OPTIONS' => [
					'ADMIN_EMAIL' => get_option( 'admin_email' ),
					'HOST_DOMAIN' => $this->plugin->hostname(),
					'TIME_ZONE' => wp_timezone_string(),
				],
				'RHEMA_BACKEND' => $backend,
			]
		);
	}
}

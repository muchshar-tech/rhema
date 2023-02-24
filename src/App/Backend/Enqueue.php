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
			] as $js ) {
			wp_enqueue_script( $js['handle'], $js['source'], $js['deps'], $js['version'], $js['in_footer'] );
		}

		/** @var Options */
		$functions_options = rhema()->options();

		try {
			$options = json_decode( $functions_options->get() );
			$core_license_data = rhema()->bible()->getLicenseData();
			if ( is_wp_error( $core_license_data ) ) {
				/** @var WP_Error $core_license_data */
				throw new Exception( $core_license_data->get_error_message() );
			}

			$licenses_data = [
				'bible' => $core_license_data,
			];
			$backend = [
				'NONCE' => $this->plugin->createNonce(),
				'OPTIONS' => $options,
				'LICENSES' => $licenses_data,
			];
		} catch ( Exception $e ) {
			$licenses_data = [
				'ERROR' => $e->getMessage(),
			];
		}
		// localize script and send variables
		wp_localize_script( 'rhema-backend-js', 'LOCALIZE_SCRIPT_VARIABLES',
			[
				'RHEMA_SITE_ROOT'  => get_site_url( null, '', ),
				'WP_REST_ENDPOINTS'  => rest_url( 'v2' ),
				'RHEMA_ADMIN_ROOT'  => admin_url(),
				'RHEMA_REST_ENDPOINTS'  => rhema()->bible()->restEndpoints(),
				'RHEMA_DOMAIN_TEXT' => $this->plugin->textDomain(),
				'WP_OPTIONS' => [
					'ADMIN_EMAIL' => get_option( 'admin_email' ),
					'HOST_DOMAIN' => $_SERVER['SERVER_NAME'],
					'TIME_ZONE' => wp_timezone_string(),
				],
				'RHEMA_BACKEND' => $backend,
			]
		);
	}
}

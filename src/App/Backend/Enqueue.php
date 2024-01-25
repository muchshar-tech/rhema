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

namespace Rhema\App\Backend;

use Exception;
use Rhema\Common\Defaults;
use Rhema\Common\Abstracts\Base;
use Rhema\App\Backend\Notices;
use Rhema\Integrations\Logos;
use Rhema\App\Frontend\Enqueue as FrontendEnqueue;

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
		add_action( 'enqueue_block_editor_assets', [ $this, 'enqueueBlockEditorScripts' ] );
	}

	public function localizeScriptBaseArgs() {
		return array_merge( Defaults::init()->localizeScriptData(), [
			'RHEMA_ADMIN_ROOT'  => admin_url(),
			'WP_REST_ENDPOINTS' => rest_url( 'v2' ),
			'WP_OPTIONS' => [
				'ADMIN_EMAIL' => get_option( 'admin_email' ),
				'HOST_DOMAIN' => $this->plugin->hostname(),
				'TIME_ZONE' => wp_timezone_string(),
			],
		] );
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

		$enqueue_styles = [
			[
				'deps'    => [],
				'handle'  => 'rhema-backend-css',
				'media'   => 'all',
				'source'  => plugins_url( '/assets/public/css/backend.css', RHEMA_PLUGIN_FILE ), // phpcs:disable ImportDetection.Imports.RequireImports.Symbol -- this constant is global
				'version' => $this->plugin->version(),
			],
		];
		$enqueue_scripts = [
			[
				'deps'      => [],
				'handle'    => 'react',
				'in_footer' => true,
				'source' => null,
				'version' => null,
			],
			[
				'deps'      => [],
				'handle'    => 'react-dom',
				'in_footer' => true,
				'source' => null,
				'version' => null,
			],
			[
				'deps'      => [ 'react' ],
				'handle'    => 'vendors',
				'in_footer' => true,
				'source'    => plugins_url( '/assets/public/js/vendors.js', RHEMA_PLUGIN_FILE ), // phpcs:disable ImportDetection.Imports.RequireImports.Symbol -- this constant is global
				'version'   => $this->plugin->version(),
			],
			[
				'deps'      => [ 'wp-i18n', 'vendors' ],
				'handle'    => '6c578e31e43e3a17dea38f6a319e105d',
				'in_footer' => true,
				'source'    => plugins_url( '/assets/public/js/backend.js', RHEMA_PLUGIN_FILE ), // phpcs:disable ImportDetection.Imports.RequireImports.Symbol -- this constant is global
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

		/** @var Logos\Api */
		$integration_logos_api = Logos\Api::init();

		$functions_options = rhema()->options();

		$backend = [
			'NONCE' => $this->plugin->createNonce(),
			'LICENSES' => [],
		];

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
			$backend = array_merge( $backend, [
				'OPTIONS' => $options,
				'LICENSES' => $licenses_data,
				'DATA' => [
					'AVAILABLE_TRANSLATIONS' => [],
				],
			] );

			$available_translations = $integration_logos_api->getTranslationList();
			if ( is_wp_error( $available_translations ) ) {
				$backend['DATA']['AVAILABLE_TRANSLATIONS'] = $available_translations->get_error_data();
				add_action( 'admin_notices', [ $class_notices, 'logosRemoteTimeout' ] );
				/** @var WP_Error $available_translations */
				throw new Exception( $available_translations->get_error_message(), (int) $available_translations->get_error_code() );
			}

			$backend['DATA']['AVAILABLE_TRANSLATIONS'] = $available_translations;
		} catch ( Exception $e ) {
			$licenses_data = [
				'ERROR' => $e->getMessage(),
			];
			add_action( 'admin_notices', [ $class_notices, 'logosRemoteTimeout' ] );
		}
		// localize script and send variables
		$plugin_rel_path = plugin_dir_path( RHEMA_PLUGIN_FILE ) . 'languages';

		$localize_script_variables = array_merge( $this->localizeScriptBaseArgs(), [
			'RHEMA_BACKEND' => $backend,
		] );
		wp_localize_script(
			'6c578e31e43e3a17dea38f6a319e105d',
			'LOCALIZE_SCRIPT_VARIABLES',
			$localize_script_variables
		);
		wp_set_script_translations( '6c578e31e43e3a17dea38f6a319e105d', 'rhema', $plugin_rel_path );
	}
	/**
	 * Enqueue block editor scripts
	 *
	 * @since 1.0.0
	 */
	public function enqueueBlockEditorScripts() {

		$class_notices = new Notices();
		$frontend_enqueue = new FrontendEnqueue();

		$enqueue_styles = [
			[
				'deps'    => [],
				'handle'  => 'rhema-blockeditor-css',
				'media'   => 'all',
				'source'  => plugins_url( '/assets/public/css/blockeditor.css', RHEMA_PLUGIN_FILE ), // phpcs:disable ImportDetection.Imports.RequireImports.Symbol -- this constant is global
				'version' => $this->plugin->version(),
			],
		];
		$enqueue_scripts = [
			[
				'deps'      => [ 'react', 'wp-components', 'wp-core-data', 'wp-edit-post', 'wp-plugins' ],
				'handle'    => 'vendors',
				'in_footer' => true,
				'source'    => plugins_url( '/assets/public/js/vendors.js', RHEMA_PLUGIN_FILE ), // phpcs:disable ImportDetection.Imports.RequireImports.Symbol -- this constant is global
				'version'   => $this->plugin->version(),
			],
			[
				'deps'      => [ 'wp-i18n', 'vendors' ],
				'handle'    => '6c578e31e43e3a17dea38f6a319e105d',
				'in_footer' => true,
				'source'    => plugins_url( '/assets/public/js/blockeditor.js', RHEMA_PLUGIN_FILE ), // phpcs:disable ImportDetection.Imports.RequireImports.Symbol -- this constant is global
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

		/** @var Logos\Api */
		$integration_logos_api = Logos\Api::init();

		$block_editor = [
			'NONCE' => $this->plugin->createNonce(),
			'LICENSES' => [],
		];

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
			$block_editor = array_merge( $block_editor, [
				'OPTIONS' => $options,
				'LICENSES' => $licenses_data,
				'DATA' => [
					'AVAILABLE_TRANSLATIONS' => [],
				],
			] );

			$available_translations = $integration_logos_api->getTranslationList();
			if ( is_wp_error( $available_translations ) ) {
				$block_editor['DATA']['AVAILABLE_TRANSLATIONS'] = $available_translations->get_error_data();
				add_action( 'admin_notices', [ $class_notices, 'logosRemoteTimeout' ] );
				/** @var WP_Error $available_translations */
				throw new Exception( $available_translations->get_error_message(), (int) $available_translations->get_error_code() );
			}

			$block_editor['DATA']['AVAILABLE_TRANSLATIONS'] = $available_translations;

			$initial_data = $frontend_enqueue->initialData();

		} catch ( Exception $e ) {
			$licenses_data = [
				'ERROR' => $e->getMessage(),
			];
		}

		$plugin_rel_path = plugin_dir_path( RHEMA_PLUGIN_FILE ) . 'languages';

		$localize_script_variables = array_merge( $this->localizeScriptBaseArgs(), [
			'RHEMA_BLOCK_EDITOR_CSS_URL'  => plugins_url( '/assets/public/css/frontend.css?ver=1.0.112', RHEMA_PLUGIN_FILE ),
			'RHEMA_BLOCK_EDITOR' => $block_editor,
			'RHEMA_INITAIL_DATA' => $initial_data,
		] );

		wp_localize_script(
			'6c578e31e43e3a17dea38f6a319e105d',
			'LOCALIZE_SCRIPT_VARIABLES',
			$localize_script_variables
		);
		wp_set_script_translations( '6c578e31e43e3a17dea38f6a319e105d', 'rhema', $plugin_rel_path );
	}
}

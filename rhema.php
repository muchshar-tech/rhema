<?php
/**
 * Rhema
 *
 * @package   rhema
 * @author    Muchshar <jive.cheng@txipartners.com>
 * @copyright 2022 Rhema
 * @license   GNU General Public License v2.0 or later
 * @link      https://rhema.muchshar.com
 *
 * Plugin Name:      Rhema
 * Plugin URI:       https://rhema.muchshar.com
 * Description:      Rhema
 * Version:          1.0.0.005
 * DataBase Version: 1.0.0
 * Author:           TXIpartners
 * Author URI:       https://rhema.muchshar.com
 * Text Domain:      rhema
 * Domain Path:      /languages
 * Requires PHP:     8.0
 * Requires WP:      5.5.0
 * Namespace:        Rhema
 */

declare( strict_types = 1 );

/**
 * Define the default root file of the plugin
 *
 * @since 1.0.0
 */
const RHEMA_PLUGIN_FILE = __FILE__;

/**
 * Load PSR4 autoloader
 *
 * @since 1.0.0
 */
$rhema_autoloader = require plugin_dir_path( RHEMA_PLUGIN_FILE ) . 'vendor/autoload.php';

/**
 * Setup hooks (activation, deactivation, uninstall)
 *
 * @since 1.0.0
 */
register_activation_hook( __FILE__, [ 'Rhema\Config\Setup', 'activation' ] );
register_deactivation_hook( __FILE__, [ 'Rhema\Config\Setup', 'deactivation' ] );
register_uninstall_hook( __FILE__, [ 'Rhema\Config\Setup', 'uninstall' ] );

/**
 * Bootstrap the plugin
 *
 * @since 1.0.0
 */
if ( ! class_exists( '\Rhema\Bootstrap' ) ) {
	wp_die( __( 'Rhema is unable to find the Bootstrap class.', 'rhema' ) );
}
add_action(
	'plugins_loaded',
	static function () use ( $rhema_autoloader ) {
		try {
			$dotenv = \Dotenv\Dotenv::createImmutable( __DIR__, null, false );
			$dotenv->load();
		} catch ( Exception $e ) {}
		/**
		 * @see \Rhema\Bootstrap
		 */
		try {
			new \Rhema\Bootstrap( $rhema_autoloader );
		} catch ( Exception $e ) {
			wp_die( __( 'Rhema is unable to run the Bootstrap class.', 'rhema' ) );
		}
	}
);

/**
 * Create a main function for external uses
 *
 * @return \Rhema\Common\Functions
 * @since 1.0.0
 */
function rhema(): \Rhema\Common\Functions {
	return new \Rhema\Common\Functions();
}

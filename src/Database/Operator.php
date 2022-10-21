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

namespace Rhema\Database;

use Rhema\Common\Abstracts\Base;
use Rhema\Common\Utils\Errors;

/**
 * Database operator
 *
 * @package Rhema\Config
 * @since 1.0.0
 */
final class Operator extends Base {
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
		// add_action( 'admin_enqueue_scripts', [ $this, 'enqueueScripts' ] );
	}

	public function createTransVersionTable( string $translate_name ) {
		global $wpdb;
		if ( empty( $translate_name ) ) {
			Errors::pluginDie(
				'Param $translate_name cannot be empty.',
				'$translate_name empty.',
				plugin_basename( __FILE__ )
			);
		}

		$table_name = sprintf( '%s_%s_translations_%s', $wpdb->prefix, rhema()->plugin->name(), $translate_name );
		$table_exsits_query = $wpdb->prepare( 'SHOW TABLES LIKE %s', $wpdb->esc_like( $table_name ) );

		if ( $wpdb->get_var( $table_exsits_query ) === $table_name ) {
			Errors::pluginDie(
				"Table $table_name exsits.",
				'Table exsits.',
				plugin_basename( __FILE__ )
			);
		}

		$charset_collate = $wpdb->get_charset_collate();
		$sql = "CREATE TABLE $table_name (
            `id` int(8) unsigned zerofill NOT NULL,
            `book` int(11) NOT NULL,
            `chapter` int(11) NOT NULL,
            `verse` int(11) NOT NULL,
            `text` text NOT NULL,
            PRIMARY KEY (`id`),
            UNIQUE KEY `id_2` (`id`),
            KEY `id` (`id`)
        ) $charset_collate;";
		require_once ABSPATH . 'wp-admin/includes/upgrade.php';
		dbDelta( $sql );
	}

	/**
	 * Add or Update database version string
	 *
	 * @return bool|null
	 */
	public function updateVersion() {
		$rhema = rhema();
		$plugin_name = $rhema->plugin->name();
		$db_version_option_key = "{$plugin_name}_db_version";
		$db_version_from_db = get_option( $db_version_option_key );
		$db_version_current = $rhema->plugin->dbVersion();
		$update_success = null;

		if ( empty( $db_version_from_db ) ) {
			$update_success = add_option( $db_version_option_key, $db_version_current );
		}

		if ( version_compare( $db_version_from_db, $db_version_current ) < 0 ) {
			$update_success = update_option( $db_version_option_key, $db_version_current );
		}

		if ( ! $update_success ) {
			Errors::pluginDie(
				'Update db version option value failed.',
				'Update option failed.',
				plugin_basename( __FILE__ )
			);
		}

		return $update_success;
	}
}

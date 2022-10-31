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
use Rhema\Common\Traits\Singleton;

/**
 * Database operator
 *
 * @package Rhema\Config
 * @since 1.0.0
 */
final class Operator extends Base {
	/**
	 * Singleton trait
	 */
	use Singleton;
	/**
	 * Base constructor.
	 *
	 * @since 1.0.0
	 */
	public function __construct() {
		parent::__construct();
	}
	/**
	 * Install database
	 *
	 * @return void
	 */
	public function installDB() {
		try {
			$this->createVerseRelationTable();
			$this->createVerseRelationRelationshipsTable();
			$this->updateVersion();
		} catch ( \Throwable $err ) {
			Errors::pluginDie(
				__( 'Failed to install database.', 'rhema' ),
				'Install failed.',
				plugin_basename( __FILE__ ),
				$err
			);
		}
	}
	/**
	 * Generate table name
	 *
	 * @param string $table_name table name.
	 * @return string
	 */
	public function generateTableName( string $table_name ): string {
		global $wpdb;
		return sprintf( "%s%s_$table_name", $wpdb->prefix, $this->plugin->name() );
	}
	/**
	 * Create verse relation table
	 *
	 * @return array Strings containing the results of the various update queries.
	 */
	public function createVerseRelationTable(): array {
		global $wpdb;

		$table_name = $this->generateTableName( 'verse_relations' );

		$charset_collate = $wpdb->get_charset_collate();

		$sql = "CREATE TABLE $table_name (
            `id` bigint(20) unsigned auto_increment NOT NULL,
            `object_type` varchar(20) NOT NULL,
            `object_id` bigint(20) NOT NULL,
            `name` varchar(255) NOT NULL,
            `description` text NOT NULL,
            `url` text NOT NULL,
            `image` text,
            PRIMARY KEY (`id`),
            KEY `type_id` (`object_type`, `object_id`),
            KEY `name` (`name`)
        ) $charset_collate;";
		require_once ABSPATH . 'wp-admin/includes/upgrade.php';
		return dbDelta( $sql );
	}
	/**
	 * Create verse relation relationships
	 *
	 * @return array Strings containing the results of the various update queries.
	 */
	public function createVerseRelationRelationshipsTable(): array {
		global $wpdb;

		$table_name = $this->generateTableName( 'verse_relations_relationships' );

		$charset_collate = $wpdb->get_charset_collate();

		$sql = "CREATE TABLE $table_name (
            `id` bigint(20) unsigned auto_increment NOT NULL,
            `verse_id` varchar(255) NOT NULL,
            `relation_id` varchar(255) NOT NULL,
            `translation_abbr` varchar(8) NOT NULL,
            PRIMARY KEY (`id`),
            KEY `verse_relation` (`verse_id`, `relation_id`)
        ) $charset_collate;";
		require_once ABSPATH . 'wp-admin/includes/upgrade.php';
		return dbDelta( $sql );
	}

	/**
	 * Add or Update database version string
	 *
	 * @return bool|null
	 */
	public function updateVersion() {
		$plugin_name = $this->plugin->name();
		$db_version_option_key = "{$plugin_name}_db_version";
		$db_version_from_db = get_option( $db_version_option_key );
		$db_version_current = $this->plugin->dbVersion();
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

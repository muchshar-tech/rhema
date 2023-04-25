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

use Rhema\Common\Abstracts\Base;

/**
 * Class Settings
 *
 * @package Rhema\App\Backend
 * @since 1.0.0
 */
class Settings extends Base {

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
		 * Add plugin code here for admin settings specific functions
		 */
		add_action( 'admin_menu', [ $this, 'adminMenu' ], 5 );
		add_action( 'admin_init', [ $this, 'settingsInit' ] );
	}
	/**
	 * Rhema admin menu
	 *
	 * @return void
	 */
	public function adminMenu() {
		$plugin_domain = $this->plugin->textDomain();
		add_menu_page( 'Rhema', 'Rhema', 'manage_options', $plugin_domain, [ $this, 'hello' ], 'dashicons-book' );
		add_submenu_page( $plugin_domain, 'Question Category', 'Question Categories', 'manage_options', 'edit-tags.php?taxonomy=bible-question-category' );
		add_action( 'parent_file', [ $this, 'adminQuestionCategoryMenuModifier' ] );
	}

	public function adminQuestionCategoryMenuModifier( string $parent_file ) {
		global $current_screen;
		$plugin_domain = $this->plugin->textDomain();

		if ( $current_screen->taxonomy === 'bible-question-category' ) {
			return $plugin_domain;
		}

		return $parent_file;
	}

	public function hello() {
		?>
		<div id="rhema-app" class="wrap">
		</div>
		<?php
	}

	public function settingsInit() {
		$plugin_domain = $this->plugin->textDomain();
		register_setting( 'general', $plugin_domain );
		return;
	}
}

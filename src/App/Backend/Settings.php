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
	private $option_default = [
		// 設定前台聖經app的入口頁面
		'entry_route_page' => null,
		// 已安裝的譯本
		'installed_translations' => [],
	];
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
		add_action( 'admin_menu', [ $this, 'admin_menu' ], 5 );
		add_action( 'admin_init', [ $this, 'settings_init' ] );
	}
	/**
	 * Rhema admin menu
	 *
	 * @return void
	 */
	public function admin_menu() {
		$plugin_domain = $this->plugin->textDomain();
		$main_hook_suffix = add_menu_page( 'Rhema', 'Rhema', 'manage_options', $plugin_domain, [ $this, 'hello' ], 'dashicons-awards' );
	}

	public function hello() {
		?>
		<div id="rhema-app" class="wrap">
		</div>
		<?php
	}

	public function settings_init() {
		$plugin_domain = $this->plugin->textDomain();
		register_setting( 'general', $plugin_domain );
		return;
	}
}

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
		add_action( 'admin_menu', [ $this, 'admin_menu' ], 5 );
	}
	/**
	 * Rhema admin menu
	 *
	 * @return void
	 */
	public function admin_menu() {
		$main_hook_suffix = add_menu_page( 'Rhema', 'Rhema', 'manage_options', 'rhema', [ $this, 'hello' ], 'dashicons-awards' );
	}

	public function hello() {
		?>
		<div id="rhema-app" class="wrap">
		</div>
		<?php
	}
}

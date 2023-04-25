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
use Rhema\Common\Constants;

/**
 * Class Notices
 *
 * @package Rhema\App\Backend
 * @since 1.0.0
 */
class Notices extends Base {

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
		 * Add plugin code here for admin notices specific functions
		 */
		add_action( 'admin_notices', [ $this, 'permalinkSetupFirst' ] );
	}

	/**
	 * Example admin notice
	 *
	 * @since 1.0.0
	 */
	public function exampleAdminNotice() {
		global $pagenow;
		if ( $pagenow === 'options-general.php' ) {
			echo '<div class="notice notice-warning is-dismissible">
             <p>This is an example of a notice that appears on the settings page.</p>
         </div>';
		}
	}
	/**
	 * Show permalink not set yet.
	 *
	 * @since 1.0.0
	 */
	public function permalinkSetupFirst() {
		$permalink_structure = get_option( 'permalink_structure' );
		if ( empty( $permalink_structure ) ) :
			?>
		<div class="notice notice-error is-dismissible">
			<p><?php echo Constants::init()->error_message['should_setup_permalink']; ?></p>
		</div>
			<?php
		endif;
	}
	/**
	 * Show retry later when logos server time out.
	 *
	 * @since 1.0.0
	 */
	public function logosRemoteTimeout() {
		?>
		<div class="notice notice-error is-dismissible">
			<p><?php echo Constants::init()->error_message['remote_timeout']; ?></p>
		</div>
		<?php
	}
}

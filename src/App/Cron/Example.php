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

namespace Rhema\App\Cron;

use Rhema\Common\Abstracts\Base;

/**
 * Class Example
 *
 * @package Rhema\App\Cron
 * @since 1.0.0
 */
class Example extends Base {

	/**
	 * Initialize the class.
	 *
	 * @since 1.0.0
	 */
	public function init() {
		/**
		 * This class is only being instantiated if DOING_CRON is defined in the requester as requested in the Bootstrap class
		 *
		 * @see Requester::isCron()
		 * @see Bootstrap::__construct
		 */

		add_action( 'wp', [ $this, 'activationDeactivationExample' ] );
		add_action( 'plugin_cronjobs', [ $this, 'cronjobRepeatingFunctionExample' ] );
	}

	/**
	 * Activates a scheduled event (if it does not exist already)
	 *
	 * @since 1.0.0
	 */
	public function activationDeactivationExample() {
		if ( ! wp_next_scheduled( 'plugin_cronjobs' ) ) {
			wp_schedule_event( time(), 'daily', 'plugin_cronjobs' );
		} else {
			$timestamp = wp_next_scheduled( 'mycronjob' );
			wp_unschedule_event( $timestamp, 'mycronjob' );
		}
	}

	/**
	 * The function that gets called with the scheduled event
	 *
	 * @since 1.0.0
	 */
	public function cronjobRepeatingFunctionExample() {
		// do here what needs to be done automatically as per schedule
	}
}

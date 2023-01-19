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

namespace Rhema\App\General;

use Rhema\Common\Abstracts\Base;
use Rhema\Common\Traits\Singleton;

/**
 * Main function class for external uses
 *
 * @see rhema()
 * @package Rhema\Common
 */
final class Options extends Base {
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
	 * Get options
	 *
	 * @param WP_REST_Request $request Values.
	 * @return array
	 * @since 1.0.0
	 */
	public function get() {
		$plugin_domain = $this->plugin->textDomain();
		// TODO: 拿到 option 後要做一次 valid，要跟前台的 schema validator 一致
		return get_option( $plugin_domain );
	}
	/**
	 * Update options
	 *
	 * @param WP_REST_Request $request Values.
	 * @return array
	 * @since 1.0.0
	 */
	public function set( $params ) {
		$plugin_domain = $this->plugin->textDomain();
		return update_option( $plugin_domain, json_encode( [
			'general' => $params,
		] ) );
	}
}

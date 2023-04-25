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

namespace Rhema\Common\Abstracts;

use Rhema\Config\Plugin;

/**
 * The Base class which can be extended by other classes to load in default methods
 *
 * @package Rhema\Common\Abstracts
 * @since 1.0.0
 */
abstract class Base {
	/**
	 * @var Plugin : will be filled with data from the plugin config class
	 * @see Plugin
	 */
	protected Plugin $plugin;

	/**
	 * Base constructor.
	 *
	 * @since 1.0.0
	 */
	public function __construct() {
		$this->plugin = Plugin::init();
	}
}

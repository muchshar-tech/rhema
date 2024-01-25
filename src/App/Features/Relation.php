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

namespace Rhema\App\Features;

use Rhema\Common\Abstracts\Base;
use Rhema\Common\Traits\Singleton;
use Rhema\Common\Constants;
use Rhema\Integrations\Logos;
use Exception;
use WP_Error;

/**
 * Main function class for external uses
 *
 * @see rhema()
 * @package Rhema\Common
 */
final class Relation extends Base {
	/**
	 * Singleton trait
	 */
	use Singleton;
	/**
	 * Constructor.
	 */
	public function __construct() {
	}
    
}

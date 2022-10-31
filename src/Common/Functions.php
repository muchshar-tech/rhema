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

namespace Rhema\Common;

use Rhema\App\Common\Constants;
use Rhema\App\General\Bible;
use Rhema\App\Frontend\Templates;
use Rhema\Common\Abstracts\Base;

/**
 * Main function class for external uses
 *
 * @see rhema()
 * @package Rhema\Common
 */
class Functions extends Base {
	/**
	 * Get the template instantiated class using rhema()->templates()
	 *
	 * @return Constants
	 * @since 1.0.0
	 */
	public function constants(): Constants {
		return Constants::init();
	}
	/**
	 * Get the template instantiated class using rhema()->templates()
	 *
	 * @return Templates
	 * @since 1.0.0
	 */
	public function templates(): Templates {
		return new Templates();
	}
	/**
	 * Get the bible instantiated class using rhema()->bible()
	 *
	 * @return Bible
	 * @since 1.0.0
	 */
	public function bible(): Bible {
		return Bible::init();
	}

	/**
	 * Get plugin data by using rhema()->getData()
	 *
	 * @return array
	 * @since 1.0.0
	 */
	public function getData(): array {
		return $this->plugin->data();
	}

	/**
	 * Get translation of ui text
	 *
	 * @return array
	 */
	public function ui(): array {
		return [
			'bible.catalog' => __( 'Catalog', 'rhema' ),
		];
	}

}

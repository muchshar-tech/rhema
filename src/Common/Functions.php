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

use Rhema\App\Frontend\Templates;
use Rhema\Common\Abstracts\Base;
use Rhema\Common\Bible;

/**
 * Main function class for external uses
 *
 * @see rhema()
 * @package Rhema\Common
 */
class Functions extends Base {
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
	 * Get the template instantiated class using rhema()->templates()
	 *
	 * @return Templates
	 * @since 1.0.0
	 */
	public function templates(): Templates {
		return new Templates();
	}

	public function bible(): Bible {
		return new Bible();
	}

	public function getQueryVar(): array {
		$bible_from = preg_replace( '/\//', '', get_query_var( 'bible_from' ) );
		$bible_to = preg_replace( '/\//', '', get_query_var( 'bible_to' ) );
		if ( empty( $bible_from ) ) {
			return [];
		}
		$query_array = [ $bible_from ];
		if ( ! empty( $bible_to ) ) {
			$query_array[] = $bible_to;
		}
		return $query_array;
	}

	public function ui(): array {
		return [
			'bible.catalog' => __( 'Catalog', 'rhema' )
		];
	}
}

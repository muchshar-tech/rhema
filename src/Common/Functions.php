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

	public function getBible(): array {
		if ( ! empty( wp_cache_get( 'fetched_bible', rhema()->plugin->name() ) ) ) {
			return json_decode( wp_cache_get( 'fetched_bible', rhema()->plugin->name() ) );
		}
		$bible_from = preg_replace( '/\//', '', get_query_var( 'bible_from' ) );
		$bible_to = preg_replace( '/\//', '', get_query_var( 'bible_to' ) );
		$rhema_res = wp_remote_get( "http://10.0.2.2:7000/bible/cuv?range=$bible_from&range=$bible_to" );
		wp_cache_add( 'fetched_bible', $rhema_res['body'], rhema()->plugin->name() );
		return json_decode( $rhema_res['body'] );
	}
}

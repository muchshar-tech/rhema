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
use Rhema\Common\Constants;

/**
 * Class Queries
 *
 * @package Rhema\App\General
 * @since 1.0.0
 */
class Queries extends Base {
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
	 * Initialize the class.
	 *
	 * @since 1.0.0
	 */
	public function init() {
		/**
		 * This general class is always being instantiated as requested in the Bootstrap class
		 *
		 * @see Bootstrap::__construct
		 *
		 * Add plugin code here
		 */
	}

	/**
	 * @param $posts_count
	 * @param string $orderby
	 * @return \WP_Query
	 */
	public function getPosts( $posts_count, $orderby = 'date' ): \WP_Query {
		return new \WP_Query(
			[
				'post_type'      => Constants::BIBLE_QUESTION_TYPE['id'],
				'post_status'    => 'publish',
				'order'          => 'DESC',
				'posts_per_page' => $posts_count,
				'orderby'        => $orderby,
			]
		);
	}

	/**
	 * Example
	 *
	 * @return array
	 */
	public function getPostIds(): array {
		global $wpdb;
		return $wpdb->get_col( "select ID from {$wpdb->posts} LIMIT 3" );
	}
	/**
	 * Example
	 *
	 * @return array
	 */
	public function getQuestions(): array {
		global $wpdb;
		return $wpdb->get_col( "select ID from {$wpdb->posts} LIMIT 3" );
	}
	/**
	 * Example
	 *
	 * @return array
	 */
	public function getRelations(): array {
		global $wpdb;
		return $wpdb->get_col( "select ID from {$wpdb->posts} LIMIT 3" );
	}
	/**
	 * Example
	 *
	 * @return array
	 */
	public function insertRelations(): array {
		global $wpdb;
		return $wpdb->get_col( "select ID from {$wpdb->posts} LIMIT 3" );
	}
}

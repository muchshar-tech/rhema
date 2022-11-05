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
use Rhema\Common\Constants;

/**
 * Class PostTypes
 *
 * @package Rhema\App\General
 * @since 1.0.0
 */
class Taxonomy extends Base {
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
		add_action( 'init', [ $this, 'register' ] );
	}

	/**
	 * Register post type
	 *
	 * @since 1.0.0
	 */
	public function register() {
		$plugin_domain = $this->plugin->textDomain();
		$labels = [
			'name'              => __( 'Bible Question Categories', 'rhema' ),
			'singular_name'     => __( 'Bible Question Category', 'rhema' ),
			'search_items'      => __( 'Search Bible Question Categories', 'rhema' ),
			'all_items'         => __( 'All Bible Question Categories', 'rhema' ),
			'parent_item'       => __( 'Parent Bible Question Category', 'rhema' ),
			'parent_item_colon' => __( 'Parent Bible Question Category:', 'rhema' ),
			'edit_item'         => __( 'Edit Bible Question Category', 'rhema' ),
			'update_item'       => __( 'Update Bible Question Category', 'rhema' ),
			'add_new_item'      => __( 'Add New Bible Question Category', 'rhema' ),
			'new_item_name'     => __( 'New Bible Question Category Name', 'rhema' ),
			'menu_name'         => __( 'Bible Question Category', 'rhema' ),
		];
		$args   = [
			'hierarchical'      => true, // make it hierarchical (like categories)
			'labels'            => $labels,
			'show_ui'           => true,
			'show_in_menu'      => $plugin_domain,
			'show_admin_column' => true,
			'query_var'         => true,
			'rewrite'           => [ 'slug' => Constants::BIBLE_QUESTION_TYPE['id'] ],
		];
		register_taxonomy( 'bible-question-category', [ Constants::BIBLE_QUESTION_TYPE['id'] ], $args );
	}
}

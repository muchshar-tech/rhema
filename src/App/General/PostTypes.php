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
use Rhema\App\Common\Constants;

/**
 * Class PostTypes
 *
 * @package Rhema\App\General
 * @since 1.0.0
 */
class PostTypes extends Base {
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
		register_post_type( Constants::BIBLE_QUESTION_TYPE['id'],
			[
				'labels'             => [
					'name'           => Constants::BIBLE_QUESTION_TYPE['title'],
					'singular_name'  => Constants::BIBLE_QUESTION_TYPE['singular'],
					'menu_name'      => Constants::BIBLE_QUESTION_TYPE['title'],
					'name_admin_bar' => Constants::BIBLE_QUESTION_TYPE['singular'],
					'add_new'        => sprintf( /* translators: %s: post type singular title */ __( 'New %s', 'rhema' ), Constants::BIBLE_QUESTION_TYPE['singular'] ),
					'add_new_item'   => sprintf( /* translators: %s: post type singular title */ __( 'Add New %s', 'rhema' ), Constants::BIBLE_QUESTION_TYPE['singular'] ),
					'new_item'       => sprintf( /* translators: %s: post type singular title */ __( 'New %s', 'rhema' ), Constants::BIBLE_QUESTION_TYPE['singular'] ),
					'edit_item'      => sprintf( /* translators: %s: post type singular title */ __( 'Edit %s', 'rhema' ), Constants::BIBLE_QUESTION_TYPE['singular'] ),
					'view_item'      => sprintf( /* translators: %s: post type singular title */ __( 'View %s', 'rhema' ), Constants::BIBLE_QUESTION_TYPE['singular'] ),
					'all_items'      => sprintf( /* translators: %s: post type title */ __( '%s', 'rhema' ), Constants::BIBLE_QUESTION_TYPE['title'] ),
					'search_items'   => sprintf( /* translators: %s: post type title */ __( 'Search %s', 'rhema' ), Constants::BIBLE_QUESTION_TYPE['title'] ),
				],
				'public'             => true,
				'publicly_queryable' => true,
				'has_archive'        => Constants::BIBLE_QUESTION_TYPE['archive'],
				'show_ui'            => true,
				'rewrite'            => [
					'slug'       => Constants::BIBLE_QUESTION_TYPE['archive'],
					'with_front' => true,
				],
				'show_in_menu'       => $plugin_domain,
				'query_var'          => true,
				'capability_type'    => 'post',
				'menu_icon'          => Constants::BIBLE_QUESTION_TYPE['icon'],
				'supports'           => [ 'title', 'editor' ],
			]
		);
	}
}

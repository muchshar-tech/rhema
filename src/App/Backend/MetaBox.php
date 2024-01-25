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

namespace Rhema\App\Backend;

use Rhema\Common\Abstracts\Base;
use Rhema\Common\Constants;

/**
 * Class MetaBox
 *
 * @package Rhema\App\Backend
 * @since 1.0.0
 */
class MetaBox extends Base {

	/**
	 * Initialize the class.
	 *
	 * @since 1.0.0
	 */
	public function init() {
		/**
		 * This backend class is only being instantiated in the backend as requested in the Bootstrap class
		 *
		 * @see Requester::isAdminBackend()
		 * @see Bootstrap::__construct
		 *
		 * Add plugin code here for admin notices specific functions
		 */
		// add_action( 'add_meta_boxes', [ $this, 'bible_question_anwser_meta_box' ] );
		add_action( 'add_meta_boxes', [ $this, 'bibleRelationsMetaBox' ] );
	}
	/**
	 * Anwser meta box
	 *
	 * @since 1.0.0
	 */
	public function bibleRelationsMetaBox() {
		add_meta_box(
			$this->plugin->textDomain(),
			'Bible Relations',
			[ $this, 'bible_relations_meta_box_html' ],
			[ 'post', 'page', 'attachment' ],
			'advanced',
			'default',
			[
				'__block_editor_compatible_meta_box' => false,
				'__back_compat_meta_box'             => true,
			]
		);
	}
	/**
	 * Undocumented function
	 *
	 * @param [type] $post
	 * @return void
	 */
	/**
	 * Anwser meta box html
	 *
	 * @since 1.0.0
	 */
	public function bible_relations_meta_box_html( $post ) {
		?>
		<div id="bible-relations-meta-box" class="tailwind">
			Relations
		</div>
		<?php
	}
}

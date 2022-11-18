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
		add_action( 'add_meta_boxes', [ $this, 'bible_question_anwser_meta_box' ] );
	}
	/**
	 * Anwser meta box
	 *
	 * @since 1.0.0
	 */
	public function bible_question_anwser_meta_box() {
		$screens = [ Constants::BIBLE_QUESTION_TYPE['id'] ];
		foreach ( $screens as $screen ) {
			add_meta_box(
				Constants::BIBLE_QUESTION_TYPE['id'] . '-anwser',
				'Anwsers',
				[ $this, 'bible_question_anwser_meta_box_html' ],
				$screen
			);
		}
	}
	/**
	 * Anwser meta box html
	 *
	 * @since 1.0.0
	 */
	public function bible_question_anwser_meta_box_html( $post ) {
		?>
		<div id="bible-question-anwser-meta-box" class="tailwind">
        </div>
		<?php
	}
}

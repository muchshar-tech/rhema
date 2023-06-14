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

namespace Rhema\App\General;

use WP_Sitemaps_Provider;
use Rhema\Common\Abstracts\Base;
use Rhema\Common\Constants;

class SitemapXML extends Base {
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

	public function register() {
		$plugin_domain = $this->plugin->textDomain();

		$provider = new class() extends WP_Sitemaps_Provider {
			public function __construct() {
				$this->name = rhema()->getData()['text-domain'];
			}

			public function get_url_list( $page_num, $post_type = '' ) {
				$options = rhema()->options()->get();
				$bible_entry_path = 'bible';
				$general = isset( $options['general'] ) ? $options['general'] : null;
				if ( isset( $general['bible_entry'] ) ) {
					$bible_entry_path = $general['bible_entry'];
				}
				$bible_entry_url = home_url() . "/$bible_entry_path";
				$books = Constants::init()->books;

				foreach ( $books as $book ) {
					$books_urls[] = [
						'loc' => $bible_entry_url . '/' . $book['slug'],
					];
					if ( $book['chapters'] <= 0 ) {
						continue;
					}
					for ( $i = 1; $i <= $book['chapters']; $i++ ) {
						$books_urls[] = [
							'loc' => $bible_entry_url . '/' . $book['slug'] . '/' . $i,
						];
					}
				}
				return $books_urls;
			}

			public function get_max_num_pages( $subtype = '' ) {
				return 1;
			}
		};
		wp_register_sitemap_provider( $plugin_domain, $provider );
	}
}

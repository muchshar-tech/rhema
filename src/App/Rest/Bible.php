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

namespace Rhema\App\Rest;

use Rhema\Common\Abstracts\Base;

/**
 * Class Example
 *
 * @package Rhema\App\Rest
 * @since 1.0.0
 */
class Bible extends Base {

	/**
	 * Initialize the class.
	 *
	 * @since 1.0.0
	 */
	public function init() {
		/**
		 * This class is only being instantiated if REST_REQUEST is defined in the requester as requested in the Bootstrap class
		 *
		 * @see Requester::isRest()
		 * @see Bootstrap::__construct
		 */

		if ( class_exists( 'WP_REST_Server' ) ) {
			add_action( 'rest_api_init', [ $this, 'addPluginRestApi' ] );
		}
	}

	/**
	 * @since 1.0.0
	 */
	public function addPluginRestApi() {
		$this->addBibleRoute();
	}

	/**
	 * Examples
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function addBibleRoute() {
		register_rest_route(
			'rhema/v1',
			'/bible',
			[
				'methods'  => \WP_REST_Server::READABLE,
				'callback' => [ $this, 'getRaw' ],
				'args'     => [
					'range'  => [
						'default' => 'gen1:1',
					],
				],
			]
		);
	}

	/**
	 * Examples
	 *
	 * @param WP_REST_Request $request Values.
	 * @return array
	 * @since 1.0.0
	 */
	public function getRaw( $request ): array {
		$param = $request->get_param( 'range' );
		$query_schema = rhema()->bible()->getQuerySchema( false, $param );
		$query_from_book = $query_schema[0]['book'];
		$query_from_chapter = $query_schema[0]['chapter'];
		$query_from_verse = $query_schema[0]['verse'];
		$query_to_book = $query_schema[1]['book'];
		$query_to_chapter = $query_schema[1]['chapter'];
		$query_to_verse = $query_schema[1]['verse'];
		$param_from = "range={$query_from_book}{$query_from_chapter}:{$query_from_verse}";
		$param_to = '';
		if ( isset( $query_schema[1] ) ) {
			$param_to = "&range={$query_to_book}{$query_to_chapter}:{$query_to_verse}";
		}
		$bible_remote = rhema()->bible()->remote();
		$rhema_res = wp_remote_get( "$bible_remote/cuv?{$param_from}{$param_to}" );
		if ( $rhema_res instanceof WP_Error ) {
			return $rhema_res;
		}
		if ( empty( $rhema_res['body'] ) ) {
			return [];
		}
		wp_cache_add( 'fetched_bible', $rhema_res['body'], rhema()->plugin->name() );
		return json_decode( $rhema_res['body'] );
	}
}

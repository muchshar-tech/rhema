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
use Rhema\App\General\Constants;
use WP_Error;

/**
 * Main function class for external uses
 *
 * @see rhema()
 * @package Rhema\Common
 */
final class Bible extends Base {
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
		$this->constants = Constants::init();
	}

	public function isQueryWholeChapter( $query_schema ): bool {
		if ( ! isset( $query_schema[0] ) ) {
			return false;
		}
		$range_from = $query_schema[0];
		$range_to = isset( $query_schema[1] ) ? $query_schema[1] : null;

		if ( count( $query_schema ) > 0 && ! $range_from && ! empty( $range_from['verse'] ) ) {
			return false;
		}

		if ( ! empty( $range_from ) && ! empty( $range_from['verse'] ) ) {
			return false;
		}

		if ( ! empty( $range_to ) && ! empty( $range_to['verse'] ) ) {
			return false;
		}

		return true;
	}
	/**
	 * Get bible source remote host url by using rhema()->bible()->remote()
	 *
	 * @return string
	 */
	public function remote(): string {
		return ! empty( $_ENV['BIBLE_REMOTE'] ) ? $_ENV['BIBLE_REMOTE'] : 'https://logos.api/bible';
	}

	public function getBookTransBySlug( string $slug ): array {
		$slug_in_regexes = array_filter( $this->constants->abbr_regex_index, function( $abbr_regex_index ) use ( $slug ) {
			return preg_match( $abbr_regex_index, $slug );
		} );
		$book_index = array_keys( $slug_in_regexes )[0];
		return $this->constants->books[ $book_index ];
	}
	/**
	 * Get bible url query by using rhema()->bible()->getQueryParam()
	 *
	 * @return array
	 * @since 1.0.0
	 */
	public function getQueryParam(): array {
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
	/**
	 * Get bible url query by using rhema()->bible()->getQuerySchema()
	 *
	 * @return array
	 * @since 1.0.0
	 */
	public function getQuerySchema( $book_slug_to_trans = false ): array {
		$query_var = $this->getQueryParam();
		if ( empty( $query_var ) ) {
			return [];
		}
		$query_schema = array_map( function( int $index, string $query ) use ( $query_var, $book_slug_to_trans ) {
			$current_matches = [];
			$current_matched = preg_match( $this->constants->range_query_regex, $query, $current_matches );
			$prev_matches = [];
			$prev_matched = preg_match( $this->constants->range_query_regex, $index > 0 ? $query_var[ $index - 1 ] : $query, $prev_matches );
			if ( ! $current_matched && 0 === $index ) {
				return [
					'book' => $book_slug_to_trans ? $this->getBookTransBySlug( 'gen' ) : 'gen',
					'chapter' => '1',
					'verse' => '1',
				];
			}

			if ( ! $current_matched && $prev_matched ) {
				return [
					'book' => $book_slug_to_trans ? $this->getBookTransBySlug( $prev_matches[1] ) : $prev_matches[1],
					'chapter' => $prev_matches[2],
					'verse' => $prev_matches[3],
				];
			}

			if ( ! $current_matched ) {
				return null;
			}

			return [
				'book' => $book_slug_to_trans ? $this->getBookTransBySlug( $current_matches[1] ) : $current_matches[1],
				'chapter' => $current_matches[2],
				'verse' => $current_matches[3],
			];
		}, array_keys( $query_var ), array_values( $query_var ) );
		$query_schema_count = count( $query_schema );
		$is_whole_chapter = $this->isQueryWholeChapter( $query_schema );
		$query_raws = $this->getRaw();
		$query_raws_count = count( $query_raws );
		$query_raws_last = $query_raws[ $query_raws_count - 1 ];
		if ( $is_whole_chapter && ! empty( $query_schema[0] ) ) {
			$query_schema[0]['verse'] = '1';
			$query_schema[] = [
				'book' => $query_schema[0]['book'],
				'chapter' => $query_schema[0]['chapter'],
				'verse' => (int) $query_raws_last->verse,
			];
		}
		if ( 1 < $query_schema_count ) {
			$query_schema[ $query_schema_count - 1 ]['verse'] = (int) $query_raws_last->verse;
		}
		return $query_schema;
	}
	/**
	 * Get raw data by using rhema()->bible()->getRaw()
	 *
	 * @return array
	 * @since 1.0.0
	 */
	public function getRaw(): array {
		if ( ! empty( wp_cache_get( 'fetched_bible', rhema()->plugin->name() ) ) ) {
			return json_decode( wp_cache_get( 'fetched_bible', rhema()->plugin->name() ) );
		}
		$query_var = $this->getQueryParam();
		if ( empty( $query_var ) ) {
			return [];
		}
		$param_from = "range={$query_var[0]}";
		$param_to = '';
		if ( isset( $query_var[1] ) ) {
			$param_to = "&range={$query_var[1]}";
		}
		$bible_remote = $this->remote();
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

	public function getBooks(): array {
		return [
			'old' => array_slice( $this->constants->books, 0, 39 ),
			'new' => array_slice( $this->constants->books, 39, 27 ),
		];
	}

	public function getTranslationInfo( $translate_abbr = 'kjv' ): array {
		$bible_remote = $this->remote();
		$translate_res = wp_remote_get( "$bible_remote/$translate_abbr" );
		if ( $translate_res instanceof WP_Error ) {
			return $translate_res;
		}
		if ( empty( $translate_res['body'] ) ) {
			return [];
		}
		set_transient( "rhema_bible_translate_$translate_abbr", $translate_res['body'], MONTH_IN_SECONDS );
		return json_decode( $translate_res['body'], true );
	}
}

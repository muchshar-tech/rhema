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
use WP_CLI\Iterators\Exception;
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
	}
	/**
	 * Check url query should fetch whole chapter verse.
	 *
	 * @param array $query_schema
	 * @return boolean
	 */
	public function isQueryWholeChapter( array $query_schema ): bool {
		if ( empty( $query_schema ) ) {
			return false;
		}
		if ( ! isset( $query_schema[0] ) ) {
			return false;
		}
		$range_from = $query_schema[0];
		$range_to = isset( $query_schema[1] ) ? $query_schema[1] : null;

		if ( ! empty( $range_from ) && ! empty( $range_from['verse'] ) && $range_from['verse'] > 1 && ! empty( $range_to ) ) {
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
	/**
	 * Get bible rest namespace by using rhema()->bible()->restNamespace()
	 *
	 * @return string
	 */
	public function restNamespace(): string {
		return ! empty( $_ENV['RHEMA_REST_NAMESPACE'] ) ? $_ENV['RHEMA_REST_NAMESPACE'] : 'rhema/v1';
	}
	/**
	 * Get bible rest endpoint url by using rhema()->bible()->restEndpoint()
	 *
	 * @return string
	 */
	public function restEndpoints(): array {
		$rest_url = rest_url();
		return [
			'base' => "{$rest_url}{$this->restNamespace()}",
			'bible' => "{$rest_url}{$this->restNamespace()}/bible",
			'options' => "{$rest_url}{$this->restNamespace()}/options",
		];
	}
	/**
	 * Get book index by slug.
	 *
	 * @param string $slug
	 * @return integer
	 */
	public function getBookIndexBySlug( string $slug ): int {
		$slug_in_regexes = array_filter( Constants::ABBR_REGEX_INDEX, function( $abbr_regex_index ) use ( $slug ) {
			return preg_match( $abbr_regex_index, $slug );
		} );
		return (int) array_keys( $slug_in_regexes )[0];
	}

	public function getBookTransBySlug( string $slug ): array {
		$book_index = $this->getBookIndexBySlug( $slug );
		$books = Constants::init()->books[ $book_index ];
		return $books;
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
	public function getQuerySchema( $book_slug_to_trans = false, $query = [], $options = [] ): array {
		$query_var = empty( $query ) ? $this->getQueryParam() : $query;
		if ( empty( $query_var ) ) {
			return [];
		}
		$query_schema = array_map( function( int $index, string $query ) use ( $query_var, $book_slug_to_trans ) {
			$current_matches = [];
			$current_matched = preg_match( Constants::RANGE_QUERY_REGEX, $query, $current_matches );
			$prev_matches = [];
			$prev_matched = preg_match( Constants::RANGE_QUERY_REGEX, $index > 0 ? $query_var[ $index - 1 ] : $query, $prev_matches );
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

		$is_whole_chapter = $this->isQueryWholeChapter( $query_schema );
		if ( ! $is_whole_chapter ) {
			return $query_schema;
		}
		$translation_info = $this->getTranslationInfo( 'cuv' );
		if ( is_wp_error( $translation_info ) ) {
			throw new Exception( $translation_info->get_error_message() );
		}
		$chapter_verse_info = $translation_info['chapterVerseInfo'];
		$book_index = $book_slug_to_trans ? $query_schema[0]['book']['index'] : $this->getBookIndexBySlug( $query_schema[0]['book'] ) + 1;
		if ( ! empty( $query_schema[0] ) ) {
			$query_schema[0]['verse'] = '1';
			$query_schema[] = [
				'book' => $query_schema[0]['book'],
				'chapter' => $query_schema[0]['chapter'],
				'verse' => (int) $chapter_verse_info[ $book_index ][ $query_schema[0]['chapter'] ],
			];
		}
		if ( isset( $options['with_prev_chapter'] ) && $options['with_prev_chapter'] ) {
			$prev_chapter_number = max( 0, (int) $query_schema[0]['chapter'] - 1 );
			$query_schema[0]['chapter'] = $prev_chapter_number;
		}

		if ( isset( $options['with_next_chapter'] ) && $options['with_next_chapter'] ) {
			$query_schema_count = count( $query_schema );
			$query_schema_last_index = max( 0, $query_schema_count - 1 );
			$next_chapter_number = max( 0, (int) $query_schema[ $query_schema_last_index ]['chapter'] + 1 );
			$query_schema[ $query_schema_last_index ]['chapter'] = $next_chapter_number;
			$query_schema[ $query_schema_last_index ]['verse'] = (int) $chapter_verse_info[ $book_index ][ $next_chapter_number ];
		}
		return $query_schema;
	}
	/**
	 * Get raw data by using rhema()->bible()->getInitialRaw()
	 *
	 * @return array
	 * @since 1.0.0
	 */
	public function getInitialRaw(): array {
		if ( ! empty( wp_cache_get( 'fetched_bible', $this->plugin->name() ) ) ) {
			return json_decode( wp_cache_get( 'fetched_bible', $this->plugin->name() ) );
		}
		$query_schema = $this->getQuerySchema();
		if ( empty( $query_schema ) ) {
			return [];
		}
		$raw_params = $this->generateGetRawParam( $query_schema );
		$query_string = $this->generateQueryString( $raw_params );
		$bible_remote = $this->remote();
		$rhema_res = wp_remote_get( "$bible_remote/cuv?{$query_string}" );
		if ( $rhema_res instanceof WP_Error ) {
			return $rhema_res;
		}
		if ( empty( $rhema_res['body'] ) ) {
			return [];
		}
		wp_cache_add( 'fetched_bible', $rhema_res['body'], $this->plugin->name() );
		return json_decode( $rhema_res['body'] );
	}

	public function generateQueryString( $raw_params ): string {
		$param_from = "range={$raw_params['query_from_book']}{$raw_params['query_from_chapter']}:{$raw_params['query_from_verse']}";
		$param_to = '';
		if ( isset( $raw_params['query_to_book'] ) && isset( $raw_params['query_to_chapter'] ) && isset( $raw_params['query_to_verse'] ) ) {
			$param_to = "&range={$raw_params['query_to_book']}{$raw_params['query_to_chapter']}:{$raw_params['query_to_verse']}";
		}
		return "{$param_from}{$param_to}";
	}

	public function generateGetRawParam( $query_schema ): array {
		return [
			'query_from_book' => $query_schema[0]['book'],
			'query_from_chapter' => $query_schema[0]['chapter'],
			'query_from_verse' => $query_schema[0]['verse'],
			'query_to_book' => $query_schema[1]['book'],
			'query_to_chapter' => $query_schema[1]['chapter'],
			'query_to_verse' => $query_schema[1]['verse'],
		];
	}

	public function getBooks(): array {
		$books = Constants::init()->books;
		return [
			'old' => array_slice( $books, 0, 39 ),
			'new' => array_slice( $books, 39, 27 ),
		];
	}

	public function getTranslationInfo( $translate_abbr = 'kjv' ): array | WP_Error {
		$bible_remote = $this->remote();
		$remote_query_string = "{$bible_remote}/{$translate_abbr}";
		$transient_translate_res = $this->get_transient( 'rhema.bible.translate.info', $remote_query_string );
		if ( ! empty( $transient_translate_res ) ) {
			return json_decode( $transient_translate_res, true );
		}
		$translate_res = wp_remote_get( $remote_query_string );
		if ( $translate_res instanceof WP_Error ) {
			//TODO: 如果是 WP_Error，要進行例外處理，要顯示錯誤訊息
			return $translate_res;
		}
		if ( empty( $translate_res['body'] ) ) {
			return [];
		}
		$this->set_transient( 'rhema.bible.translate.info', $remote_query_string, $translate_res['body'], MONTH_IN_SECONDS );
		return json_decode( $translate_res['body'], true );
	}

	public function get_transient( $prefix, $query_string ): mixed {
		$remote_query_string_base64 = urlencode( base64_encode( $query_string ) );
		$transient_label = "$prefix.$remote_query_string_base64";
		return get_transient( $transient_label );
	}

	public function set_transient( $prefix, $query_string, $value, $expiration = 0 ): bool {
		$remote_query_string_base64 = urlencode( base64_encode( $query_string ) );
		$transient_label = "$prefix.$remote_query_string_base64";
		return set_transient( $transient_label, $value, $expiration );
	}
}

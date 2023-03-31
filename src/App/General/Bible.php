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
use Rhema\Integrations\Logos;
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
			'activate' => "{$rest_url}{$this->restNamespace()}/activate",
			'deactivate' => "{$rest_url}{$this->restNamespace()}/deactivate",
			'account' => "{$rest_url}{$this->restNamespace()}/account",
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
		if ( empty( $translation_info ) ) {
			throw new Exception( 'No Found.' );
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
	public function getInitialRaw(): array | WP_Error {
		try {
			$query_schema = $this->getQuerySchema();
			if ( empty( $query_schema ) ) {
				return [];
			}
			$raw_params = $this->generateGetRawParam( $query_schema );
			$query_string = $this->generateQueryString( $raw_params );
			/** @var Logos\Api */
			$integration_logos_api = Logos\Api::init();
			$rhema_res = $integration_logos_api->getRaws( $query_string );
		} catch ( Exception $e ) {
			return new WP_Error( 401, Constants::init()->error_message['should_activate'] );
		}

		if ( $rhema_res instanceof WP_Error ) {
			return $rhema_res;
		}
		if ( empty( $rhema_res ) ) {
			return [];
		}
		return $rhema_res;
	}
	/**
	 * Generate query string function
	 *
	 * @param array $raw_params
	 * @return string
	 */
	public function generateQueryString( array $raw_params ): string {
		$param_from = "range={$raw_params['query_from_book']}{$raw_params['query_from_chapter']}:{$raw_params['query_from_verse']}";
		$param_to = '';
		if ( isset( $raw_params['query_to_book'] ) && isset( $raw_params['query_to_chapter'] ) && isset( $raw_params['query_to_verse'] ) ) {
			$param_to = "&range={$raw_params['query_to_book']}{$raw_params['query_to_chapter']}:{$raw_params['query_to_verse']}";
		}
		return "{$param_from}{$param_to}";
	}
	/**
	 * Generate raw param function.
	 *
	 * @param array $query_schema
	 * @return array
	 */
	public function generateGetRawParam( array $query_schema ): array {
		return [
			'query_from_book' => $query_schema[0]['book'],
			'query_from_chapter' => $query_schema[0]['chapter'],
			'query_from_verse' => $query_schema[0]['verse'],
			'query_to_book' => $query_schema[1]['book'],
			'query_to_chapter' => $query_schema[1]['chapter'],
			'query_to_verse' => $query_schema[1]['verse'],
		];
	}
	/**
	 * Get books data group by old/new
	 *
	 * @return array
	 */
	public function getBooks(): array {
		$books = Constants::init()->books;
		return [
			'old' => array_slice( $books, 0, 39 ),
			'new' => array_slice( $books, 39, 27 ),
		];
	}
	/**
	 * Get translations info data
	 *
	 * @param string $translate_abbr
	 * @return array|WP_Error
	 */
	public function getTranslationInfo( $translate_abbr = 'kjv' ): array | WP_Error {
		$bible_remote = $this->remote();
		$remote_query_string = "{$bible_remote}/{$translate_abbr}";
		$transient_translate_res = $this->get_transient( 'rhema.bible.translate.info', $remote_query_string );
		if ( ! empty( $transient_translate_res ) ) {
			return $transient_translate_res;
		}
		$translate_res = Logos\Api::init()->getTranslationInfo( $translate_abbr );
		if ( is_wp_error( $translate_res ) ) {
			return $translate_res;
		}
		$this->set_transient( 'rhema.bible.translate.info', $remote_query_string, $translate_res, MONTH_IN_SECONDS );
		return $translate_res;
	}
	/**
	 * Get license data function
	 *
	 * @return array
	 */
	public function getLicenseData(): array {
		/** @var Logos\Api */
		$integration_logos_api = Logos\Api::init();
		return $integration_logos_api->getSavedData();
	}
	/**
	 * Get transient data
	 *
	 * @param string $prefix
	 * @param string $query_string
	 * @return mixed
	 */
	public function get_transient( string $prefix, string $query_string ): mixed {
		$remote_query_string_base64 = urlencode( base64_encode( $query_string ) );
		$transient_label = "$prefix.$remote_query_string_base64";
		return get_transient( $transient_label );
	}
	/**
	 * Set transient data
	 *
	 * @param string $prefix
	 * @param string $query_string
	 * @param mixed $value
	 * @param integer $expiration
	 * @return boolean
	 */
	public function set_transient( string $prefix, string $query_string, mixed $value, $expiration = 0 ): bool {
		$remote_query_string_base64 = urlencode( base64_encode( $query_string ) );
		$transient_label = "$prefix.$remote_query_string_base64";
		return set_transient( $transient_label, $value, $expiration );
	}
}

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

namespace Rhema\Common;

use Rhema\App\Frontend\Templates;
use Rhema\Common\Abstracts\Base;

/**
 * Main function class for external uses
 *
 * @see rhema()
 * @package Rhema\Common
 */
class Bible extends Base {
	/**
	 * Get raw data by using rhema()->getRaw()
	 *
	 * @return array
	 * @since 1.0.0
	 */
	public function getRaw(): array {
		if ( ! empty( wp_cache_get( 'fetched_bible', rhema()->plugin->name() ) ) ) {
			return json_decode( wp_cache_get( 'fetched_bible', rhema()->plugin->name() ) );
		}
		$query_var = rhema()->getQueryVar();
		$rhema_res = wp_remote_get( "http://localhost:7000/bible/cuv?range={$query_var[0]}&range={$query_var[1]}" );
		if ( empty( $rhema_res['body'] ) ) {
			return [];
		}
		wp_cache_add( 'fetched_bible', $rhema_res['body'], rhema()->plugin->name() );
		return json_decode( $rhema_res['body'] );
	}
    public function getBooks(): array{
        return [
            'old' => [
                ['abbr'=>__( 'Gen.', 'rhema' ), 'name'=>__( 'Genesis', 'rhema' ) ],
                ['abbr'=>__( 'Ex.', 'rhema' ), 'name'=>__( 'Exodus', 'rhema' ) ],
                ['abbr'=>__( 'Lev.', 'rhema' ), 'name'=>__( 'Leviticus', 'rhema' ) ],
                ['abbr'=>__( 'Num.', 'rhema' ), 'name'=>__( 'Numbers', 'rhema' ) ],
                ['abbr'=>__( 'Deut.', 'rhema' ), 'name'=>__( 'Deuteronomy', 'rhema' ) ],
                ['abbr'=>__( 'Josh.', 'rhema' ), 'name'=>__( 'Joshua', 'rhema' ) ],
                ['abbr'=>__( 'Judg.', 'rhema' ), 'name'=>__( 'Judges', 'rhema' ) ],
                ['abbr'=>__( 'Ruth', 'rhema' ), 'name'=>__( 'Ruth', 'rhema' ) ],
                ['abbr'=>__( '1 Sam.', 'rhema' ), 'name'=>__( '1 Samuel', 'rhema' ) ],
                ['abbr'=>__( '2 Sam.', 'rhema' ), 'name'=>__( '2 Samuel', 'rhema' ) ],
                ['abbr'=>__( '1 Kings', 'rhema' ), 'name'=>__( '1 Kings', 'rhema' ) ],
                ['abbr'=>__( '2 Kings', 'rhema' ), 'name'=>__( '2 Kings', 'rhema' ) ],
                ['abbr'=>__( '1 Chron.', 'rhema' ), 'name'=>__( '1 Chronicles', 'rhema' ) ],
                ['abbr'=>__( '2 Chron.', 'rhema' ), 'name'=>__( '2 Chronicles', 'rhema' ) ],
                ['abbr'=>__( 'Ezra', 'rhema' ), 'name'=>__( 'Ezra', 'rhema' ) ],
                ['abbr'=>__( 'Neh.', 'rhema' ), 'name'=>__( 'Nehemiah', 'rhema' ) ],
                ['abbr'=>__( 'Est.', 'rhema' ), 'name'=>__( 'Esther', 'rhema' ) ],
                ['abbr'=>__( 'Job', 'rhema' ), 'name'=>__( 'Job', 'rhema' ) ],
                ['abbr'=>__( 'Ps.', 'rhema' ), 'name'=>__( 'Psalms', 'rhema' ) ],
                ['abbr'=>__( 'Prov.', 'rhema' ), 'name'=>__( 'Proverbs', 'rhema' ) ],
                ['abbr'=>__( 'Eccles.', 'rhema' ), 'name'=>__( 'Ecclesiastes', 'rhema' ) ],
                ['abbr'=>__( 'Song', 'rhema' ), 'name'=>__( 'Song of Solomon', 'rhema' ) ],
                ['abbr'=>__( 'Isa.', 'rhema' ), 'name'=>__( 'Isaiah', 'rhema' ) ],
                ['abbr'=>__( 'Jer.', 'rhema' ), 'name'=>__( 'Jeremiah', 'rhema' ) ],
                ['abbr'=>__( 'Lam.', 'rhema' ), 'name'=>__( 'Lamentations', 'rhema' ) ],
                ['abbr'=>__( 'Ezek.', 'rhema' ), 'name'=>__( 'Ezekiel', 'rhema' ) ],
                ['abbr'=>__( 'Dan.', 'rhema' ), 'name'=>__( 'Daniel', 'rhema' ) ],
                ['abbr'=>__( 'Hos.', 'rhema' ), 'name'=>__( 'Hosea', 'rhema' ) ],
                ['abbr'=>__( 'Joel', 'rhema' ), 'name'=>__( 'Joel', 'rhema' ) ],
                ['abbr'=>__( 'Amos', 'rhema' ), 'name'=>__( 'Amos', 'rhema' ) ],
                ['abbr'=>__( 'Obad.', 'rhema' ), 'name'=>__( 'Obadiah', 'rhema' ) ],
                ['abbr'=>__( 'Jonah', 'rhema' ), 'name'=>__( 'Jonah', 'rhema' ) ],
                ['abbr'=>__( 'Mic.', 'rhema' ), 'name'=>__( 'Micah', 'rhema' ) ],
                ['abbr'=>__( 'Nah.', 'rhema' ), 'name'=>__( 'Nahum', 'rhema' ) ],
                ['abbr'=>__( 'Hab.', 'rhema' ), 'name'=>__( 'Habakkuk', 'rhema' ) ],
                ['abbr'=>__( 'Zeph.', 'rhema' ), 'name'=>__( 'Zephaniah', 'rhema' ) ],
                ['abbr'=>__( 'Hag.', 'rhema' ), 'name'=>__( 'Haggai', 'rhema' ) ],
                ['abbr'=>__( 'Zech.', 'rhema' ), 'name'=>__( 'Zechariah', 'rhema' ) ],
                ['abbr'=>__( 'Mal.', 'rhema' ), 'name'=>__( 'Malachi', 'rhema' ) ],
            ],
            'new' => [
                ['abbr'=>__( 'Matt.', 'rhema' ), 'name'=>__( 'Matthew', 'rhema' ) ],
                ['abbr'=>__( 'Mark', 'rhema' ), 'name'=>__( 'Mark', 'rhema' ) ],
                ['abbr'=>__( 'Luke', 'rhema' ), 'name'=>__( 'Luke', 'rhema' ) ],
                ['abbr'=>__( 'John', 'rhema' ), 'name'=>__( 'John', 'rhema' ) ],
                ['abbr'=>__( 'Acts', 'rhema' ), 'name'=>__( 'Acts', 'rhema' ) ],
                ['abbr'=>__( 'Rom.', 'rhema' ), 'name'=>__( 'Romans', 'rhema' ) ],
                ['abbr'=>__( '1 Cor.', 'rhema' ), 'name'=>__( '1 Corinthians', 'rhema' ) ],
                ['abbr'=>__( '2 Cor.', 'rhema' ), 'name'=>__( '2 Corinthians', 'rhema' ) ],
                ['abbr'=>__( 'Gal.', 'rhema' ), 'name'=>__( 'Galatians', 'rhema' ) ],
                ['abbr'=>__( 'Eph.', 'rhema' ), 'name'=>__( 'Ephesians', 'rhema' ) ],
                ['abbr'=>__( 'Phil.', 'rhema' ), 'name'=>__( 'Philippians', 'rhema' ) ],
                ['abbr'=>__( 'Col.', 'rhema' ), 'name'=>__( 'Colossians', 'rhema' ) ],
                ['abbr'=>__( '1 Thess.', 'rhema' ), 'name'=>__( '1 Thessalonians', 'rhema' ) ],
                ['abbr'=>__( '2 Thess.', 'rhema' ), 'name'=>__( '2 Thessalonians', 'rhema' ) ],
                ['abbr'=>__( '1 Tim.', 'rhema' ), 'name'=>__( '1 Timothy', 'rhema' ) ],
                ['abbr'=>__( '2 Tim.', 'rhema' ), 'name'=>__( '2 Timothy', 'rhema' ) ],
                ['abbr'=>__( 'Titus', 'rhema' ), 'name'=>__( 'Titus', 'rhema' ) ],
                ['abbr'=>__( 'Philem.', 'rhema' ), 'name'=>__( 'Philemon', 'rhema' ) ],
                ['abbr'=>__( 'Heb.', 'rhema' ), 'name'=>__( 'Hebrews', 'rhema' ) ],
                ['abbr'=>__( 'James', 'rhema' ), 'name'=>__( 'James', 'rhema' ) ],
                ['abbr'=>__( '1 Pet.', 'rhema' ), 'name'=>__( '1 Peter', 'rhema' ) ],
                ['abbr'=>__( '2 Pet.', 'rhema' ), 'name'=>__( '2 Peter', 'rhema' ) ],
                ['abbr'=>__( '1 John', 'rhema' ), 'name'=>__( '1 John', 'rhema' ) ],
                ['abbr'=>__( '2 John', 'rhema' ), 'name'=>__( '2 John', 'rhema' ) ],
                ['abbr'=>__( '3 John', 'rhema' ), 'name'=>__( '3 John', 'rhema' ) ],
                ['abbr'=>__( 'Jude', 'rhema' ), 'name'=>__( 'Jude', 'rhema' ) ],
                ['abbr'=>__( 'Rev.', 'rhema' ), 'name'=>__( 'Revelation', 'rhema' ) ],
            ]
        ];
    }
}

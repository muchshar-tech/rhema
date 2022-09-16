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

/**
 * Main function class for external uses
 *
 * @see rhema()
 * @package Rhema\Common
 */
final class Constants extends Base {
	/**
	 * Singleton trait
	 */
	use Singleton;
	public $range_query_regex = '/([a-z]*)(\d{0,3})\:?(\d{0,3})/';
	/**
	 * Abbr regex inde+1x
	 *
	 * @var array
	 */
	public $abbr_regex_index = [];
	/**
	 * Books
	 *
	 * @var array
	 */
	public $books = [];
	/**
	 * Constants constructor.
	 *
	 * @since 1.0.0
	 */
	public function __construct() {
		parent::__construct();
		$this->abbr_regex_index = [
			'/gen|ge|gn/',
			'/exo|ex|exod/',
			'/lev|le|lv/',
			'/num|nu|nm|nb/',
			'/deut|dt/',
			'/josh|jos|jsh/',
			'/judg|jdg|jg|jdgs/',
			'/rth|ru/',
			'/1sam|1sa|1samuel|1s|isa|1sm|1sa|isam|1sam|isamuel|1stsamuel|firstsamuel/',
			'/2sam|2sa|2s|iisa|2sm|2sa|iisam|2sam|iisamuel|2samuel|2ndsamuel|secondsamuel/',
			'/1kgs|1ki|1k|ikgs|1kgs|iki|1ki|ikings|1kings|1stkgs|1stkings|firstkings|firstkgs|1kin/',
			'/2kgs|2ki|2k|iikgs|2kgs|iiki|2ki|iikings|2kings|2ndkgs|2ndkings|secondkings|secondkgs|2kin/',
			'/1chron|1ch|ich|1ch|1chr|ichr|1chr|ichron|1chron|ichronicles|1chronicles|1stchronicles|firstchronicles/',
			'/2chron|2ch|iich|2ch|iichr|2chr|iichron|2chron|iichronicles|2chronicles|2ndchronicles|secondchronicles/',
			'/ezra|ezr/',
			'/neh|ne/',
			'/esth|es/',
			'/job|job|jb/',
			'/pslm|ps|psalms|psa|psm|pss/',
			'/prov|pr|prv/',
			'/eccles|ec|qoh|qoheleth/',
			'/song|so|canticleofcanticles|canticles|songofsongs|sos/',
			'/isa|is/',
			'/jer|je|jr/',
			'/lam|la/',
			'/ezek|eze|ezk/',
			'/dan|da|dn/',
			'/hos|ho/',
			'/joel|joe|jl/',
			'/amos|am/',
			'/obad|ob/',
			'/jnh|jon/',
			'/micah|mic/',
			'/nah|na/',
			'/hab/',
			'/zeph|zep|zp/',
			'/haggai|hag|hg/',
			'/zech|zec|zc/',
			'/mal|mal|ml/',
			'/matt|mt/',
			'/mrk|mk|mr/',
			'/luk|lk/',
			'/john|jn|jhn/',
			'/acts|ac/',
			'/rom|ro|rm/',
			'/1cor|1co|ico|1co|icor|1cor|icorinthians|1corinthians|1stcorinthians|firstcorinthians/',
			'/2cor|2co|iico|2co|iicor|2cor|iicorinthians|2corinthians|2ndcorinthians|secondcorinthians/',
			'/gal|ga/',
			'/ephes|eph/',
			'/phil|php/',
			'/col|col/',
			'/1thess|1th|ith|1th|ithes|1thes|ithess|1thess|ithessalonians|1thessalonians|1stthessalonians|firstthessalonians/',
			'/2thess|2th|iith|2th|iithes|2thes|iithess|2thess|iithessalonians|2thessalonians|2ndthessalonians|secondthessalonians/',
			'/1tim|1ti|iti|1ti|itim|1tim|itimothy|1timothy|1sttimothy|firsttimothy/',
			'/2tim|2ti|iiti|2ti|iitim|2tim|iitimothy|2timothy|2ndtimothy|secondtimothy/',
			'/titus|tit/',
			'/philem|phm/',
			'/hebrews|heb/',
			'/james|jas|jm/',
			'/1pet|1pe|ipe|1pe|ipet|1pet|ipt|1pt|1pt|ipeter|1peter|1stpeter|firstpeter/',
			'/2pet|2pe|iipe|2pe|iipet|2pet|iipt|2pt|2pt|iipeter|2peter|2ndpeter|secondpeter/',
			'/1john|1jn|ijn|1jn|ijo|1jo|ijoh|1joh|ijhn|1jhn|1jhn|ijohn|1john|1stjohn|firstjohn/',
			'/2john|2jn|iijn|2jn|iijo|2jo|iijoh|2joh|iijhn|2jhn|2jhn|iijohn|2john|2ndjohn|secondjohn/',
			'/3john|3jn|iiijn|3jn|iiijo|3jo|iiijoh|3joh|iiijhn|3jhn|3jhn|iiijohn|3john|3rdjohn|thirdjohn/',
			'/jude|jud/',
			'/rev|re|therevelatio/',
		];
		$this->books = [
			// Old
			[
				'abbr' => __( 'Gen.', 'rhema' ),
				'name' => __( 'Genesis', 'rhema' ),
				'chapters' => 50,
				'index' => 0 + 1,
			],
			[
				'abbr' => __( 'Ex.', 'rhema' ),
				'name' => __( 'Exodus', 'rhema' ),
				'chapters' => 40,
				'index' => 1 + 1,
			],
			[
				'abbr' => __( 'Lev.', 'rhema' ),
				'name' => __( 'Leviticus', 'rhema' ),
				'chapters' => 27,
				'index' => 2 + 1,
			],
			[
				'abbr' => __( 'Num.', 'rhema' ),
				'name' => __( 'Numbers', 'rhema' ),
				'chapters' => 36,
				'index' => 3 + 1,
			],
			[
				'abbr' => __( 'Deut.', 'rhema' ),
				'name' => __( 'Deuteronomy', 'rhema' ),
				'chapters' => 34,
				'index' => 4 + 1,
			],
			[
				'abbr' => __( 'Josh.', 'rhema' ),
				'name' => __( 'Joshua', 'rhema' ),
				'chapters' => 24,
				'index' => 5 + 1,
			],
			[
				'abbr' => __( 'Judg.', 'rhema' ),
				'name' => __( 'Judges', 'rhema' ),
				'chapters' => 21,
				'index' => 6 + 1,
			],
			[
				'abbr' => __( 'Ruth', 'rhema' ),
				'name' => __( 'Ruth', 'rhema' ),
				'chapters' => 4,
				'index' => 7 + 1,
			],
			[
				'abbr' => __( '1 Sam.', 'rhema' ),
				'name' => __( '1 Samuel', 'rhema' ),
				'chapters' => 31,
				'index' => 8 + 1,
			],
			[
				'abbr' => __( '2 Sam.', 'rhema' ),
				'name' => __( '2 Samuel', 'rhema' ),
				'chapters' => 24,
				'index' => 9 + 1,
			],
			[
				'abbr' => __( '1 Kings', 'rhema' ),
				'name' => __( '1 Kings', 'rhema' ),
				'chapters' => 22,
				'index' => 10 + 1,
			],
			[
				'abbr' => __( '2 Kings', 'rhema' ),
				'name' => __( '2 Kings', 'rhema' ),
				'chapters' => 25,
				'index' => 11 + 1,
			],
			[
				'abbr' => __( '1 Chron.', 'rhema' ),
				'name' => __( '1 Chronicles', 'rhema' ),
				'chapters' => 29,
				'index' => 12 + 1,
			],
			[
				'abbr' => __( '2 Chron.', 'rhema' ),
				'name' => __( '2 Chronicles', 'rhema' ),
				'chapters' => 36,
				'index' => 13 + 1,
			],
			[
				'abbr' => __( 'Ezra', 'rhema' ),
				'name' => __( 'Ezra', 'rhema' ),
				'chapters' => 10,
				'index' => 14 + 1,
			],
			[
				'abbr' => __( 'Neh.', 'rhema' ),
				'name' => __( 'Nehemiah', 'rhema' ),
				'chapters' => 13,
				'index' => 15 + 1,
			],
			[
				'abbr' => __( 'Est.', 'rhema' ),
				'name' => __( 'Esther', 'rhema' ),
				'chapters' => 10,
				'index' => 16 + 1,
			],
			[
				'abbr' => __( 'Job', 'rhema' ),
				'name' => __( 'Job', 'rhema' ),
				'chapters' => 42,
				'index' => 17 + 1,
			],
			[
				'abbr' => __( 'Ps.', 'rhema' ),
				'name' => __( 'Psalms', 'rhema' ),
				'chapters' => 150,
				'index' => 18 + 1,
			],
			[
				'abbr' => __( 'Prov.', 'rhema' ),
				'name' => __( 'Proverbs', 'rhema' ),
				'chapters' => 31,
				'index' => 19 + 1,
			],
			[
				'abbr' => __( 'Eccles.', 'rhema' ),
				'name' => __( 'Ecclesiastes', 'rhema' ),
				'chapters' => 12,
				'index' => 20 + 1,
			],
			[
				'abbr' => __( 'Song', 'rhema' ),
				'name' => __( 'Song of Solomon', 'rhema' ),
				'chapters' => 8,
				'index' => 21 + 1,
			],
			[
				'abbr' => __( 'Isa.', 'rhema' ),
				'name' => __( 'Isaiah', 'rhema' ),
				'chapters' => 66,
				'index' => 22 + 1,
			],
			[
				'abbr' => __( 'Jer.', 'rhema' ),
				'name' => __( 'Jeremiah', 'rhema' ),
				'chapters' => 52,
				'index' => 23 + 1,
			],
			[
				'abbr' => __( 'Lam.', 'rhema' ),
				'name' => __( 'Lamentations', 'rhema' ),
				'chapters' => 5,
				'index' => 24 + 1,
			],
			[
				'abbr' => __( 'Ezek.', 'rhema' ),
				'name' => __( 'Ezekiel', 'rhema' ),
				'chapters' => 48,
				'index' => 25 + 1,
			],
			[
				'abbr' => __( 'Dan.', 'rhema' ),
				'name' => __( 'Daniel', 'rhema' ),
				'chapters' => 12,
				'index' => 26 + 1,
			],
			[
				'abbr' => __( 'Hos.', 'rhema' ),
				'name' => __( 'Hosea', 'rhema' ),
				'chapters' => 14,
				'index' => 27 + 1,
			],
			[
				'abbr' => __( 'Joel', 'rhema' ),
				'name' => __( 'Joel', 'rhema' ),
				'chapters' => 3,
				'index' => 28 + 1,
			],
			[
				'abbr' => __( 'Amos', 'rhema' ),
				'name' => __( 'Amos', 'rhema' ),
				'chapters' => 9,
				'index' => 29 + 1,
			],
			[
				'abbr' => __( 'Obad.', 'rhema' ),
				'name' => __( 'Obadiah', 'rhema' ),
				'chapters' => 1,
				'index' => 30 + 1,
			],
			[
				'abbr' => __( 'Jonah', 'rhema' ),
				'name' => __( 'Jonah', 'rhema' ),
				'chapters' => 4,
				'index' => 31 + 1,
			],
			[
				'abbr' => __( 'Mic.', 'rhema' ),
				'name' => __( 'Micah', 'rhema' ),
				'chapters' => 7,
				'index' => 32 + 1,
			],
			[
				'abbr' => __( 'Nah.', 'rhema' ),
				'name' => __( 'Nahum', 'rhema' ),
				'chapters' => 3,
				'index' => 33 + 1,
			],
			[
				'abbr' => __( 'Hab.', 'rhema' ),
				'name' => __( 'Habakkuk', 'rhema' ),
				'chapters' => 3,
				'index' => 34 + 1,
			],
			[
				'abbr' => __( 'Zeph.', 'rhema' ),
				'name' => __( 'Zephaniah', 'rhema' ),
				'chapters' => 3,
				'index' => 35 + 1,
			],
			[
				'abbr' => __( 'Hag.', 'rhema' ),
				'name' => __( 'Haggai', 'rhema' ),
				'chapters' => 2,
				'index' => 36 + 1,
			],
			[
				'abbr' => __( 'Zech.', 'rhema' ),
				'name' => __( 'Zechariah', 'rhema' ),
				'chapters' => 14,
				'index' => 37 + 1,
			],
			[
				'abbr' => __( 'Mal.', 'rhema' ),
				'name' => __( 'Malachi', 'rhema' ),
				'chapters' => 4,
				'index' => 38 + 1,
			],
			// New
			[
				'abbr' => __( 'Matt.', 'rhema' ),
				'name' => __( 'Matthew', 'rhema' ),
				'chapters' => 28,
				'index' => 39 + 1,
			],
			[
				'abbr' => __( 'Mark', 'rhema' ),
				'name' => __( 'Mark', 'rhema' ),
				'chapters' => 16,
				'index' => 40 + 1,
			],
			[
				'abbr' => __( 'Luke', 'rhema' ),
				'name' => __( 'Luke', 'rhema' ),
				'chapters' => 24,
				'index' => 41 + 1,
			],
			[
				'abbr' => __( 'John', 'rhema' ),
				'name' => __( 'John', 'rhema' ),
				'chapters' => 21,
				'index' => 42 + 1,
			],
			[
				'abbr' => __( 'Acts', 'rhema' ),
				'name' => __( 'Acts', 'rhema' ),
				'chapters' => 28,
				'index' => 43 + 1,
			],
			[
				'abbr' => __( 'Rom.', 'rhema' ),
				'name' => __( 'Romans', 'rhema' ),
				'chapters' => 16,
				'index' => 44 + 1,
			],
			[
				'abbr' => __( '1 Cor.', 'rhema' ),
				'name' => __( '1 Corinthians', 'rhema' ),
				'chapters' => 16,
				'index' => 45 + 1,
			],
			[
				'abbr' => __( '2 Cor.', 'rhema' ),
				'name' => __( '2 Corinthians', 'rhema' ),
				'chapters' => 13,
				'index' => 46 + 1,
			],
			[
				'abbr' => __( 'Gal.', 'rhema' ),
				'name' => __( 'Galatians', 'rhema' ),
				'chapters' => 6,
				'index' => 47 + 1,
			],
			[
				'abbr' => __( 'Eph.', 'rhema' ),
				'name' => __( 'Ephesians', 'rhema' ),
				'chapters' => 6,
				'index' => 48 + 1,
			],
			[
				'abbr' => __( 'Phil.', 'rhema' ),
				'name' => __( 'Philippians', 'rhema' ),
				'chapters' => 4,
				'index' => 49 + 1,
			],
			[
				'abbr' => __( 'Col.', 'rhema' ),
				'name' => __( 'Colossians', 'rhema' ),
				'chapters' => 4,
				'index' => 50 + 1,
			],
			[
				'abbr' => __( '1 Thess.', 'rhema' ),
				'name' => __( '1 Thessalonians', 'rhema' ),
				'chapters' => 5,
				'index' => 51 + 1,
			],
			[
				'abbr' => __( '2 Thess.', 'rhema' ),
				'name' => __( '2 Thessalonians', 'rhema' ),
				'chapters' => 3,
				'index' => 52 + 1,
			],
			[
				'abbr' => __( '1 Tim.', 'rhema' ),
				'name' => __( '1 Timothy', 'rhema' ),
				'chapters' => 6,
				'index' => 53 + 1,
			],
			[
				'abbr' => __( '2 Tim.', 'rhema' ),
				'name' => __( '2 Timothy', 'rhema' ),
				'chapters' => 4,
				'index' => 54 + 1,
			],
			[
				'abbr' => __( 'Titus', 'rhema' ),
				'name' => __( 'Titus', 'rhema' ),
				'chapters' => 3,
				'index' => 55 + 1,
			],
			[
				'abbr' => __( 'Philem.', 'rhema' ),
				'name' => __( 'Philemon', 'rhema' ),
				'chapters' => 1,
				'index' => 56 + 1,
			],
			[
				'abbr' => __( 'Heb.', 'rhema' ),
				'name' => __( 'Hebrews', 'rhema' ),
				'chapters' => 13,
				'index' => 57 + 1,
			],
			[
				'abbr' => __( 'James', 'rhema' ),
				'name' => __( 'James', 'rhema' ),
				'chapters' => 5,
				'index' => 58 + 1,
			],
			[
				'abbr' => __( '1 Pet.', 'rhema' ),
				'name' => __( '1 Peter', 'rhema' ),
				'chapters' => 5,
				'index' => 59 + 1,
			],
			[
				'abbr' => __( '2 Pet.', 'rhema' ),
				'name' => __( '2 Peter', 'rhema' ),
				'chapters' => 3,
				'index' => 60 + 1,
			],
			[
				'abbr' => __( '1 John', 'rhema' ),
				'name' => __( '1 John', 'rhema' ),
				'chapters' => 5,
				'index' => 61 + 1,
			],
			[
				'abbr' => __( '2 John', 'rhema' ),
				'name' => __( '2 John', 'rhema' ),
				'chapters' => 1,
				'index' => 62 + 1,
			],
			[
				'abbr' => __( '3 John', 'rhema' ),
				'name' => __( '3 John', 'rhema' ),
				'chapters' => 1,
				'index' => 63 + 1,
			],
			[
				'abbr' => __( 'Jude', 'rhema' ),
				'name' => __( 'Jude', 'rhema' ),
				'chapters' => 1,
				'index' => 64 + 1,
			],
			[
				'abbr' => __( 'Rev.', 'rhema' ),
				'name' => __( 'Revelation', 'rhema' ),
				'chapters' => 22,
				'index' => 65 + 1,
			],
		];
	}
}

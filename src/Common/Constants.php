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

namespace Rhema\Common;

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
	/**
	 * Rewrite rules
	 */
	public const REWRITE_RULES = [
		'($bible_entry_path)\/?$' => 'index.php?is_bible=1',
		'($bible_entry_path)\/([0-9]?[a-z]*)\/?$' => 'index.php?is_bible=1&bible_from=$matches[2]/1:1',
		'($bible_entry_path)\/(([^\/]+)\/([0-9]{0,3}):?([0-9]{0,3})?)\/?(?=(to|-)\/?(([^\/]+)\/([0-9]{0,3}):?([0-9]{0,3})?)\/?)?' => 'index.php?is_bible=1&bible_from=$matches[2]&bible_to=$matches[7]',
	];
	/**
	 * Bible question type data
	 */
	public const BIBLE_QUESTION_TYPE = [
		'id'       => 'bible-questions',
		'archive'  => 'bible-questions',
		'title'    => 'Bible Questions',
		'singular' => 'Bible Question',
		'icon'     => 'dashicons-book-alt',
	];
	public const RANGE_QUERY_REGEX = '/([0-9]?[a-z]*)(\d{0,3})\:?(\d{0,3})/';
	/**
	 * Abbr regex index
	 *
	 * @var array
	 */
	public const ABBR_REGEX_INDEX = [
		'/^gen|^ge|^gn/',
		'/^exo|^ex|^exod/',
		'/^lev|^le|^lv/',
		'/^num|^nu|^nm|^nb/',
		'/^deut|^dt/',
		'/^josh|^jos|^jsh/',
		'/judg|jdg|jg|jdgs/',
		'/rth|^ru/',
		'/^1sam|^1sa|^1samuel|^1s|^isa|^1sm|^1sa|^isam|^1sam|^isamuel|^1stsamuel|^firstsamuel/',
		'/^2sam|^2sa|^2s|^iisa|^2sm|^2sa|^iisam|^2sam|^iisamuel|^2samuel|^2ndsamuel|^secondsamuel/',
		'/^1kgs|^1ki|^1k|^ikgs|^1kgs|^iki|^1ki|^ikings|^1kings|^1stkgs|^1stkings|^firstkings|^firstkgs|^1kin/',
		'/^2kgs|^2ki|^2k|^iikgs|^2kgs|^iiki|^2ki|^iikings|^2kings|^2ndkgs|^2ndkings|^secondkings|^secondkgs|^2kin/',
		'/^1chron|^1ch|^ich|^1ch|^1chr|^ichr|^1chr|^ichron|^1chron|^ichronicles|^1chronicles|^1stchronicles|^firstchronicles/',
		'/^2chron|^2ch|^iich|^2ch|^iichr|^2chr|^iichron|^2chron|^iichronicles|^2chronicles|^2ndchronicles|^secondchronicles/',
		'/^ezra|^ezr/',
		'/^neh|^ne/',
		'/^esth|^es/',
		'/^job|^job|^jb/',
		'/^pslm|^ps|^psalms|^psa|^psm|^pss/',
		'/^prov|^pr|^prv/',
		'/^eccles|^ec|^qoh|^qoheleth/',
		'/^song|^so|^canticleofcanticles|^canticles|^songofsongs|^sos/',
		'/^isa|^is/',
		'/^jer|^je|^jr/',
		'/^lam|^la/',
		'/^ezek|^eze|^ezk/',
		'/^dan|^da|^dn/',
		'/^hos|^ho/',
		'/^joel|^joe|^jl/',
		'/^amos|^am/',
		'/^obad|^ob/',
		'/^jnh|^jon/',
		'/^micah|^mic/',
		'/^nah|^na/',
		'/^hab/',
		'/^zeph|^zep|^zp/',
		'/^haggai|^hag|^hg/',
		'/^zech|^zec|^zc/',
		'/^mal|^mal|^ml/',
		'/^matt|^mt/',
		'/^mrk|^mk|^mr/',
		'/^luk|^lk/',
		'/^john|^jn|^jhn/',
		'/^acts|^ac/',
		'/^rom|^ro|^rm/',
		'/^1cor|^1co|^ico|^1co|^icor|^1cor|^icorinthians|^1corinthians|^1stcorinthians|^firstcorinthians/',
		'/^2cor|^2co|^iico|^2co|^iicor|^2cor|^iicorinthians|^2corinthians|^2ndcorinthians|^secondcorinthians/',
		'/^gal|^ga/',
		'/^ephes|^eph/',
		'/^phil|^php/',
		'/^col|^col/',
		'/^1thess|^1th|^ith|^1th|^ithes|^1thes|^ithess|^ithessalonians|^1thessalonians|^1stthessalonians|^firstthessalonians/',
		'/^2thess|^2th|^iith|^2th|^iithes|^2thes|^iithess|^2thess|^iithessalonians|^2thessalonians|^2ndthessalonians|^secondthessalonians/',
		'/^1tim|^1ti|^iti|^1ti|^itim|^1tim|^itimothy|^1timothy|^1sttimothy|^firsttimothy/',
		'/^2tim|^2ti|^iiti|^2ti|^iitim|^2tim|^iitimothy|^2timothy|^2ndtimothy|^secondtimothy/',
		'/^titus|^tit/',
		'/^philem|^phm/',
		'/^hebrews|^heb/',
		'/^james|^jas|^jm/',
		'/^1pet|^1pe|^ipe|^1pe|^ipet|^1pet|^ipt|^1pt|^1pt|^ipeter|^1peter|^1stpeter|^firstpeter/',
		'/^2pet|^2pe|^iipe|^2pe|^iipet|^2pet|^iipt|^2pt|^2pt|^iipeter|^2peter|^2ndpeter|^secondpeter/',
		'/^1john|^1jn|^ijn|^1jn|^ijo|^1jo|^ijoh|^1joh|^ijhn|^1jhn|^1jhn|^ijohn|^1john|^1stjohn|^firstjohn/',
		'/^2john|^2jn|^iijn|^2jn|^iijo|^2jo|^iijoh|^2joh|^iijhn|^2jhn|^2jhn|^iijohn|^2john|^2ndjohn|^secondjohn/',
		'/^3john|^3jn|^iiijn|^3jn|^iiijo|^3jo|^iiijoh|^3joh|^iiijhn|^3jhn|^3jhn|^iiijohn|^3john|^3rdjohn|^thirdjohn/',
		'/^jude|^jud/',
		'/^rev|^re|^therevelatio/',
	];
	/**
	 * Books
	 *
	 */
	public $books = [];
	/**
	 * Books
	 *
	 */
	public $error_message = [];
	/**
	 * Constants constructor.
	 *
	 * @since 1.0.0
	 */
	public function __construct() {
		parent::__construct();
		$this->books = [
			// Old
			[
				'abbr' => __( 'abbr/gen', 'rhema' ),
				'slug' => 'gen',
				'name' => __( 'Genesis', 'rhema' ),
				'chapters' => 50,
				'index' => 1,
			],
			[
				'abbr' => __( 'abbr/ex', 'rhema' ),
				'slug' => 'exo',
				'name' => __( 'Exodus', 'rhema' ),
				'chapters' => 40,
				'index' => 2,
			],
			[
				'abbr' => __( 'abbr/lev', 'rhema' ),
				'slug' => 'lev',
				'name' => __( 'Leviticus', 'rhema' ),
				'chapters' => 27,
				'index' => 3,
			],
			[
				'abbr' => __( 'abbr/num', 'rhema' ),
				'slug' => 'num',
				'name' => __( 'Numbers', 'rhema' ),
				'chapters' => 36,
				'index' => 4,
			],
			[
				'abbr' => __( 'abbr/deut', 'rhema' ),
				'slug' => 'deut',
				'name' => __( 'Deuteronomy', 'rhema' ),
				'chapters' => 34,
				'index' => 5,
			],
			[
				'abbr' => __( 'abbr/josh', 'rhema' ),
				'slug' => 'josh',
				'name' => __( 'Joshua', 'rhema' ),
				'chapters' => 24,
				'index' => 6,
			],
			[
				'abbr' => __( 'abbr/judg', 'rhema' ),
				'slug' => 'judg',
				'name' => __( 'Judges', 'rhema' ),
				'chapters' => 21,
				'index' => 7,
			],
			[
				'abbr' => __( 'abbr/rut', 'rhema' ),
				'slug' => 'rth',
				'name' => __( 'Ruth', 'rhema' ),
				'chapters' => 4,
				'index' => 8,
			],
			[
				'abbr' => __( 'abbr/1sam', 'rhema' ),
				'slug' => '1sam',
				'name' => __( '1 Samuel', 'rhema' ),
				'chapters' => 31,
				'index' => 9,
			],
			[
				'abbr' => __( 'abbr/2sam', 'rhema' ),
				'slug' => '2sam',
				'name' => __( '2 Samuel', 'rhema' ),
				'chapters' => 24,
				'index' => 10,
			],
			[
				'abbr' => __( 'abbr/1ki', 'rhema' ),
				'slug' => '1kgs',
				'name' => __( '1 Kings', 'rhema' ),
				'chapters' => 22,
				'index' => 11,
			],
			[
				'abbr' => __( 'abbr/2ki', 'rhema' ),
				'slug' => '2kgs',
				'name' => __( '2 Kings', 'rhema' ),
				'chapters' => 25,
				'index' => 12,
			],
			[
				'abbr' => __( 'abbr/1chron', 'rhema' ),
				'slug' => '1chron',
				'name' => __( '1 Chronicles', 'rhema' ),
				'chapters' => 29,
				'index' => 13,
			],
			[
				'abbr' => __( 'abbr/2chron', 'rhema' ),
				'slug' => '2chron',
				'name' => __( '2 Chronicles', 'rhema' ),
				'chapters' => 36,
				'index' => 14,
			],
			[
				'abbr' => __( 'abbr/ezr', 'rhema' ),
				'slug' => 'ezra',
				'name' => __( 'Ezra', 'rhema' ),
				'chapters' => 10,
				'index' => 15,
			],
			[
				'abbr' => __( 'abbr/neh', 'rhema' ),
				'slug' => 'neh',
				'name' => __( 'Nehemiah', 'rhema' ),
				'chapters' => 13,
				'index' => 16,
			],
			[
				'abbr' => __( 'abbr/est', 'rhema' ),
				'slug' => 'esth',
				'name' => __( 'Esther', 'rhema' ),
				'chapters' => 10,
				'index' => 17,
			],
			[
				'abbr' => __( 'abbr/job', 'rhema' ),
				'slug' => 'job',
				'name' => __( 'Job', 'rhema' ),
				'chapters' => 42,
				'index' => 18,
			],
			[
				'abbr' => __( 'abbr/ps', 'rhema' ),
				'slug' => 'pslm',
				'name' => __( 'Psalms', 'rhema' ),
				'chapters' => 150,
				'index' => 19,
			],
			[
				'abbr' => __( 'abbr/prov', 'rhema' ),
				'slug' => 'prov',
				'name' => __( 'Proverbs', 'rhema' ),
				'chapters' => 31,
				'index' => 20,
			],
			[
				'abbr' => __( 'abbr/eccles', 'rhema' ),
				'slug' => 'eccles',
				'name' => __( 'Ecclesiastes', 'rhema' ),
				'chapters' => 12,
				'index' => 21,
			],
			[
				'abbr' => __( 'abbr/song', 'rhema' ),
				'slug' => 'song',
				'name' => __( 'Song of Solomon', 'rhema' ),
				'chapters' => 8,
				'index' => 22,
			],
			[
				'abbr' => __( 'abbr/isa', 'rhema' ),
				'slug' => 'isa',
				'name' => __( 'Isaiah', 'rhema' ),
				'chapters' => 66,
				'index' => 23,
			],
			[
				'abbr' => __( 'abbr/jer', 'rhema' ),
				'slug' => 'jer',
				'name' => __( 'Jeremiah', 'rhema' ),
				'chapters' => 52,
				'index' => 24,
			],
			[
				'abbr' => __( 'abbr/lam', 'rhema' ),
				'slug' => 'lam',
				'name' => __( 'Lamentations', 'rhema' ),
				'chapters' => 5,
				'index' => 25,
			],
			[
				'abbr' => __( 'abbr/ezek', 'rhema' ),
				'slug' => 'ezek',
				'name' => __( 'Ezekiel', 'rhema' ),
				'chapters' => 48,
				'index' => 26,
			],
			[
				'abbr' => __( 'abbr/dan', 'rhema' ),
				'slug' => 'dan',
				'name' => __( 'Daniel', 'rhema' ),
				'chapters' => 12,
				'index' => 27,
			],
			[
				'abbr' => __( 'abbr/hos', 'rhema' ),
				'slug' => 'hos',
				'name' => __( 'Hosea', 'rhema' ),
				'chapters' => 14,
				'index' => 28,
			],
			[
				'abbr' => __( 'abbr/joel', 'rhema' ),
				'slug' => 'joel',
				'name' => __( 'Joel', 'rhema' ),
				'chapters' => 3,
				'index' => 29,
			],
			[
				'abbr' => __( 'abbr/amos', 'rhema' ),
				'slug' => 'amos',
				'name' => __( 'Amos', 'rhema' ),
				'chapters' => 9,
				'index' => 30,
			],
			[
				'abbr' => __( 'abbr/obad', 'rhema' ),
				'slug' => 'obad',
				'name' => __( 'Obadiah', 'rhema' ),
				'chapters' => 1,
				'index' => 31,
			],
			[
				'abbr' => __( 'abbr/jonah', 'rhema' ),
				'slug' => 'jnh',
				'name' => __( 'Jonah', 'rhema' ),
				'chapters' => 4,
				'index' => 32,
			],
			[
				'abbr' => __( 'abbr/mic', 'rhema' ),
				'slug' => 'micah',
				'name' => __( 'Micah', 'rhema' ),
				'chapters' => 7,
				'index' => 33,
			],
			[
				'abbr' => __( 'abbr/nah', 'rhema' ),
				'slug' => 'nah',
				'name' => __( 'Nahum', 'rhema' ),
				'chapters' => 3,
				'index' => 34,
			],
			[
				'abbr' => __( 'abbr/hab', 'rhema' ),
				'slug' => 'hab',
				'name' => __( 'Habakkuk', 'rhema' ),
				'chapters' => 3,
				'index' => 35,
			],
			[
				'abbr' => __( 'abbr/zeph', 'rhema' ),
				'slug' => 'zeph',
				'name' => __( 'Zephaniah', 'rhema' ),
				'chapters' => 3,
				'index' => 36,
			],
			[
				'abbr' => __( 'abbr/hag', 'rhema' ),
				'slug' => 'haggai',
				'name' => __( 'Haggai', 'rhema' ),
				'chapters' => 2,
				'index' => 37,
			],
			[
				'abbr' => __( 'abbr/zech', 'rhema' ),
				'slug' => 'zech',
				'name' => __( 'Zechariah', 'rhema' ),
				'chapters' => 14,
				'index' => 38,
			],
			[
				'abbr' => __( 'abbr/mal', 'rhema' ),
				'slug' => 'mal',
				'name' => __( 'Malachi', 'rhema' ),
				'chapters' => 4,
				'index' => 39,
			],
			// New
			[
				'abbr' => __( 'abbr/matt', 'rhema' ),
				'slug' => 'matt',
				'name' => __( 'Matthew', 'rhema' ),
				'chapters' => 28,
				'index' => 40,
			],
			[
				'abbr' => __( 'abbr/mark', 'rhema' ),
				'slug' => 'mrk',
				'name' => __( 'Mark', 'rhema' ),
				'chapters' => 16,
				'index' => 41,
			],
			[
				'abbr' => __( 'abbr/luke', 'rhema' ),
				'slug' => 'luk',
				'name' => __( 'Luke', 'rhema' ),
				'chapters' => 24,
				'index' => 42,
			],
			[
				'abbr' => __( 'abbr/john', 'rhema' ),
				'slug' => 'john',
				'name' => __( 'John', 'rhema' ),
				'chapters' => 21,
				'index' => 43,
			],
			[
				'abbr' => __( 'abbr/acts', 'rhema' ),
				'slug' => 'acts',
				'name' => __( 'Acts', 'rhema' ),
				'chapters' => 28,
				'index' => 44,
			],
			[
				'abbr' => __( 'abbr/rom', 'rhema' ),
				'slug' => 'rom',
				'name' => __( 'Romans', 'rhema' ),
				'chapters' => 16,
				'index' => 45,
			],
			[
				'abbr' => __( 'abbr/1cor', 'rhema' ),
				'slug' => '1cor',
				'name' => __( '1 Corinthians', 'rhema' ),
				'chapters' => 16,
				'index' => 46,
			],
			[
				'abbr' => __( 'abbr/2cor', 'rhema' ),
				'slug' => '2cor',
				'name' => __( '2 Corinthians', 'rhema' ),
				'chapters' => 13,
				'index' => 47,
			],
			[
				'abbr' => __( 'abbr/gal', 'rhema' ),
				'slug' => 'gal',
				'name' => __( 'Galatians', 'rhema' ),
				'chapters' => 6,
				'index' => 48,
			],
			[
				'abbr' => __( 'abbr/eph', 'rhema' ),
				'slug' => 'ephes',
				'name' => __( 'Ephesians', 'rhema' ),
				'chapters' => 6,
				'index' => 49,
			],
			[
				'abbr' => __( 'abbr/phil', 'rhema' ),
				'slug' => 'phil',
				'name' => __( 'Philippians', 'rhema' ),
				'chapters' => 4,
				'index' => 50,
			],
			[
				'abbr' => __( 'abbr/col', 'rhema' ),
				'slug' => 'col',
				'name' => __( 'Colossians', 'rhema' ),
				'chapters' => 4,
				'index' => 51,
			],
			[
				'abbr' => __( 'abbr/1thess', 'rhema' ),
				'slug' => '1thess',
				'name' => __( '1 Thessalonians', 'rhema' ),
				'chapters' => 5,
				'index' => 52,
			],
			[
				'abbr' => __( 'abbr/2thess', 'rhema' ),
				'slug' => '2thess',
				'name' => __( '2 Thessalonians', 'rhema' ),
				'chapters' => 3,
				'index' => 53,
			],
			[
				'abbr' => __( 'abbr/1tim', 'rhema' ),
				'slug' => '1tim',
				'name' => __( '1 Timothy', 'rhema' ),
				'chapters' => 6,
				'index' => 54,
			],
			[
				'abbr' => __( 'abbr/2tim', 'rhema' ),
				'slug' => '2tim',
				'name' => __( '2 Timothy', 'rhema' ),
				'chapters' => 4,
				'index' => 55,
			],
			[
				'abbr' => __( 'abbr/titus', 'rhema' ),
				'slug' => 'titus',
				'name' => __( 'Titus', 'rhema' ),
				'chapters' => 3,
				'index' => 56,
			],
			[
				'abbr' => __( 'abbr/philem', 'rhema' ),
				'slug' => 'philem',
				'name' => __( 'Philemon', 'rhema' ),
				'chapters' => 1,
				'index' => 57,
			],
			[
				'abbr' => __( 'abbr/heb', 'rhema' ),
				'slug' => 'hebrews',
				'name' => __( 'Hebrews', 'rhema' ),
				'chapters' => 13,
				'index' => 58,
			],
			[
				'abbr' => __( 'abbr/james', 'rhema' ),
				'slug' => 'james',
				'name' => __( 'James', 'rhema' ),
				'chapters' => 5,
				'index' => 59,
			],
			[
				'abbr' => __( 'abbr/1pet', 'rhema' ),
				'slug' => '1pet',
				'name' => __( '1 Peter', 'rhema' ),
				'chapters' => 5,
				'index' => 60,
			],
			[
				'abbr' => __( 'abbr/2pet', 'rhema' ),
				'slug' => '2pet',
				'name' => __( '2 Peter', 'rhema' ),
				'chapters' => 3,
				'index' => 61,
			],
			[
				'abbr' => __( 'abbr/1john', 'rhema' ),
				'slug' => '1john',
				'name' => __( '1 John', 'rhema' ),
				'chapters' => 5,
				'index' => 62,
			],
			[
				'abbr' => __( 'abbr/2john', 'rhema' ),
				'slug' => '2john',
				'name' => __( '2 John', 'rhema' ),
				'chapters' => 1,
				'index' => 63,
			],
			[
				'abbr' => __( 'abbr/3john', 'rhema' ),
				'slug' => '3john',
				'name' => __( '3 John', 'rhema' ),
				'chapters' => 1,
				'index' => 64,
			],
			[
				'abbr' => __( 'abbr/jude', 'rhema' ),
				'slug' => 'jude',
				'name' => __( 'Jude', 'rhema' ),
				'chapters' => 1,
				'index' => 65,
			],
			[
				'abbr' => __( 'abbr/rev', 'rhema' ),
				'slug' => 'rev',
				'name' => __( 'Revelation', 'rhema' ),
				'chapters' => 22,
				'index' => 66,
			],
		];
		$this->error_message = [
			'should_activate' => __( 'Please activate plugin `Rhema`.', 'rhema' ),
			'should_setup_permalink' => __( 'Please setup "Permalinks" first.', 'rhema' ),
			'remote_timeout' => __( 'The remote server connection of Rhema has timed out. Please try again later.', 'rhema' ),
			'should_input_register_info' => __( 'Please activate plugin `Rhema`.', 'rhema' ),
			'logos_authorization_failed' => __( 'Logos service authorization failed', 'rhema' ),
			'unknown_error' => __( 'Unknown error.', 'rhema' ),
			'server_maintenance' => __( 'Bible server maintenance, Please try again later.', 'rhema' ),
			'not_allowed' => __( 'Sorry, you are not allowed to do that.', 'rhema' ),
			'no_found' => __( 'Sorry, no found.', 'rhema' ),
			'system/integrations/logos/api/jwt_wrong' => __( 'JWT token wrong.', 'rhema' ),
			'system/integrations/logos/api/param_wrong' => __( 'Must have parameters.', 'rhema' ),
			'system/app/general/options/rewrite_rules_exsited' => __( 'Entry path cant use.', 'rhema' ),
			'system/app/rest/options/field_is_wrong' => __( 'Your request field is wrong.', 'rhema' ),
			'system/app/rest/options/noting_to_save' => __( 'Rhema options nothing to save.', 'rhema' ),
			'system/app/rest/options/option_saved' => __( 'Rhema options saved.', 'rhema' ),
			'system/app/rest/bible/response_wrong' => __( 'Response wrong.', 'rhema' ),
			'system/app/rest/permission_denied' => __( 'Permission denied.', 'rhema' ),
		];
	}
}

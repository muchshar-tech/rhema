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

use Rhema\Common\Constants;
use Rhema\Common\Abstracts\Base;
use Rhema\Common\Traits\Singleton;

/**
 * Main function class for external uses
 *
 * @see rhema()
 * @package Rhema\Common
 */
final class Defaults extends Base {
	/**
	 * Singleton trait
	 */
	use Singleton;
	/**
	 * Info of translations
	 *
	 */
	public $translates = '[{"id":1,"name":"King James Version","abbr":"KJV","version":"","language":"en","table":"translate_kjv","intro":"intro","copyright":"copyright","createdAt":"2023-06-26T11:39:11.000Z","updatedAt":"2023-06-26T11:39:11.000Z"},{"id":2,"name":"和合本","abbr":"CUV","version":"","language":"zh-tw","table":"translate_cuv","intro":"intro","copyright":"copyright","createdAt":"2023-06-26T11:39:11.000Z","updatedAt":"2023-06-26T11:39:11.000Z"}]';
	/**
	 * Constants constructor.
	 *
	 * @since 1.0.0
	 */
	public function __construct() {
		parent::__construct();
	}

	public function localizeScriptData() {
		return [
			'RHEMA_SITE_ROOT'  => get_site_url( null, '', 'relative' ),
			'RHEMA_REST_ENDPOINTS'  => rhema()->bible()->restEndpoints(),
			'RHEMA_DOMAIN_TEXT' => $this->plugin->textDomain(),
			'RHEMA_CONSTANTS' => [
				'FEATURE_NAMES' => Constants::FEATURE_NAMES,
				'FEATURE_SLUG_NAMES' => Constants::FEATURE_SLUG_NAMES,
			],
			'RHEMA_ACTIVE_FEATURES' => rhema()->features()->getActiveInfo(),
		];
	}
}


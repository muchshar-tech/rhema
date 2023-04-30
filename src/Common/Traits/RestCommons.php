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

namespace Rhema\Common\Traits;

use Respect\Validation\Exceptions\ValidationException;
use WP_Error;
use Exception;

/**
 * The singleton skeleton trait to instantiate the class only once
 *
 * @package Rhema\Common\Traits
 * @since 1.0.0
 */
trait RestCommons {
	final public function sendError($error) {
        if ($error instanceof ValidationException || $error instanceof Exception) {
            return new WP_Error( $exception->getCode(), $exception->getMessage(), [ 'status' => $exception->getCode() ] );
        }
	}
}

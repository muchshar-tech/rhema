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

namespace Rhema\Common\Traits;

use Respect\Validation\Validator as v;
use Respect\Validation\Exceptions\ValidationException;
use WP_Error;
use Exception;

use \Rhema\Common\Constants;

/**
 * The singleton skeleton trait to instantiate the class only once
 *
 * @package Rhema\Common\Traits
 * @since 1.0.0
 */
trait RestCommons {
	final public function sendError( ValidationException|Exception $exception ): WP_Error {
		if ( ! $exception instanceof ValidationException && ! $exception instanceof Exception ) {
			return new WP_Error( 'unknown_error', Constants::init()->error_message['unknown_error'], [ 'status' => 500 ] );
		}
		$code = 0 === $exception->getCode() ? 500 : $exception->getCode();
		$msg = $exception->getMessage();
		if ( $exception instanceof ValidationException ) {
			return new WP_Error( 'send_output_schema_exception', $msg, [ 'status' => $code ] );
		}
		return new WP_Error( $code, $msg, [ 'status' => $code ] );
	}

	final public function sendRes( $data ) {
		try {
			$prepare = [ 'success' => true ];

			if ( isset( $prepare ) ) {
				$prepare['data'] = $data;
			}

			$output_schema = v::AnyOf(
				v::keySet(
					v::key( 'token', v::stringType(), false ),
					v::key( 'license_key', v::stringType(), false ),
					v::key( 'license_data', v::stringType(), false ),
					v::key( 'renew_date', v::stringType(), false ),
				),
				v::arrayType()
			);

			v::key( 'data', $output_schema )
				->key( 'success', v::boolType() )
				->key( 'message', v::stringType(), false )
				->assert( $prepare );

			return $prepare;
		} catch ( ValidationException $exception ) {
			return $this->sendError( $exception );
		} catch ( Exception $exception ) {
			return $this->sendError( $exception );
		}
	}
}

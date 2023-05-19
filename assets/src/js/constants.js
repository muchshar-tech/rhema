import { __ } from '@wordpress/i18n'

import RHEMA_LOCALIZE from 'RHEMA_LOCALIZE'

export const ACTIVATING_COUNT_DOWN_TIME = 4000
export const IDENTITY_TYPE = 'domain'
export const PRODUCT_SLUG_REST_NAME_MAP = {
    'wp-rhema-core-feature': 'core',
}
export const PRODUCT_SLUGS = [
    'donate-for-txipartners',
    'wp-rhema-core-feature',
    'wp-rehema-rlation-feature',
    'wp-rehema-q-and-a-feature',
    'wp-rehema-offline-reading',
]
export const ERROR_MESSAGE_MAPPING = {
    rest_cookie_invalid_nonce: __(
        `error/page-is-expired`,
        RHEMA_LOCALIZE.RHEMA_DOMAIN_TEXT
    ),
}

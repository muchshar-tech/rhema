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
export const UI_MESSAGE_MAPPING = {
    'bible-entry-path': __(
        'bible-entry-path',
        RHEMA_LOCALIZE.RHEMA_DOMAIN_TEXT
    ),
    'default-translation': __(
        'default-translation',
        RHEMA_LOCALIZE.RHEMA_DOMAIN_TEXT
    ),
    'default-translation/default': __(
        'default-translation/default',
        RHEMA_LOCALIZE.RHEMA_DOMAIN_TEXT
    ),
    'features/status': __(`features/status`, RHEMA_LOCALIZE.RHEMA_DOMAIN_TEXT),
    'features/comming-soon': __(
        `features/comming-soon`,
        RHEMA_LOCALIZE.RHEMA_DOMAIN_TEXT
    ),
    'features/active': __(`features/active`, RHEMA_LOCALIZE.RHEMA_DOMAIN_TEXT),
    'features/license': __(
        `features/license`,
        RHEMA_LOCALIZE.RHEMA_DOMAIN_TEXT
    ),
    'my-account/signin-logos': __(
        `my-account/signin-logos`,
        RHEMA_LOCALIZE.RHEMA_DOMAIN_TEXT
    ),
    'my-account/description': __(
        `If you have lost your License Key, you can log in here to check all the License Keys you have obtained in the past.`,
        RHEMA_LOCALIZE.RHEMA_DOMAIN_TEXT
    ),
    'my-account/forgot-password': __(
        `my-account/forgot-password`,
        RHEMA_LOCALIZE.RHEMA_DOMAIN_TEXT
    ),
    'my-account/signin': __(
        `my-account/signin`,
        RHEMA_LOCALIZE.RHEMA_DOMAIN_TEXT
    ),
    'my-account/signing': __(
        `my-account/signing`,
        RHEMA_LOCALIZE.RHEMA_DOMAIN_TEXT
    ),
    'my-account/welcome': __(
        `Welcome to Logos. You can check your information related to Logos here after logging in.`,
        RHEMA_LOCALIZE.RHEMA_DOMAIN_TEXT
    ),
    'about/paragraph-1': __(
        `Rhema is a WordPress plugin developed and operated by Muchshar on behalf of EON Center. Its purpose is to provide digital Bible services to churches, increasing the exposure of church websites when searching for Bible-related content. It offers church members the ability to search for and access teachings and sermons related to specific Bible verses, serving as a tool for spreading the gospel and providing pastoral care.`,
        RHEMA_LOCALIZE.RHEMA_DOMAIN_TEXT
    ),
    'about/paragraph-2': __(
        `If you are willing to support our ministry, please consider making a donation to us.`,
        RHEMA_LOCALIZE.RHEMA_DOMAIN_TEXT
    ),
    'bible-directory': __(`bible-directory`, RHEMA_LOCALIZE.RHEMA_DOMAIN_TEXT),
    'bible-directory/old-testament': __(
        `bible-directory/old-testament`,
        RHEMA_LOCALIZE.RHEMA_DOMAIN_TEXT
    ),
    'bible-directory/new-testament': __(
        `bible-directory/new-testament`,
        RHEMA_LOCALIZE.RHEMA_DOMAIN_TEXT
    ),
    'bible-directory/book': __(
        `bible-directory/book`,
        RHEMA_LOCALIZE.RHEMA_DOMAIN_TEXT
    ),
    'bible-directory/chapter': __(
        `bible-directory/chapter`,
        RHEMA_LOCALIZE.RHEMA_DOMAIN_TEXT
    ),
    'bible-directory/verse': __(
        `bible-directory/verse`,
        RHEMA_LOCALIZE.RHEMA_DOMAIN_TEXT
    ),
    'selected-verses': __(`Selected Verses`, RHEMA_LOCALIZE.RHEMA_DOMAIN_TEXT),
}

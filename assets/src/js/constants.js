import { __ } from '@wordpress/i18n'

import RHEMA_LOCALIZE from 'RHEMA_LOCALIZE'

export const ACTIVATING_COUNT_DOWN_TIME = 4000
export const IDENTITY_TYPE = 'domain'
export const { RHEMA_CONSTANTS } = RHEMA_LOCALIZE
export const PRODUCT_SLUG_NAMES = {
    DONATE: 'donate-for-txipartners', ...RHEMA_CONSTANTS.FEATURE_SLUG_NAMES
}
export const PRODUCT_SLUG_2_REST_NAME_MAP = Object.keys(RHEMA_CONSTANTS.FEATURE_SLUG_NAMES).reduce((obj, key) => {
    if (obj.hasOwnProperty(key)) {
        return obj
    }
    const slug = RHEMA_CONSTANTS.FEATURE_SLUG_NAMES[key]
    const restName = RHEMA_CONSTANTS.FEATURE_NAMES[key]
    obj[slug] = restName
    return obj
}, {})
export const PRODUCT_SLUGS = Object.values(PRODUCT_SLUG_NAMES)
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
    'features/description/core': __(`Rhema core function: read and query the whole Bible`, RHEMA_LOCALIZE.RHEMA_DOMAIN_TEXT),
    'features/description/download2host': __(`Download the bible to your own host, no need to obtain data from a third-party server to increase the speed of Bible query`, RHEMA_LOCALIZE.RHEMA_DOMAIN_TEXT),
    'features/description/relation': __(`Automatically correlate related posts with verses, bible verse insertion tool`, RHEMA_LOCALIZE.RHEMA_DOMAIN_TEXT),
    'features/description/offline': __(`Support PWA, so that the Bible of the website can be read offline on mobile phones`, RHEMA_LOCALIZE.RHEMA_DOMAIN_TEXT),
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
    'my-account/forgot-password-description': __(
        `my-account/forgot-password-description`,
        RHEMA_LOCALIZE.RHEMA_DOMAIN_TEXT
    ),
    'my-account/verify-email': __(
        `my-account/verify-email`,
        RHEMA_LOCALIZE.RHEMA_DOMAIN_TEXT
    ),
    'my-account/verify-email-description': __(
        `Send the verification letter to your mailbox, copy the startup code and paste it to the field below`,
        RHEMA_LOCALIZE.RHEMA_DOMAIN_TEXT
    ),
    'my-account/back-to-signin': __(
        `my-account/back-to-signin`,
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
    'my-account/send-verify-email': __(
        `my-account/send-verify-email`,
        RHEMA_LOCALIZE.RHEMA_DOMAIN_TEXT
    ),
    'my-account/sending-verify-email': __(
        `my-account/sending-verify-email`,
        RHEMA_LOCALIZE.RHEMA_DOMAIN_TEXT
    ),
    'my-account/sent-verify-email': __(
        `my-account/sent-verify-email`,
        RHEMA_LOCALIZE.RHEMA_DOMAIN_TEXT
    ),
    'my-account/submit-verify-email': __(
        `my-account/submit-verify-email`,
        RHEMA_LOCALIZE.RHEMA_DOMAIN_TEXT
    ),
    'my-account/submitting-verify-email': __(
        `my-account/submitting-verify-email`,
        RHEMA_LOCALIZE.RHEMA_DOMAIN_TEXT
    ),
    'my-account/send-forgot-password': __(
        `my-account/send-forgot-password`,
        RHEMA_LOCALIZE.RHEMA_DOMAIN_TEXT
    ),
    'my-account/sending-forgot-password': __(
        `my-account/sending-forgot-password`,
        RHEMA_LOCALIZE.RHEMA_DOMAIN_TEXT
    ),
    'my-account/sent-forgot-password': __(
        `my-account/sent-forgot-password`,
        RHEMA_LOCALIZE.RHEMA_DOMAIN_TEXT
    ),
    'my-account/have-authorization-code': __(
        `my-account/have-authorization-code`,
        RHEMA_LOCALIZE.RHEMA_DOMAIN_TEXT
    ),
    'my-account/submit-forgot-password': __(
        `my-account/submit-forgot-password`,
        RHEMA_LOCALIZE.RHEMA_DOMAIN_TEXT
    ),
    'my-account/submitting-forgot-password': __(
        `my-account/submitting-forgot-password`,
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
    'about/title/service-policy': __(
        `Service Policy`,
        RHEMA_LOCALIZE.RHEMA_DOMAIN_TEXT
    ),
    'about/service-policy/update-maintenance': __(
        `Feature Updates and Maintenance: We will regularly update and maintain the plugin to ensure its compatibility with the latest version of WordPress and continue to improve and add new features. We strive to address known issues and vulnerabilities promptly by providing patches and fixes. If you encounter any problems or discover any vulnerabilities, please visit %s to report your issues.`,
        RHEMA_LOCALIZE.RHEMA_DOMAIN_TEXT
    ),
    'about/service-policy/rights-reserved': __(
        `Rights Reserved: Muchshar Ltd. reserves the right to determine whether you are allowed to use this plugin.`,
        RHEMA_LOCALIZE.RHEMA_DOMAIN_TEXT
    ),
    'about/link/donation-1': __(
        `Taiwan Donation Link`,
        RHEMA_LOCALIZE.RHEMA_DOMAIN_TEXT
    ),
    'about/link/donation-2': __(
        `Overseas Donation Link`,
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

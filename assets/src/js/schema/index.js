import Joi from 'joi'

import { IDENTITY_TYPE } from '@components/constants'

const fields = {
    email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ['com', 'net', 'tw', 'org', 'io', 'app', 'test'] },
    }),
    identity_type: Joi.string().valid(IDENTITY_TYPE),
    product_slug: Joi.string().valid(
        'donate-for-txipartners',
        'wp-rhema-core-feature',
        'wp-rehema-rlation-feature',
        'wp-rehema-q-and-a-feature',
        'wp-rehema-offline-reading'
    ),
    username: Joi.string().min(5).max(30),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9!@#$%]{3,30}$')),
    license: Joi.string(),
    searchKeyword: Joi.string(),
}

export const signinLogosFields = Joi.object({
    identity_type: fields.identity_type.required(),
    username: fields.username.required(),
    password: fields.password.required(),
})

export const verifyEmailLogosFields = Joi.object({
    email: fields.email.required(),
})

export const activateRhemeaFields = Joi.object({
    email: fields.email.required(),
    identity_type: fields.identity_type.required(),
    product_slug: fields.product_slug.required(),
    username: fields.username.required(),
    password: fields.password.required(),
    confirm_password: Joi.ref('password'),
})

export const activateRhemeaByLicense = Joi.object({
    email: fields.email.required(),
    identity_type: fields.identity_type.required(),
    product_slug: fields.product_slug.required(),
    username: fields.username.required(),
    license: fields.license.required(),
})

export const searchBibleRawsByKeyword = Joi.object({
    words: fields.searchKeyword,
})

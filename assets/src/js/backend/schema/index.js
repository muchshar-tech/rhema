import Joi from 'joi'

export const activateRhemeaFields = Joi.object({
    active: Joi.object({
        email: Joi.string()
            .email({
                minDomainSegments: 2,
                tlds: { allow: ['com', 'net'] },
            })
            .required(),
        identity_type: Joi.string().required(),
        product_slug: Joi.string().required(),
        username: Joi.string().alphanum().min(3).max(30).required(),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        confirm_password: Joi.ref('password'),
    }),
}).with('password', 'repeat_password')

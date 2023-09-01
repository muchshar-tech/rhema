import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { __ } from '@wordpress/i18n'
import { sprintf } from 'sprintf-js'
import parseHTML from 'html-react-parser'

import { UI_MESSAGE_MAPPING } from '@components/constants'
import { useSigninMutation } from '@components/services'
import { LoginCard, OrdersListing } from '@components/backend/my-account'
import { addSigninToken } from '@components/backend/states/accountSlice'

export const About = () => {
    return (
        <div className="max-w-lg">
            <p className="text-sm">{UI_MESSAGE_MAPPING['about/paragraph-1']}</p>
            <p className="text-sm">{UI_MESSAGE_MAPPING['about/paragraph-2']}</p>
            <ul className="text-sm">
                <li>
                    <a
                        href="https://p.ecpay.com.tw/BDA9F8A"
                        target="_blank"
                        rel="noreferrer"
                    >
                        {UI_MESSAGE_MAPPING['about/link/donation-1']}
                    </a>
                </li>
                <li>
                    <a
                        href="https://paypal.me/eoncenter"
                        target="_blank"
                        rel="noreferrer"
                    >
                        {UI_MESSAGE_MAPPING['about/link/donation-2']}
                    </a>
                </li>
            </ul>
            <h3>{UI_MESSAGE_MAPPING['about/title/service-policy']}</h3>
            <ul>
                <li>
                    {parseHTML(
                        sprintf(
                            UI_MESSAGE_MAPPING[
                                'about/service-policy/update-maintenance'
                            ],
                            '<a href="https://github.com/muchshar-tech/rhema/issues" target="_blank" rel="noreferrer">https://github.com/muchshar-tech/rhema/issues</a>'
                        )
                    )}
                </li>
                <li>
                    {UI_MESSAGE_MAPPING['about/service-policy/rights-reserved']}
                </li>
            </ul>
        </div>
    )
}

export const Account = () => {
    const dispatch = useDispatch()
    const [
        signin,
        { data: signinResponse, error: signinError, isLoading: isSigning },
    ] = useSigninMutation()
    const hasToken = useSelector((state) => {
        if (!state?.account?.token) {
            return false
        }
        if (typeof state?.account?.token !== 'string') {
            return false
        }
        if (state?.account?.token.length <= 0) {
            return false
        }
        return true
    })

    const onClickSigin = async (data) => {
        const { identity_type, ...body } = data
        const payload = await signin(body)
        const {
            data: { data: response },
        } = payload
        const { token } = response
        dispatch(addSigninToken({ token }))
    }

    const onClickVerifyEmail = async (data) => {

    }

    return (
        <>
            {!hasToken ? (
                <div className="flex justify-center">
                    <LoginCard
                        className="max-w-sm"
                        onClickSigin={onClickSigin}
                        onClickForgotPw={() => {
                        }}
                        onClickVerifyEmail={onClickVerifyEmail}
                        signinData={{ signinResponse, signinError, isSigning }}
                    />
                </div>
            ) : (
                <div className="flex flex-wrap justify-center">
                    <div className="mb-4 w-full">
                        {UI_MESSAGE_MAPPING['my-account/welcome']}
                    </div>
                    <OrdersListing />
                </div>
            )}
        </>
    )
}

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { __ } from '@wordpress/i18n'

import RHEMA_LOCALIZE from 'RHEMA_LOCALIZE'
import { IDENTITY_TYPE } from '@components/constants'
import { useSigninMutation } from '@components/services'
import { LoginCard, OrdersListing } from '@components/backend/my-account'
import { addSigninToken } from '@components/backend/states/accountSlice'

export const About = () => {
    return (
        <div className="max-w-lg">
            <p className="text-sm">
                {__(
                    `Rhema is a WordPress plugin developed and operated by Muchshar
                Ltd. It is designed to provide a digital Bible service for
                church websites around the world and increase the exposure of
                church websites in search engine results when users search for
                Bible verses online. In the future, additional features will be
                developed for the purpose of evangelism and pastoral care.`,
                    RHEMA_LOCALIZE.RHEMA_DOMAIN_TEXT
                )}
            </p>

            <p className="text-sm">
                {__(
                    `If you are willing to support our ministry, please consider
                making a donation to us.`,
                    RHEMA_LOCALIZE.RHEMA_DOMAIN_TEXT
                )}
            </p>
        </div>
    )
}

export const Account = () => {
    const dispatch = useDispatch()
    const [
        signin,
        { data: signinResponse, error: signinError, isLoading: isSigning },
    ] = useSigninMutation()
    const isSignined = useSelector((state) => {
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
    return (
        <>
            {!isSignined ? (
                <div className="flex justify-center">
                    <LoginCard
                        className="max-w-sm"
                        onClickSigin={async (data) => {
                            const { identity_type, ...body } = data
                            const payload = await signin(body)
                            const {
                                data: { data: response },
                            } = payload
                            const { token } = response
                            console.log(token)
                            dispatch(addSigninToken({ token }))
                        }}
                        onClickForgotPw={() => {
                            console.log('onClickForgotPw')
                        }}
                        onClickRegister={() => {
                            console.log('onClickRegister')
                        }}
                        signinData={{ signinResponse, signinError, isSigning }}
                    />
                </div>
            ) : (
                <div className="flex flex-wrap justify-center">
                    <div className="mb-4 w-full">
                        {__(
                            `Welcome to Logos. You can check your information related to Logos here after logging in.`,
                            RHEMA_LOCALIZE.RHEMA_DOMAIN_TEXT
                        )}
                    </div>
                    <OrdersListing />
                </div>
            )}
        </>
    )
}

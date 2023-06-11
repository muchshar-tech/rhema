import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { __ } from '@wordpress/i18n'

import { UI_MESSAGE_MAPPING } from '@components/constants'
import { useSigninMutation } from '@components/services'
import { LoginCard, OrdersListing } from '@components/backend/my-account'
import { addSigninToken } from '@components/backend/states/accountSlice'

export const About = () => {
    return (
        <div className="max-w-lg">
            <p className="text-sm">{UI_MESSAGE_MAPPING['about/paragraph-1']}</p>

            <p className="text-sm">{UI_MESSAGE_MAPPING['about/paragraph-2']}</p>
        </div>
    )
}

export const Account = () => {
    console.log('Run Account')
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
        console.log('onClickSigin')
        const { identity_type, ...body } = data
        console.log('Start Signin')
        const payload = await signin(body)
        console.log('End Signin')
        const {
            data: { data: response },
        } = payload
        const { token } = response
        console.log(token)
        dispatch(addSigninToken({ token }))
    }

    return (
        <>
            {!hasToken ? (
                <div className="flex justify-center">
                    <LoginCard
                        className="max-w-sm"
                        onClickSigin={onClickSigin}
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
                        {UI_MESSAGE_MAPPING['my-account/welcome']}
                    </div>
                    <OrdersListing />
                </div>
            )}
        </>
    )
}

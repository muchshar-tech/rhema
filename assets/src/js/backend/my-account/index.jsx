import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import { __ } from '@wordpress/i18n'

import RHEMA_LOCALIZE from 'RHEMA_LOCALIZE'
import { IDENTITY_TYPE } from '@components/constants'
import * as FormTable from '@components/backend/form-table'
import * as FieldSchama from '@components/backend/schema'

export const LoginCard = ({
    className = '',
    onClickSigin,
    onClickForgotPw,
    onClickRegister,
    signinData,
}) => {
    const formMethods = useForm({
        defaultValues: {
            username: RHEMA_LOCALIZE.WP_OPTIONS.HOST_DOMAIN,
            identity_type: IDENTITY_TYPE,
            password: '',
        },
        resolver: joiResolver(FieldSchama.signinLogosFields),
    })
    const { register, setError, formState, handleSubmit } = formMethods
    const { isSubmitting, errors } = formState

    const { signinResponse, signinError, isSigning } = signinData

    const showExceptionMessage =
        (!!signinResponse &&
            !/2[0-9][0-9]/.test(signinResponse?.response.code)) ||
        !!signinError

    console.log(errors)

    console.log(signinResponse, signinError)

    const responseMessage = ((signinResponse, signinError) => {
        const code = signinResponse?.response.code || signinError?.status
        const label =
            signinResponse?.response.message || signinError?.data.code || ''
        const message = /5[0-9][0-9]/.test(code)
            ? 'There has been a critical error.'
            : signinResponse?.body ||
              signinError?.data?.message ||
              signinError?.data?.data?.message
        return {
            code,
            label,
            message,
        }
    })(signinResponse, signinError)

    console.log(responseMessage)

    const showSuccess = /2[0-9][0-9]/.test(responseMessage.code)

    const classNames = ['postbox mb-0 min-w-0', className]
    return (
        <div className={classNames.join(' ')}>
            <div className="postbox-header px-2 justify-center">
                <h2 className="text-14px py-3 m-0">
                    {__(`Signin Logos`, RHEMA_LOCALIZE.RHEMA_DOMAIN_TEXT)}
                </h2>
            </div>
            <div className="inside pb-0">
                <p>
                    {__(
                        `If you have lost your License Key, you can log in here to check
                all the License Keys you have obtained in the past.`,
                        RHEMA_LOCALIZE.RHEMA_DOMAIN_TEXT
                    )}
                </p>

                <FormTable.ModalForm>
                    <FormTable.ModalForm.FieldRow label="Username">
                        <input
                            className="w-full"
                            type="text"
                            {...register('username', {
                                required: true,
                            })}
                        />
                        <FormTable.FieldErrorMsg
                            message={errors.email?.message}
                        />
                    </FormTable.ModalForm.FieldRow>
                    <FormTable.ModalForm.FieldRow label="Password">
                        <input
                            type="password"
                            className="w-full min-w-200px"
                            {...register('password', {
                                required: true,
                            })}
                        />
                        <FormTable.FieldErrorMsg
                            message={errors.password?.message}
                        />
                        <p className="m-0 mb-2 max-w-200px text-xs">
                            <button
                                className="button button-link hover:bg-transparent"
                                onClick={onClickForgotPw}
                            >
                                {__(
                                    `Forgot password?`,
                                    RHEMA_LOCALIZE.RHEMA_DOMAIN_TEXT
                                )}
                            </button>
                        </p>
                    </FormTable.ModalForm.FieldRow>
                    <input type="hidden" {...register('identity_type')} />
                </FormTable.ModalForm>
            </div>
            <div className="p-1 flex items-center justify-between border-0 border-t border-[#c3c4c7] border-solid bg-[#f6f7f7]">
                <div className="flex grow">
                    <button
                        className="button button-primary"
                        onClick={(e) => {
                            handleSubmit(onClickSigin)(e)
                            // .catch((err) => {
                            //     setError('response', {
                            //         type: 'custom',
                            //         message: err.message,
                            //     })
                            // })
                        }}
                    >
                        {!isSubmitting && !isSigning
                            ? __(`Signin`, RHEMA_LOCALIZE.RHEMA_DOMAIN_TEXT)
                            : __(
                                  `Signing...`,
                                  RHEMA_LOCALIZE.RHEMA_DOMAIN_TEXT
                              )}
                    </button>
                    {showSuccess && (
                        <FormTable.ResponseSuccessMsg label="Success">
                            Signin suceesfully.
                        </FormTable.ResponseSuccessMsg>
                    )}
                    {showExceptionMessage ? (
                        <FormTable.ResponseErrorMsg
                            code={responseMessage.code}
                            label={responseMessage.label}
                        >
                            {responseMessage?.message ||
                                'There has been a critical error.'}
                        </FormTable.ResponseErrorMsg>
                    ) : null}
                </div>
            </div>
        </div>
    )
}

export const OrdersListing = () => {
    return <div>Listing</div>
}

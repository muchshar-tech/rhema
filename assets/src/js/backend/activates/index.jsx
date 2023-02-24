import React, { useState, useEffect, memo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import Countdown from 'react-countdown'
import { useForm } from 'react-hook-form'
import moment from 'moment/moment'
import { joiResolver } from '@hookform/resolvers/joi'

import RHEMA_LOCALIZE from 'RHEMA_LOCALIZE'
import {
    ACTIVATING_COUNT_DOWN_TIME,
    IDENTITY_TYPE,
} from '@components/constants'
import * as FormTable from '@components/backend/form-table'
import * as Components from '@components/backend/components'
import * as FieldSchama from '@components/backend/schema'
import {
    useActivateCoreMutation,
    useActivateByLicenseMutation,
    useDeactivateMutation,
} from '@components/services'
import { addLicense, deleteLicense } from '@components/backend/states/generalSlice'

export const Core = memo(({ show, onClickClose }) => {
    console.log('Run Core')
    const dispatch = useDispatch()
    const coreActiveFormMethods = useForm({
        defaultValues: {
            email: RHEMA_LOCALIZE.WP_OPTIONS.ADMIN_EMAIL,
            identity_type: IDENTITY_TYPE,
            product_slug: 'wp-rehema-core-feature',
            username: RHEMA_LOCALIZE.WP_OPTIONS.HOST_DOMAIN,
            password: '',
            confirm_password: '',
        },
        resolver: joiResolver(FieldSchama.activateRhemeaFields),
    })
    const { register, formState, handleSubmit } = coreActiveFormMethods
    const { isSubmitting, errors } = formState
    const [
        activateCore,
        {
            data: activateCoreResponse,
            error: activateCoreError,
            isLoading: isActivatingCore,
        },
    ] = useActivateCoreMutation()

    const showExceptionMessage =
        (!!activateCoreResponse &&
            !/2[0-9][0-9]/.test(activateCoreResponse?.response.code)) ||
        !!activateCoreError
    const showActivatingFeaturePrepare =
        /2[0-9][0-9]/.test(activateCoreResponse?.response.code) &&
        !showExceptionMessage

    const [showActivatingFeature, setShowActivatingFeature] = useState(
        showActivatingFeaturePrepare
    )

    const onSubmit = async (data) => {
        console.log(data)
        const { confirm_password, ...sendOutFields } = data
        const payload = await activateCore(sendOutFields)
    }

    const triggerClose = () => {
        onClickClose()
        setShowActivatingFeature(false)
    }

    const onActivatingCompleted = (response) => {
        triggerClose()
        const { license_key: key, renew_date, license_data: data } = response
        console.log(response, key, renew_date, data)
        dispatch(addLicense({ bible: { key, renew_date, data } }))
    }

    useEffect(() => {
        console.log(showActivatingFeature)
        if (showActivatingFeaturePrepare) {
            setShowActivatingFeature(true)
        }
    }, [showActivatingFeaturePrepare])

    return (
        <Components.ScreenOverlay
            show={show}
            className={{
                root: '',
                modal: 'max-w-sm',
            }}
            title="Apply to activate Rhema"
            onClickClose={triggerClose}
        >
            <div className="flex mb-3">
                <div className="w-full p-2 border-t border-b border-l-0 border-r-0 border-[#c3c4c7] border-solid">
                    <div className="mb-1">
                        <span className="inline-block bg-gray-300 p-4px mr-1 rounded font-medium">
                            Product
                        </span>
                        Rhema Core
                    </div>
                    <div className="mb-1">
                        <span className="inline-block bg-gray-300 p-4px mr-1 rounded font-medium">
                            Price
                        </span>
                        Free
                    </div>
                    <div className="mb-1">
                        <span className="inline-block bg-gray-300 p-4px mr-1 rounded font-medium">
                            Subscription period
                        </span>
                        Unlimited
                    </div>
                </div>
            </div>

            <FormTable.ModalForm onSubmit={handleSubmit(onSubmit)}>
                <FormTable.ModalForm.FieldRow label="Email">
                    <input
                        className="w-full"
                        type="text"
                        {...register('email', {
                            required: true,
                        })}
                    />
                    <p className="m-0 mb-2 max-w-200px text-xs">
                        License key will be sent to this email, please confirm
                        that you can receive.
                    </p>
                    <FormTable.FieldErrorMsg message={errors.email?.message} />
                </FormTable.ModalForm.FieldRow>
                <FormTable.ModalForm.FieldRow label="Domain">
                    <input
                        type="text"
                        className="w-full"
                        {...register('username', {
                            required: true,
                        })}
                        readOnly
                    />
                    <p className="m-0 mb-2 max-w-200px text-xs">
                        In the future, if you lose the License key, please use
                        this field value as the username to log in to
                        "logos.api"
                    </p>
                    <FormTable.FieldErrorMsg
                        message={errors.username?.message}
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
                </FormTable.ModalForm.FieldRow>
                <FormTable.ModalForm.FieldRow label="Confirm Password">
                    <input
                        type="password"
                        className="w-full min-w-200px"
                        {...register('confirm_password', {
                            required: true,
                        })}
                    />
                    <FormTable.FieldErrorMsg
                        message={errors.confirm_password?.message}
                    />
                </FormTable.ModalForm.FieldRow>
                <FormTable.ModalForm.FieldRow>
                    <input type="hidden" {...register('identity_type')} />
                    <FormTable.FieldErrorMsg
                        message={errors.identity_type?.message}
                    />
                </FormTable.ModalForm.FieldRow>
                <FormTable.ModalForm.FieldRow>
                    <input type="hidden" {...register('product_slug')} />
                    <FormTable.FieldErrorMsg
                        message={errors.product_slug?.message}
                    />
                </FormTable.ModalForm.FieldRow>
                <div className="flex">
                    <button
                        type="submit"
                        className="button button-primary flex items-center"
                        {...((isSubmitting ||
                            isActivatingCore ||
                            showActivatingFeature) && {
                            disabled: 'disabled',
                        })}
                    >
                        {isSubmitting || isActivatingCore ? (
                            <>
                                <span className="spinner is-active m-0 mr-1 float-none inline-block"></span>
                                Applying...
                            </>
                        ) : showActivatingFeature ? (
                            <>
                                <span className="spinner is-active m-0 mr-1 float-none inline-block"></span>
                                Activating...
                                <Countdown
                                    date={
                                        Date.now() + ACTIVATING_COUNT_DOWN_TIME
                                    }
                                    renderer={({ seconds, completed }) => {
                                        if (completed) {
                                            return null
                                        } else {
                                            return <span>({seconds})</span>
                                        }
                                    }}
                                    onComplete={() => {
                                        onActivatingCompleted(
                                            activateCoreResponse.body
                                        )
                                    }}
                                />
                            </>
                        ) : (
                            'Confirm'
                        )}
                    </button>
                    {showActivatingFeature && (
                        <FormTable.ResponseSuccessMsg label="Success">
                            Your application has been approved, activating the
                            feature
                        </FormTable.ResponseSuccessMsg>
                    )}
                    {showExceptionMessage && (
                        <FormTable.ResponseErrorMsg
                            code={
                                activateCoreResponse?.response.code ||
                                activateCoreError.status
                            }
                            label={
                                activateCoreResponse?.response.message ||
                                activateCoreError.data.code
                            }
                        >
                            {activateCoreResponse?.body ||
                                'There has been a critical error.'}
                        </FormTable.ResponseErrorMsg>
                    )}
                </div>
            </FormTable.ModalForm>
        </Components.ScreenOverlay>
    )
})

export const License = ({ show, onClickClose }) => {
    const dispatch = useDispatch()
    const licenseData = useSelector((state) => {
        const timeZone = RHEMA_LOCALIZE.WP_OPTIONS.TIME_ZONE || '0'
        const license = state.general.licenses.bible
        const licenseData = JSON.parse(license.data)
        const renewDate = moment(license.renew_date).utcOffset(timeZone)
        const nowDate = moment()
        if (typeof license.key !== 'string' || license.key.length <= 0) {
            return null
        }
        if (nowDate.isAfter(renewDate)) {
            return null
        }
        if (
            typeof licenseData.email !== 'string' ||
            licenseData.email.length <= 0
        ) {
            return null
        }
        if (
            typeof licenseData.username !== 'string' ||
            licenseData.username.length <= 0
        ) {
            return null
        }
        return {
            key: license.key,
            renew_date: license.renew_date,
            ...licenseData,
        }
    })
    const isActived =
        typeof licenseData === 'object' &&
        licenseData !== null &&
        licenseData.hasOwnProperty('key') &&
        typeof licenseData?.key === 'string' &&
        licenseData.key.length > 0
    const activeFormMethods = useForm({
        defaultValues: {
            email: licenseData?.email || RHEMA_LOCALIZE.WP_OPTIONS.ADMIN_EMAIL,
            identity_type: licenseData?.identity_type || IDENTITY_TYPE,
            product_slug: licenseData?.product_slug || 'wp-rehema-core-feature',
            username:
                licenseData?.username || RHEMA_LOCALIZE.WP_OPTIONS.HOST_DOMAIN,
            license: licenseData?.key || '',
        },
        resolver: joiResolver(FieldSchama.activateRhemeaByLicense),
    })

    const { register, formState, handleSubmit } = activeFormMethods
    const { isSubmitting, errors } = formState
    const [
        activate,
        {
            data: activateResponse,
            error: activateError,
            isLoading: isActivating,
        },
    ] = useActivateByLicenseMutation()
    const [
        deactivate,
        {
            data: deactivateResponse,
            error: deactivateError,
            isLoading: isDeactivating,
        },
    ] = useDeactivateMutation()

    const showExceptionMessage =
        (!!activateResponse &&
            !/2[0-9][0-9]/.test(activateResponse?.response.code)) ||
        !!activateError ||
        (!!deactivateResponse &&
            !/2[0-9][0-9]/.test(deactivateResponse?.response?.code)) ||
        !!deactivateError
    const responseMessage = ((activateError, deactivateError) => {
        const code =
            activateResponse?.response.code ||
            activateError?.status ||
            deactivateResponse?.response.code ||
            deactivateError?.status
        const label =
            activateResponse?.response.message ||
            activateError?.data.code ||
            deactivateResponse?.response.message ||
            deactivateError?.data?.code ||
            deactivateError?.data[0]?.code ||
            ''
        const message = /5[0-9][0-9]/.test(code)
            ? 'There has been a critical error.'
            : activateResponse?.body || deactivateError?.data?.message
        return {
            code,
            label,
            message,
        }
    })(activateError, deactivateError)
    const showActivatingPrepare =
        /2[0-9][0-9]/.test(activateResponse?.response.code) &&
        !showExceptionMessage

    const [showActivating, setShowActivating] = useState(showActivatingPrepare)

    const onSubmit = async (data) => {
        console.log(data)
        if (!isActived) {
            const payload = await activate(data)
        } else {
            const payload = await deactivate(data)
            dispatch(deleteLicense({ bible: { key: payload.data.body, renew_date: null, data: null } }))
        }
    }

    const triggerClose = () => {
        onClickClose()
        setShowActivating(false)
    }

    const onActivatingCompleted = (response) => {
        triggerClose()
        const { license_key: key, renew_date, license_data: data } = response
        console.log(response, key, renew_date, data)
        dispatch(addLicense({ bible: { key, renew_date, data } }))
    }

    const onClickDeactivate = async (e) => {
        e.preventDefault()
        console.log('Deactivate')
        const payload = await deactivate({
            product_slug: 'wp-rehema-core-feature',
            // license:
        })
    }

    useEffect(() => {
        console.log(showActivating)
        if (showActivatingPrepare) {
            setShowActivating(true)
        }
    }, [showActivatingPrepare])

    return (
        <Components.ScreenOverlay
            show={show[0]}
            className={{
                root: '',
                modal: 'max-w-xs',
            }}
            title="Enter license to active"
            onClickClose={onClickClose}
        >
            <div className="flex mb-3">
                <div className="w-full p-2 border-t border-b border-l-0 border-r-0 border-[#c3c4c7] border-solid">
                    <div className="mb-1">
                        If you already have a license key, you can fill in the
                        following fields, and your information will be verified
                        after sending it out. If it is correct, it will be
                        activated.
                    </div>
                    <div className="mb-1">
                        <span className="inline-block bg-gray-300 p-4px mr-1 rounded font-medium">
                            Status
                        </span>
                        {isActived ? 'Activated' : 'Not Activated'}
                    </div>
                    <div className="mb-1">
                        <span className="inline-block bg-gray-300 p-4px mr-1 rounded font-medium">
                            Renew Date
                        </span>
                        {isActived
                            ? moment(licenseData.renew_date)
                                  .utcOffset(
                                      RHEMA_LOCALIZE.WP_OPTIONS.TIME_ZONE || 0
                                  )
                                  .format('YYYY/MM/DD hh:mm:ss')
                            : ''}
                    </div>
                </div>
            </div>

            <FormTable.ModalForm onSubmit={handleSubmit(onSubmit)}>
                <FormTable.ModalForm.FieldRow label="License">
                    <input
                        className="w-full"
                        type="text"
                        {...register('license', {
                            required: true,
                        })}
                        {...(isActived && { readOnly: true })}
                    />
                    <FormTable.FieldErrorMsg
                        message={errors.license?.message}
                    />
                </FormTable.ModalForm.FieldRow>
                <FormTable.ModalForm.FieldRow label="Email">
                    <input
                        className="w-full"
                        type="text"
                        {...register('email', {
                            required: true,
                        })}
                        {...(isActived && { readOnly: true })}
                    />
                    <FormTable.FieldErrorMsg message={errors.email?.message} />
                </FormTable.ModalForm.FieldRow>
                <FormTable.ModalForm.FieldRow label="Domain">
                    <input
                        type="text"
                        className="w-full"
                        {...register('username', {
                            required: true,
                        })}
                        readOnly
                    />
                    <FormTable.FieldErrorMsg
                        message={errors.username?.message}
                    />
                </FormTable.ModalForm.FieldRow>
                <FormTable.ModalForm.FieldRow>
                    <input type="hidden" {...register('identity_type')} />
                    <FormTable.FieldErrorMsg
                        message={errors.identity_type?.message}
                    />
                </FormTable.ModalForm.FieldRow>
                <FormTable.ModalForm.FieldRow>
                    <input type="hidden" {...register('product_slug')} />
                    <FormTable.FieldErrorMsg
                        message={errors.product_slug?.message}
                    />
                </FormTable.ModalForm.FieldRow>
                <div className="flex">
                    {!isActived ? (
                        <button
                            type="submit"
                            className="button button-primary flex items-center"
                            {...((isSubmitting ||
                                isActivating ||
                                showActivating) && {
                                disabled: 'disabled',
                            })}
                        >
                            {isSubmitting || isActivating ? (
                                <>
                                    <span className="spinner is-active m-0 mr-1 float-none inline-block"></span>
                                    Verifying...
                                </>
                            ) : showActivating ? (
                                <>
                                    <span className="spinner is-active m-0 mr-1 float-none inline-block"></span>
                                    Activating...
                                    <Countdown
                                        date={
                                            Date.now() +
                                            ACTIVATING_COUNT_DOWN_TIME
                                        }
                                        renderer={({ seconds, completed }) => {
                                            if (completed) {
                                                return null
                                            } else {
                                                return <span>({seconds})</span>
                                            }
                                        }}
                                        onComplete={() => {
                                            onActivatingCompleted(
                                                activateResponse.body
                                            )
                                        }}
                                    />
                                </>
                            ) : (
                                'Confirm'
                            )}
                        </button>
                    ) : null}
                    {isActived ? (
                        <button
                            type="submit"
                            className="button flex items-center"
                        >
                            {isDeactivating ? 'Deactivating...' : 'Deactivate'}
                        </button>
                    ) : null}
                    {showActivating ? (
                        <FormTable.ResponseSuccessMsg label="Success">
                            Your application has been approved, activating the
                            feature
                        </FormTable.ResponseSuccessMsg>
                    ) : null}
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
            </FormTable.ModalForm>
        </Components.ScreenOverlay>
    )
}

License.propTypes = {
    show: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.arrayOf(
            PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
        ),
    ]),
    onClickClose: PropTypes.func,
}

import React, { useState, useEffect, memo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import Countdown from 'react-countdown'
import { useForm } from 'react-hook-form'
import moment from 'moment/moment'
import { joiResolver } from '@hookform/resolvers/joi'

import { isJsonStr } from '@components/common'
import RHEMA_LOCALIZE from 'RHEMA_LOCALIZE'
import {
    ACTIVATING_COUNT_DOWN_TIME,
    IDENTITY_TYPE,
} from '@components/constants'
import * as FormTable from '@components/backend/form-table'
import * as Components from '@components/backend/components'
import * as FieldSchama from '@components/schema'
import {
    useActivateCoreMutation,
    useActivateByLicenseMutation,
    useDeactivateMutation,
} from '@components/services'
import {
    addLicense,
    deleteLicense,
} from '@components/backend/states/generalSlice'

export const Core = memo(function Core({ show, onClickClose }) {
    const dispatch = useDispatch()
    const coreActiveFormMethods = useForm({
        defaultValues: {
            email: RHEMA_LOCALIZE.WP_OPTIONS.ADMIN_EMAIL,
            identity_type: IDENTITY_TYPE,
            product_slug: 'wp-rhema-core-feature',
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

    const showExceptionMessage = !!activateCoreError
    const showActivatingFeaturePrepare = activateCoreResponse?.success || false

    const [showActivatingFeature, setShowActivatingFeature] = useState(
        showActivatingFeaturePrepare
    )

    const onSubmit = async (data) => {
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
        dispatch(addLicense({ bible: { key, renew_date, data } }))
    }

    useEffect(() => {
        if (showActivatingFeaturePrepare) {
            setShowActivatingFeature(true)
        }
    }, [showActivatingFeaturePrepare])

    return (
        <Components.ScreenOverlay
            show={show}
            className={{
                root: 'z-10',
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
                                <Components.ButtonSpinner className="mr-1" />
                                Applying...
                            </>
                        ) : showActivatingFeature ? (
                            <>
                                <Components.ButtonSpinner className="mr-1" />
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
                                            activateCoreResponse.data
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
                            {activateCoreError?.data.message ||
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
        const licenseData = isJsonStr(license.data)
            ? JSON.parse(license.data)
            : license.data
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

    const activeFormMethods = useForm({
        defaultValues: {
            email: licenseData?.email || RHEMA_LOCALIZE.WP_OPTIONS.ADMIN_EMAIL,
            identity_type: licenseData?.identity_type || IDENTITY_TYPE,
            product_slug: licenseData?.product_slug || 'wp-rhema-core-feature',
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

    const isActived =
        typeof licenseData === 'object' &&
        licenseData !== null &&
        licenseData.hasOwnProperty('key') &&
        typeof licenseData?.key === 'string' &&
        licenseData.key.length > 0
    const isDeactivated = deactivateResponse?.success

    const showExceptionMessage = !!activateError || !!deactivateError
    const responseMessage = ((
        activateResponse,
        deactivateResponse,
        activateError,
        deactivateError
    ) => {
        const code = activateResponse?.success
            ? 200
            : false || activateError?.status || deactivateResponse?.success
            ? 200
            : false || deactivateError?.status
        const label = activateResponse?.success
            ? 'seccess'
            : false || activateError?.data.code || deactivateResponse?.success
            ? 200
            : false ||
              deactivateError?.data?.code ||
              deactivateError?.data[0]?.code ||
              ''
        const message = /5[0-9][0-9]/.test(code)
            ? 'There has been a critical error.'
            : activateResponse?.body ||
              activateError?.data?.message ||
              deactivateError?.data?.message
        return {
            code,
            label,
            message,
        }
    })(activateResponse, deactivateResponse, activateError, deactivateError)
    const showActivatingPrepare = activateResponse?.success

    const [showDeactivated, setShowDeactivated] = useState(isDeactivated)
    const [showActivating, setShowActivating] = useState(showActivatingPrepare)

    const onSubmit = async (data) => {
        if (!isActived) {
            const payload = await activate(data)
        } else {
            const payload = await deactivate(data)
            dispatch(
                deleteLicense({
                    bible: {
                        key: payload.data.body,
                        renew_date: null,
                        data: null,
                    },
                })
            )
        }
    }

    const triggerClose = () => {
        onClickClose()
        setShowActivating(false)
    }

    const onActivatingCompleted = (response) => {
        triggerClose()
        const { license_key: key, renew_date, license_data: data } = response
        dispatch(addLicense({ bible: { key, renew_date, data } }))
    }

    const onDeactivated = (response) => {
        const { license_key: key } = response
        dispatch(deleteLicense({ bible: { key } }))
        setShowDeactivated(false)
    }

    useEffect(() => {
        if (showActivatingPrepare) {
            setShowActivating(true)
        }
    }, [showActivatingPrepare])

    useEffect(() => {
        if (isDeactivated && !showDeactivated) {
            setShowDeactivated(true)
        }
    }, [isDeactivated])

    useEffect(() => {
        if (showDeactivated) {
            onDeactivated(deactivateResponse.data)
        }
    }, [showDeactivated])

    useEffect(() => {
        if (!show) {
            setShowDeactivated(false)
        }
    }, [show])

    return (
        <Components.ScreenOverlay
            show={show[0]}
            className={{
                root: 'z-10',
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
                                    <Components.ButtonSpinner className="mr-1" />
                                    Verifying...
                                </>
                            ) : showActivating ? (
                                <>
                                    <Components.ButtonSpinner className="mr-1" />
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
                                                activateResponse.data
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
                    {showDeactivated ? (
                        <FormTable.ResponseSuccessMsg label="Success">
                            You have deactivated the feature of Core
                        </FormTable.ResponseSuccessMsg>
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

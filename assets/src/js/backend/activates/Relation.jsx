import React, { useState, useEffect, memo } from 'react'
import { useDispatch } from 'react-redux'
import Countdown from 'react-countdown'
import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'

import RHEMA_LOCALIZE from 'RHEMA_LOCALIZE'
import { PRODUCT_SLUG_NAMES, ACTIVATING_COUNT_DOWN_TIME, IDENTITY_TYPE } from '@components/constants'
import * as FormTable from '@components/backend/form-table'
import * as Components from '@components/backend/components'
import * as FieldSchama from '@components/schema'
import { useActivateFeaturesMutation } from '@components/services'
import { addLicense } from '@components/backend/states/generalSlice'

export default memo(function Relation({ show, onClickClose }) {
    const dispatch = useDispatch()
    const formMethods = useForm({
        defaultValues: {
            email: RHEMA_LOCALIZE.WP_OPTIONS.ADMIN_EMAIL,
            identity_type: IDENTITY_TYPE,
            product_slug: PRODUCT_SLUG_NAMES.RELATION,
            username: RHEMA_LOCALIZE.WP_OPTIONS.HOST_DOMAIN,
        },
        resolver: joiResolver(FieldSchama.activateRhemeaFields),
    })
    const { register, formState, handleSubmit } = formMethods
    const { isSubmitting, errors } = formState
    const [activate, { data, error, isLoading }] = useActivateFeaturesMutation()

    const showExceptionMessage = !!error
    const showActivatingFeaturePrepare = data?.success || false

    const [showActivatingFeature, setShowActivatingFeature] = useState(showActivatingFeaturePrepare)

    const onSubmit = () => {}

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
            title="Activate Relation"
            onClickClose={triggerClose}
        >
            <div className="flex mb-3">
                <div className="w-full p-2 border-t border-b border-l-0 border-r-0 border-[#c3c4c7] border-solid">
                    <div className="mb-1">
                        <span className="inline-block bg-gray-300 p-4px mr-1 rounded font-medium">Feature</span>
                        Relation
                    </div>
                    <div className="mb-1">
                        <span className="inline-block bg-gray-300 p-4px mr-1 rounded font-medium">Prerequisite</span>
                        "Download to Host" feature is Activated
                    </div>
                    <div className="mb-1">
                        <span className="inline-block bg-gray-300 p-4px mr-1 rounded font-medium">Subscription period</span>
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
                    <p className="m-0 mb-2 max-w-200px text-xs">License key will be sent to this email, please confirm that you can receive.</p>
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
                        In the future, if you lose the License key, please use this field value as the username to log in to "logos.api"
                    </p>
                    <FormTable.FieldErrorMsg message={errors.username?.message} />
                </FormTable.ModalForm.FieldRow>
                <FormTable.ModalForm.FieldRow>
                    <input type="hidden" {...register('identity_type')} />
                    <FormTable.FieldErrorMsg message={errors.identity_type?.message} />
                </FormTable.ModalForm.FieldRow>
                <FormTable.ModalForm.FieldRow>
                    <input type="hidden" {...register('product_slug')} />
                    <FormTable.FieldErrorMsg message={errors.product_slug?.message} />
                </FormTable.ModalForm.FieldRow>
                <div className="flex">
                    <button
                        type="submit"
                        className="button button-primary flex items-center"
                        {...((isSubmitting || isLoading || showActivatingFeature) && {
                            disabled: 'disabled',
                        })}
                    >
                        {isSubmitting || isLoading ? (
                            <>
                                <Components.ButtonSpinner className="mr-1" />
                                Applying...
                            </>
                        ) : showActivatingFeature ? (
                            <>
                                <Components.ButtonSpinner className="mr-1" />
                                Activating...
                                <Countdown
                                    date={Date.now() + ACTIVATING_COUNT_DOWN_TIME}
                                    renderer={({ seconds, completed }) => {
                                        if (completed) {
                                            return null
                                        } else {
                                            return <span>({seconds})</span>
                                        }
                                    }}
                                    onComplete={() => {
                                        onActivatingCompleted(activateCoreResponse.data)
                                    }}
                                />
                            </>
                        ) : (
                            'Confirm'
                        )}
                    </button>
                    {showActivatingFeature && (
                        <FormTable.ResponseSuccessMsg label="Success">Your application has been approved, activating the feature</FormTable.ResponseSuccessMsg>
                    )}
                    {showExceptionMessage && (
                        <FormTable.ResponseErrorMsg
                            code={activateCoreResponse?.response.code || activateCoreError.status}
                            label={activateCoreResponse?.response.message || activateCoreError.data.code}
                        >
                            {activateCoreError?.data.message || 'There has been a critical error.'}
                        </FormTable.ResponseErrorMsg>
                    )}
                </div>
            </FormTable.ModalForm>
        </Components.ScreenOverlay>
    )
})
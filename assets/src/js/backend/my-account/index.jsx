import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import moment from 'moment/moment'
import { __ } from '@wordpress/i18n'
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    useReactTable,
} from '@tanstack/react-table'

import RHEMA_LOCALIZE from 'RHEMA_LOCALIZE'
import { UI_MESSAGE_MAPPING } from '@assets/js/constants'
import { capitalizeFirstLetter, localDateTime } from '@components/common'
import { useOrdersQuery } from '@components/services'
import { IDENTITY_TYPE } from '@components/constants'
import * as FormTable from '@components/backend/form-table'
import * as FieldSchama from '@components/schema'
import { deleteSigninToken } from '@components/backend/states/accountSlice'

export const LoginCard = ({
    className = '',
    onSubmitSigin,
    onClickForgotPw,
    onClickVerifyEmail,
    signinData,
}) => {
    const formMethods = useForm({
        defaultValues: {
            username: RHEMA_LOCALIZE.WP_OPTIONS.HOST_DOMAIN,
        },
        resolver: joiResolver(FieldSchama.signinLogosFields),
    })
    const { isSubmitting: isLogging, errors: loginErrors } =
        formMethods.formState

    const { signinResponse, signinError, isSigning } = signinData

    const showExceptionMessage =
        (!!signinResponse && !signinResponse?.success) || !!signinError

    const responseMessage = ((signinResponse, signinError) => {
        const code =
            signinResponse?.success === true
                ? 200
                : false || signinError?.status
        const label =
            signinResponse?.success === true
                ? 'Success'
                : false || signinError?.data.code || ''
        const message = /2[0-9][0-9]/.test(code)
            ? signinResponse?.data?.message || 'Signin success!'
            : signinError?.data?.message ||
              signinError?.data?.data?.message ||
              'There has been a critical error.'
        return {
            code,
            label,
            message,
        }
    })(signinResponse, signinError)

    const showSuccess = /2[0-9][0-9]/.test(responseMessage.code)

    const classNames = ['postbox mb-0 min-w-0', className]

    return (
        <div className={classNames.join(' ')}>
            <div className="postbox-header px-2 justify-center">
                <h2 className="text-14px py-3 m-0">
                    {UI_MESSAGE_MAPPING['my-account/signin-logos']}
                </h2>
            </div>
            <div className="inside pb-0">
                <p>{UI_MESSAGE_MAPPING['my-account/description']}</p>

                <FormTable.ModalForm
                    onSubmit={formMethods.handleSubmit(onSubmitSigin)}
                >
                    <FormTable.ModalForm.FieldRow label="Username">
                        <input
                            className="w-full"
                            type="text"
                            {...formMethods.register('username', {
                                required: true,
                            })}
                        />
                        <FormTable.FieldErrorMsg
                            message={loginErrors.username?.message}
                        />
                    </FormTable.ModalForm.FieldRow>
                    <FormTable.ModalForm.FieldRow label="Password">
                        <input
                            type="password"
                            className="w-full min-w-200px"
                            {...formMethods.register('password', {
                                required: true,
                            })}
                        />
                        <FormTable.FieldErrorMsg
                            message={loginErrors.password?.message}
                        />
                        <p className="m-0 mb-2 text-xs space-x-2">
                            <a
                                className="button button-link hover:bg-transparent"
                                onClick={onClickForgotPw}
                            >
                                {
                                    UI_MESSAGE_MAPPING[
                                        'my-account/forgot-password'
                                    ]
                                }
                            </a>
                            <a
                                className="button button-link hover:bg-transparent"
                                onClick={(e) => {
                                    e.preventDefault()
                                    onClickVerifyEmail()
                                }}
                            >
                                {UI_MESSAGE_MAPPING['my-account/verify-email']}
                            </a>
                        </p>
                    </FormTable.ModalForm.FieldRow>
                    <input
                        type="hidden"
                        {...formMethods.register('identity_type')}
                    />
                </FormTable.ModalForm>
            </div>
            <div className="p-1 flex items-center justify-between border-0 border-t border-[#c3c4c7] border-solid bg-[#f6f7f7]">
                <div className="flex grow">
                    <button
                        className={['button', 'button-primary'].join(' ')}
                        onClick={(e) => {
                            formMethods.handleSubmit(onSubmitSigin)(e)
                        }}
                        {...((isLogging || isSigning) && {
                            disabled: 'disabled',
                        })}
                    >
                        {!isLogging && !isSigning
                            ? UI_MESSAGE_MAPPING['my-account/signin']
                            : UI_MESSAGE_MAPPING['my-account/signing']}
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

export const VerifyEmailCard = ({
    className = '',
    onSubmitVerifyEmail,
    onClickBackToSignin,
    sendVerifyData,
}) => {
    const [showActiveCodeInput, toggleActiveCodeInput] = useState(false)
    const formMethods = useForm({
        defaultValues: {
            email: RHEMA_LOCALIZE.WP_OPTIONS.ADMIN_EMAIL,
            activation_key: ''
        },
        resolver: joiResolver(FieldSchama.verifyEmailLogosFields),
    })

    const {
        isSubmitting: isSendingVerifyEmail,
        errors: sendingVerifyEmailErrors,
    } = formMethods.formState

    const { sendVerifyResponse, sendVerifyError, isSendingVerify } =
        sendVerifyData

    const showExceptionMessage =
        (!!sendVerifyResponse && !sendVerifyResponse?.success) ||
        !!sendVerifyError

    const responseMessage = ((response, error) => {
        const code = response?.success === true ? 200 : false || error?.status
        const label =
            response?.success === true
                ? 'Success'
                : false || error?.data.code || ''
        const message = /2[0-9][0-9]/.test(code)
            ? response?.data?.message || 'Signin success!'
            : error?.data?.message ||
              error?.data?.data?.message ||
              'There has been a critical error.'
        return {
            code,
            label,
            message,
        }
    })(sendVerifyResponse, sendVerifyError)

    const showSuccess = /2[0-9][0-9]/.test(responseMessage.code)

    const classNames = ['postbox mb-0 min-w-0', className]

    return (
        <div className={classNames.join(' ')}>
            <div className="postbox-header px-2 justify-center">
                <h2 className="text-14px py-3 m-0">
                    {UI_MESSAGE_MAPPING['my-account/verify-email']}
                </h2>
            </div>
            <div className="inside pb-0">
                <p>
                    {UI_MESSAGE_MAPPING['my-account/verify-email-description']}
                </p>
                <FormTable.ModalForm
                    onSubmit={formMethods.handleSubmit(onSubmitVerifyEmail)}
                >
                    <FormTable.ModalForm.FieldRow label="Email">
                        <input
                            className="w-full"
                            type="text"
                            {...formMethods.register('email', {
                                required: true,
                            })}
                        />
                        {}
                        <FormTable.FieldErrorMsg
                            message={sendingVerifyEmailErrors.email?.message}
                        />
                        <p className="m-0 mb-2 text-xs space-x-2">
                            <a
                                className="button button-link hover:bg-transparent"
                                onClick={(e) => {
                                    e.preventDefault()
                                    console.log('back-to-signin')
                                    onClickBackToSignin()
                                }}
                            >
                                {
                                    UI_MESSAGE_MAPPING[
                                        'my-account/back-to-signin'
                                    ]
                                }
                            </a>
                        </p>
                    </FormTable.ModalForm.FieldRow>
                    <FormTable.ModalForm.FieldRow
                        className={[
                            ...(showActiveCodeInput ? [] : ['hidden']),
                        ].join(' ')}
                        label="Activation Key"
                    >
                        <input
                            className="w-full"
                            type="text"
                            {...formMethods.register('activation_key', {
                                required: false,
                            })}
                        />
                        <FormTable.FieldErrorMsg
                            message={sendingVerifyEmailErrors.activation_key?.message}
                        />
                    </FormTable.ModalForm.FieldRow>
                </FormTable.ModalForm>
            </div>
            <div className="p-1 flex items-center justify-between border-0 border-t border-[#c3c4c7] border-solid bg-[#f6f7f7]">
                <div className="flex grow space-x-2">
                    <button
                        className={['button', 'button-primary'].join(' ')}
                        onClick={(e) => {
                            formMethods.handleSubmit(onSubmitVerifyEmail)(e)
                        }}
                        {...((isSendingVerifyEmail || isSendingVerify) && {
                            disabled: 'disabled',
                        })}
                    >
                        {isSendingVerifyEmail
                            ? UI_MESSAGE_MAPPING[
                                  'my-account/sending-verify-email'
                              ]
                            : UI_MESSAGE_MAPPING[
                                  'my-account/send-verify-email'
                              ]}
                    </button>
                    <button
                        className={['button', 'button-secondnary'].join(' ')}
                        onClick={(e) => {
                            if (!showActiveCodeInput) {
                                toggleActiveCodeInput(true)
                                return
                            }
                            formMethods.handleSubmit(onSubmitVerifyEmail)(e)
                        }}
                        {...((isSendingVerifyEmail || isSendingVerify) && {
                            disabled: 'disabled',
                        })}
                    >
                        {isSendingVerifyEmail
                            ? UI_MESSAGE_MAPPING[
                                  'my-account/submit-verify-email'
                              ]
                            : UI_MESSAGE_MAPPING[
                                  'my-account/submitting-verify-email'
                              ]}
                    </button>
                    {showSuccess && (
                        <FormTable.ResponseSuccessMsg label="Success">
                            {responseMessage?.message}
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
    const dispatch = useDispatch()
    const columnHelper = createColumnHelper()

    const columns = [
        columnHelper.accessor('id', {
            header: () => 'ID',
            cell: (info) => info.getValue(),
        }),
        columnHelper.accessor('status', {
            header: () => 'Status',
            cell: (info) => capitalizeFirstLetter(info.getValue()),
        }),
        columnHelper.accessor('order_items', {
            header: () => 'Products',
            cell: (orderItems) => {
                return orderItems.getValue().map((orderItem) => {
                    return (
                        <div key={orderItem.id}>
                            <span className="block">
                                <span className="select-none after:content-[':'] mr-1">
                                    Name
                                </span>
                                <span>{orderItem.product.name}</span>
                            </span>
                            <div className="text-xs">
                                <span className="flex">
                                    <span className="select-none after:content-[':'] mr-1">
                                        License Key
                                    </span>
                                    <span className="max-w-xs overflow-hidden text-ellipsis">
                                        {orderItem.license_key.key}
                                    </span>
                                </span>
                                <span className="flex">
                                    <span className="select-none after:content-[':'] mr-1">
                                        Renew Date
                                    </span>
                                    <span className="select-none">
                                        {moment(
                                            orderItem.license_key.renew_date
                                        )
                                            .utcOffset(
                                                RHEMA_LOCALIZE.WP_OPTIONS
                                                    .TIME_ZONE || 0
                                            )
                                            .format('YYYY/MM/DD hh:mm:ss')}
                                    </span>
                                </span>
                            </div>
                        </div>
                    )
                })
            },
        }),
        columnHelper.accessor('total', {
            header: 'Total Amount',
        }),
        columnHelper.accessor('createdAt', {
            header: 'Order Date',
            cell: (info) => {
                return localDateTime(
                    moment,
                    info.getValue(),
                    RHEMA_LOCALIZE.WP_OPTIONS.TIME_ZONE
                )
            },
        }),
    ]
    const { data, error, isFetching } = useOrdersQuery()

    const showExceptionMessage = !!error
    const exceptionMessage = error?.data.message || 'Somthing wrong.'

    const table = useReactTable({
        data: data?.data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    })

    if (!isFetching && !showExceptionMessage) {
        table.getRowModel()
    }

    return (
        <div>
            <table className="wp-list-table widefat">
                <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th key={header.id}>
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                              header.column.columnDef.header,
                                              header.getContext()
                                          )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {isFetching ? (
                        <tr>
                            <td colSpan={columns.length}>Loading...</td>
                        </tr>
                    ) : showExceptionMessage ? (
                        <tr>
                            <td colSpan={columns.length}>
                                <div className="flex items-center">
                                    {exceptionMessage}
                                    <button
                                        className="button button-small ml-1"
                                        onClick={(e) => {
                                            dispatch(deleteSigninToken())
                                        }}
                                    >
                                        Signin
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ) : (
                        table.getRowModel().rows.map((row) => {
                            return (
                                <tr key={row.id}>
                                    {row.getVisibleCells().map((cell) => (
                                        <td key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            )
                        })
                    )}
                </tbody>
            </table>
            {!isFetching && !showExceptionMessage ? (
                <div className="mt-2 flex items-center gap-2">
                    <button
                        className="button"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        {'<'}
                    </button>
                    <button
                        className="button"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        {'>'}
                    </button>
                    <span className="flex items-center gap-1">
                        <div>Page</div>
                        <strong>
                            {table.getState().pagination.pageIndex + 1} of{' '}
                            {table.getPageCount()}
                        </strong>
                    </span>
                    <span className="flex items-center gap-1">
                        | Go to page:
                        <input
                            type="number"
                            defaultValue={
                                table.getState().pagination.pageIndex + 1
                            }
                            onChange={(e) => {
                                const page = e.target.value
                                    ? Number(e.target.value) - 1
                                    : 0
                                table.setPageIndex(page)
                            }}
                            className="border rounded w-16"
                        />
                    </span>
                    <select
                        value={table.getState().pagination.pageSize}
                        onChange={(e) => {
                            table.setPageSize(Number(e.target.value))
                        }}
                    >
                        {[10, 20, 30, 40, 50].map((pageSize) => (
                            <option key={pageSize} value={pageSize}>
                                Show {pageSize}
                            </option>
                        ))}
                    </select>
                </div>
            ) : null}
        </div>
    )
}

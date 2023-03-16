import React, { useState } from 'react'
import PropTypes from 'prop-types'
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
import { capitalizeFirstLetter, localDateTime } from '@components/common'
import { useOrdersQuery } from '@components/services'
import { IDENTITY_TYPE } from '@components/constants'
import * as FormTable from '@components/backend/form-table'
import * as FieldSchama from '@components/schema'

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

                <FormTable.ModalForm onSubmit={handleSubmit(onClickSigin)}>
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
                        {...((isSubmitting || isSigning) && {
                            disabled: 'disabled',
                        })}
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

    console.log(data, error, isFetching)
    const showExceptionMessage = !!error
    const exceptionMessage = error?.data?.data?.message || 'Somthing wrong.'

    const table = useReactTable({
        data: data?.data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    })

    if (!isFetching && !showExceptionMessage) {
        console.log(table.getRowModel())
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
                            <td colSpan={5}>Loading...</td>
                        </tr>
                    ) : showExceptionMessage ? (
                        <tr>
                            <td colSpan={5}>{exceptionMessage}</td>
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

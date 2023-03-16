import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import RHEMA_LOCALIZE from 'RHEMA_LOCALIZE'
import { retrieveLogosSignedToken } from '@components/common'
import {
    PRODUCT_SLUG_REST_NAME_MAP,
    PRODUCT_SLUGS,
} from '@components/constants'
import { retrieveChapterByParamString } from '@components/frontend/utilities'

const prepareHeaders = (headers) => {
    const nonce =
        RHEMA_LOCALIZE?.RHEMA_BACKEND?.NONCE ||
        RHEMA_LOCALIZE?.RHEMA_INITAIL_DATA?.NONCE

    if (nonce) {
        headers.set('X-WP-Nonce', nonce)
    }

    return headers
}

export const optionsApi = createApi({
    reducerPath: 'api.options',
    baseQuery: fetchBaseQuery({
        baseUrl: RHEMA_LOCALIZE.RHEMA_REST_ENDPOINTS.options,
        prepareHeaders,
    }),
    endpoints: (builder) => ({
        updateOptions: builder.mutation({
            query: (body) => {
                return {
                    method: 'POST',
                    body,
                }
            },
            transformResponse: (response) => {
                return response
            },
            transformErrorResponse: (response) => {
                return response
            },
        }),
    }),
})

export const { useUpdateOptionsMutation } = optionsApi

export const bibleApi = createApi({
    reducerPath: 'api.bible',
    baseQuery: fetchBaseQuery({
        baseUrl: RHEMA_LOCALIZE.RHEMA_REST_ENDPOINTS.bible,
        prepareHeaders,
    }),
    endpoints: (builder) => ({
        getBibleRaw: builder.query({
            query: ({ ranges = [], withPrevChapter, withNextChapter }) => {
                const withPrevChapterQueryString = withPrevChapter
                    ? '&with_prev_chapter=1'
                    : ''
                const withNextChapterQueryString = withNextChapter
                    ? '&with_next_chapter=1'
                    : ''
                return `${ranges.reduce((acc, range, index) => {
                    const joiner = index === 0 ? '?' : '&'
                    return `${acc}${joiner}range[]=${range}`
                }, '')}${withPrevChapterQueryString}${withNextChapterQueryString}`
            },
            transformResponse: (
                response,
                meta,
                { ranges, withPrevChapter, withNextChapter }
            ) => {
                const currentChapter = retrieveChapterByParamString(ranges[0])

                const converterFilter = (response, chapterNumber) => {
                    return response.filter(
                        (raw) => raw.chapter === chapterNumber
                    )
                }
                const returnConverted = {
                    ...(!!withPrevChapter && {
                        prev: converterFilter(response, currentChapter - 1),
                    }),
                    current: converterFilter(response, currentChapter),
                    ...(!!withNextChapter && {
                        next: converterFilter(response, currentChapter + 1),
                    }),
                }

                return returnConverted
            },
        }),
        searchBibleRaws: builder.query({
            query: ({ words }) => {
                return words
            },
            transformResponse: (response) => {
                return response
            },
            transformErrorResponse: (response) => {
                return response
            },
        }),
    }),
})

export const { useGetBibleRawQuery, useSearchBibleRawsQuery } = bibleApi

export const activateApi = createApi({
    reducerPath: 'api.activate',
    baseQuery: fetchBaseQuery({
        baseUrl: RHEMA_LOCALIZE.RHEMA_REST_ENDPOINTS.activate,
        prepareHeaders,
    }),
    endpoints: (builder) => ({
        activateCore: builder.mutation({
            query: (body) => {
                const { product_slug: productSlug } = body
                const restName = PRODUCT_SLUG_REST_NAME_MAP[productSlug]
                if (typeof restName === 'undefined' || !restName) {
                    throw new Error('Error in mutation.query')
                }

                return {
                    url: PRODUCT_SLUG_REST_NAME_MAP[productSlug],
                    method: 'POST',
                    body,
                }
            },
            transformResponse: (response) => {
                return response
            },
            transformErrorResponse: (response) => {
                return response
            },
        }),
        activateByLicense: builder.mutation({
            query: (body) => {
                const { product_slug: productSlug } = body
                if (typeof productSlug === 'undefined' || !productSlug) {
                    throw new Error('Error in mutation.query')
                }
                if (!PRODUCT_SLUGS.includes(productSlug)) {
                    throw new Error('Error in mutation.query')
                }
                return {
                    url: 'license',
                    method: 'POST',
                    body,
                }
            },
        }),
    }),
})

export const { useActivateCoreMutation, useActivateByLicenseMutation } =
    activateApi

export const deactivateApi = createApi({
    reducerPath: 'api.deactivate',
    baseQuery: fetchBaseQuery({
        baseUrl: RHEMA_LOCALIZE.RHEMA_REST_ENDPOINTS.deactivate,
        prepareHeaders,
    }),
    endpoints: (builder) => ({
        deactivate: builder.mutation({
            query: (body) => {
                const { product_slug, license } = body
                if (!PRODUCT_SLUGS.includes(product_slug)) {
                    throw new Error('Error in mutation.query')
                }
                return {
                    method: 'POST',
                    body: {
                        product_slug,
                        license,
                    },
                }
            },
            transformResponse: (response) => {
                console.log(response)
                return response
            },
            transformErrorResponse: (response) => {
                console.log(response)
                return response
            },
        }),
    }),
})

export const { useDeactivateMutation } = deactivateApi

export const signinApi = createApi({
    reducerPath: 'api.signin',
    baseQuery: fetchBaseQuery({
        baseUrl: RHEMA_LOCALIZE.RHEMA_REST_ENDPOINTS.account,
        prepareHeaders,
    }),
    endpoints: (builder) => ({
        signin: builder.mutation({
            query: (body) => {
                return {
                    url: 'signin',
                    method: 'POST',
                    body,
                }
            },
            transformResponse: (response) => {
                return response
            },
            transformErrorResponse: (response) => {
                return response
            },
        }),
    }),
})

export const { useSigninMutation } = signinApi

export const ordersApi = createApi({
    reducerPath: 'api.orders',
    baseQuery: fetchBaseQuery({
        baseUrl: RHEMA_LOCALIZE.RHEMA_REST_ENDPOINTS.orders,
        prepareHeaders: (headers) => {
            const nonce = RHEMA_LOCALIZE.RHEMA_BACKEND.NONCE

            if (nonce) {
                headers.set('X-WP-Nonce', nonce)
            }

            const token = retrieveLogosSignedToken(sessionStorage)

            if (token) {
                headers.set('Authorization', `Bearer ${token}`)
            }

            return headers
        },
    }),
    endpoints: (builder) => ({
        orders: builder.query({
            query: () => ({}),
            transformResponse: (response) => {
                return response
            },
            transformErrorResponse: (response) => {
                return response
            },
        }),
    }),
})

export const { useOrdersQuery } = ordersApi
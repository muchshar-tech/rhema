import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import shortHash from 'shorthash2'

import RHEMA_LOCALIZE from 'RHEMA_LOCALIZE'
import { retrieveLogosSignedToken } from '@components/common'
import {
    PRODUCT_SLUG_2_REST_NAME_MAP,
    PRODUCT_SLUGS,
} from '@components/constants'

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
                if (typeof ranges === 'string') {
                    ranges = [ranges]
                }
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
            transformErrorResponse: (response) => {
                console.log(response)
                return response
            },
        }),
    }),
})

export const { useGetBibleRawQuery, usePrefetch } = bibleApi

export const searchApi = createApi({
    reducerPath: 'api.search',
    baseQuery: fetchBaseQuery({
        baseUrl: RHEMA_LOCALIZE.RHEMA_REST_ENDPOINTS.bible,
        prepareHeaders,
    }),
    endpoints: (builder) => ({
        searchBibleRaws: builder.query({
            query: ({ words, paged = 1, size = 20 }) => {
                return `search?words=${words}&from=${(paged - 1) * size}`
            },
            serializeQueryArgs: ({ queryArgs, endpointName }) => {
                const { words } = queryArgs
                if (typeof words === 'undefined') {
                    return endpointName
                }
                const shortHashString = shortHash(words)
                return `${endpointName}_${shortHashString}`
            },
            merge: (currentCache, newItems) => {
                console.log('merge')
                const currentItems = currentCache.data.hits.hits
                const currentIds = currentItems.map((item) => {
                    return item._id
                })
                const newPushItems = newItems.data.hits.hits.filter((item) => {
                    return !currentIds.includes(item._id)
                })
                currentItems.push(...newPushItems)
            },
            transformResponse: (response) => {
                // console.log(response)
                return response
            },
            transformErrorResponse: (response) => {
                // console.log(response)
                return response
            },
            forceRefetch({ currentArg, previousArg }) {
                if (typeof previousArg === 'undefined') {
                    return true
                }
                if (currentArg?.words !== previousArg?.words) {
                    console.log(
                        'forceRefetch',
                        currentArg?.words !== previousArg?.words
                    )
                    return true
                }
                if (currentArg?.paged !== previousArg?.paged) {
                    return true
                }
                return false
            },
        }),
    }),
})

export const { useSearchBibleRawsQuery } = searchApi

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
                const restName = PRODUCT_SLUG_2_REST_NAME_MAP[productSlug]
                if (typeof restName === 'undefined' || !restName) {
                    throw new Error('Error in mutation.query')
                }

                return {
                    url: PRODUCT_SLUG_2_REST_NAME_MAP[productSlug],
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
        activateFeatures: builder.mutation({
            query: (body) => {
                const { product_slug: productSlug } = body
                const restName = PRODUCT_SLUG_2_REST_NAME_MAP[productSlug]
                if (typeof restName === 'undefined' || !restName) {
                    throw new Error('Error in mutation.query')
                }

                return {
                    url: PRODUCT_SLUG_2_REST_NAME_MAP[productSlug],
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

export const { useActivateCoreMutation, useActivateFeaturesMutation, useActivateByLicenseMutation } =
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

export const sendVerifyApi = createApi({
    reducerPath: 'api.sendverify',
    baseQuery: fetchBaseQuery({
        baseUrl: RHEMA_LOCALIZE.RHEMA_REST_ENDPOINTS.account,
        prepareHeaders,
    }),
    endpoints: (builder) => ({
        sendVerify: builder.mutation({
            query: (body) => {
                return {
                    url: 'verify',
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

export const { useSendVerifyMutation } = sendVerifyApi

export const sendForgotApi = createApi({
    reducerPath: 'api.sendforgot',
    baseQuery: fetchBaseQuery({
        baseUrl: RHEMA_LOCALIZE.RHEMA_REST_ENDPOINTS.account,
        prepareHeaders,
    }),
    endpoints: (builder) => ({
        sendForgot: builder.mutation({
            query: (body) => {
                return {
                    url: 'forgot',
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

export const { useSendForgotMutation } = sendForgotApi

export const ordersApi = createApi({
    reducerPath: 'api.orders',
    baseQuery: fetchBaseQuery({
        baseUrl: RHEMA_LOCALIZE.RHEMA_REST_ENDPOINTS.account,
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
            query: () => ({
                url: 'orders',
            }),
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

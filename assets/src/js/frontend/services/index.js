import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import RHEMA_LOCALIZE from 'RHEMA_LOCALIZE'
import { retrieveChapterByParamString } from '@components/frontend/utilities'

export const bibleApi = createApi({
    reducerPath: 'api.bible',
    baseQuery: fetchBaseQuery({
        baseUrl: RHEMA_LOCALIZE.RHEMA_REST_ENDPOINTS.bible,
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
    }),
})

export const { useGetBibleRawQuery } = bibleApi

import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import { UI_MESSAGE_MAPPING } from '@components/constants'
import * as Layout from '@components/frontend/layouts'
import * as Headers from '@components/frontend/headers'

import * as Books from '@components/frontend/books'
import * as Search from '@components/frontend/search'
import * as Forms from '@components/frontend/forms'
import { DrawerTitle } from '@components/frontend/components'
import { useGetBibleRawQuery } from '@components/services'
import {
    generateRestRangeParam,
    retrieveChapterByParamString,
    validIsQueryWholeChapter,
} from '@assets/js/frontend/utilities'
import { loadRaws } from '@assets/js/frontend/states/dataSlice'

export const Verses = () => {
    const dispatch = useDispatch()
    const stateData = useSelector((state) => state.data)
    const { isAfterReload, readingQuerys } = stateData
    const { chapterVerseInfo } = stateData.translation?.info
    const bookRaws = stateData.raws.filter((raw) => {
        return raw.book === Number(readingQuerys[0].book.index)
    })
    const selectedRaws = useSelector((state) => state.selected.raws)

    const isQueryWholeChapter = validIsQueryWholeChapter(
        readingQuerys,
        chapterVerseInfo
    )

    const urlParams = isAfterReload
        ? generateRestRangeParam(useParams())
        : [
              `${readingQuerys[0].book.slug}${readingQuerys[0].chapter}:${readingQuerys[0].verse}`,
          ]
    const currentChapter = retrieveChapterByParamString(urlParams[0])

    const { data, error, isFetching } = useGetBibleRawQuery({
        ranges: urlParams,
        withPrevChapter: isQueryWholeChapter,
        withNextChapter: isQueryWholeChapter,
    })

    useEffect(() => {
        if (data && Object.keys(data).length > 0) {
            dispatch(loadRaws(data.data))
        }
    }, [data])

    useEffect(() => {
        if (error && Object.keys(error).length > 0) {
            throw new Error(error.data.message)
        }
    }, [error])

    return (
        <Layout.AppContainer>
            <Layout.Top>
                <Headers.Main />
                <Headers.Books />
                <Headers.Selection />
            </Layout.Top>
            <Layout.Body>
                <Books.List />
                <Search.Results />
                <Layout.RawsContent
                    {...{
                        readingQuerys,
                        bookRaws,
                        chapterVerseInfo,
                        currentChapter,
                        selectedRaws,
                    }}
                />
                <Layout.Drawer name="new-post">
                    <Forms.Posts />
                </Layout.Drawer>
                <Layout.Drawer className="p-2" name="relative-posts">
                    <DrawerTitle>相關文章</DrawerTitle>
                </Layout.Drawer>
                <Layout.Drawer
                    className="p-2 content-start flex-wrap"
                    name="selected-raws"
                >
                    <DrawerTitle>
                        {UI_MESSAGE_MAPPING['selected-verses']}
                    </DrawerTitle>
                    <Layout.Drawer.SelectedRaw />
                </Layout.Drawer>
            </Layout.Body>
        </Layout.AppContainer>
    )
}

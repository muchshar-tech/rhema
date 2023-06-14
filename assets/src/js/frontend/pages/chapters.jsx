import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import * as Layout from '@components/frontend/layouts'
import * as Headers from '@components/frontend/headers'
import * as Books from '@components/frontend/books'
import * as Search from '@components/frontend/search'
import { useGetBibleRawQuery } from '@components/services'
import { switchHeadersBooks, currentSelection } from '@assets/js/frontend/states/generalSlice'
import {
    generateRestRangeParam,
    retrieveChapterByParamString,
    validIsQueryWholeChapter,
} from '@assets/js/frontend/utilities'
import { loadRaws } from '@assets/js/frontend/states/dataSlice'

export const Chapters = () => {
    const dispatch = useDispatch()
    const stateData = useSelector((state) => state.data)
    const booksDataSelector = [
        ...stateData.books.old,
        ...stateData.books.new
    ]
    const { isAfterReload, readingQuerys, translation } = stateData
    const { chapterVerseInfo } = translation?.info
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

    useEffect(() => {
        dispatch(
            currentSelection({
                books: booksDataSelector.filter((book) => {
                    return book.index === readingQuerys[0].book.index
                })[0],
            })
        )
        dispatch(switchHeadersBooks())
    }, [])
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
            </Layout.Body>
        </Layout.AppContainer>
    )
}

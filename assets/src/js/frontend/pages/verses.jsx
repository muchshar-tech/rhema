import React, { useState, useMemo, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { max, isEqual } from 'lodash'
import Skeleton from 'react-loading-skeleton'

import * as Layout from '@components/frontend/layouts'
import * as Headers from '@components/frontend/headers'
import * as Paragraph from '@components/frontend/paragraph'
import * as Books from '@components/frontend/books'
import * as Search from '@components/frontend/search'
import * as Forms from '@components/frontend/forms'
import { DrawerTitle } from '@components/frontend/components'
import { useGetBibleRawQuery, usePrefetch } from '@components/services'
import {
    generateRestRangeParam,
    retrieveChapterByParamString,
    validIsQueryWholeChapter,
} from '@assets/js/frontend/utilities'
import {
    loadRaws,
    updateReadingQuerys,
} from '@assets/js/frontend/states/dataSlice'

const Container = ({
    readingQuerys,
    bookRaws,
    chapterVerseInfo,
    currentChapter,
    selectedRaws,
}) => {
    console.log('run Container start ========================>', readingQuerys, currentChapter)
    const dispatch = useDispatch()
    const [chapterPaged, setChapterPaged] = useState(currentChapter)

    if (!chapterVerseInfo) {
        return null
    }

    const prefetchRaw = usePrefetch('getBibleRaw')

    const currentBookChaptersNumber = max(
        Object.keys(chapterVerseInfo[readingQuerys[0].book.index]).map((num) =>
            Number(num)
        )
    )

    const prepareChaptersSlot = new Array(currentBookChaptersNumber)
        .fill(null)
        .map((item, slotIdx) => {
            const slotChapterNumber = slotIdx + 1
            const fetchedChapterRaws = bookRaws.filter((raw) => {
                return raw.chapter === slotChapterNumber
            })
            if (fetchedChapterRaws.length > 0) {
                return fetchedChapterRaws
            }
            return {
                maxVerseNumber:
                    chapterVerseInfo[readingQuerys[0].book.index][
                        slotChapterNumber
                    ],
                chapterNumber: slotChapterNumber,
            }
        })

    const renderChapters = useMemo(() => {
        let returnChapters = (
            Array.isArray(prepareChaptersSlot)
                ? prepareChaptersSlot
                : [prepareChaptersSlot]
        ).filter((chapter, idx) => {
            const chapterPageNumber = idx + 1
            const pagesCount = prepareChaptersSlot.length || 0
            return (
                chapterPageNumber === chapterPaged ||
                chapterPageNumber ===
                    chapterPaged + (pagesCount > chapterPaged ? 1 : 0) ||
                chapterPageNumber === chapterPaged - (chapterPaged > 1 ? 1 : 0)
            )
        })
        let middleChapterIndex = returnChapters.findIndex(
            (raws) => Number(raws.chapter) === chapterPaged
        )
        /* let middleChapter = returnChapters[middleChapterIndex]
        returnChapters[0] = returnChapters[1]
        returnChapters[1] = middleChapter */
        return returnChapters.sort((a) => {
            console.log(a)
            const chapterNumber = Array.isArray(a)
                ? a[0]?.chapter
                : a.chapterNumber
            return chapterNumber >= middleChapterIndex ? 1 : -1
        })
    }, [bookRaws, chapterPaged])

    console.log(renderChapters)

    useEffect(() => {
        if (currentChapter !== chapterPaged) {
            console.log(
                'currentChapter !== chapterPaged',
                currentChapter !== chapterPaged
            )
            setChapterPaged(currentChapter)
        }
    }, [currentChapter])

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
                <Layout.Content
                    pagePosition={chapterPaged === 1 ? 'left' : chapterPaged > 1 && chapterPaged < currentBookChaptersNumber ? 'middle' : 'right'}
                    onMoveFirstPage={() => {
                        console.log('run onMoveFirstPage')
                        const newChapterPaged = chapterPaged - 1
                        prefetchRaw({
                            ranges: [
                                `${readingQuerys[0].book.slug}${newChapterPaged}:1`,
                            ],
                            withPrevChapter: true,
                            withNextChapter: true,
                        })
                    }}
                    onMoveLastPage={() => {
                        console.log('run onMoveLastPage')
                        const newChapterPaged = chapterPaged + 1
                        prefetchRaw({
                            ranges: [
                                `${readingQuerys[0].book.slug}${newChapterPaged}:1`,
                            ],
                            withPrevChapter: true,
                            withNextChapter: true,
                        })
                    }}
                    onCompletedMove={(pagePos) => {
                        console.log('run onCompletedMove', pagePos)
                        const newChapterPaged =
                            pagePos > 1 ? chapterPaged + 1 : chapterPaged > 1 ? chapterPaged - 1 : chapterPaged
                        const newReadingQuerys = [
                            {
                                book: { ...readingQuerys[0].book },
                                chapter: newChapterPaged,
                                verse: 1,
                            },
                            {
                                book: { ...readingQuerys[1].book },
                                chapter: newChapterPaged,
                                verse: chapterVerseInfo[
                                    readingQuerys[0].book.index
                                ][newChapterPaged],
                            },
                        ]
                        setChapterPaged(newChapterPaged)
                        dispatch(updateReadingQuerys(newReadingQuerys))
                    }}
                >
                    {renderChapters.map((raws, idx) => {
                        const pageIdx = idx + 1
                        const isWaitingLoading =
                            raws.length === 0 ||
                            !Array.isArray ||
                            raws.maxVerseNumber
                        return (
                            <Layout.Page key={pageIdx}>
                                <Paragraph.Block>
                                    {isWaitingLoading ? (
                                        <Skeleton
                                            inline={true}
                                            count={raws.maxVerseNumber}
                                        />
                                    ) : (
                                        raws.map((raw) => (
                                            <Paragraph.Line
                                                active={selectedRaws.some(
                                                    (selectedRaw) =>
                                                        selectedRaw.id ===
                                                        raw.id
                                                )}
                                                id={raw.id}
                                                key={raw.id}
                                                verseNum={raw.verse}
                                            >
                                                {raw.text}
                                            </Paragraph.Line>
                                        ))
                                    )}
                                </Paragraph.Block>
                            </Layout.Page>
                        )
                    })}
                </Layout.Content>
                <Layout.Drawer name="new-post">
                    <Forms.Posts />
                </Layout.Drawer>
                <Layout.Drawer className="p-2" name="relative-posts">
                    <DrawerTitle>此段聖經相關文章</DrawerTitle>
                </Layout.Drawer>
                <Layout.Drawer
                    className="p-2 content-start flex-wrap"
                    name="selected-raws"
                >
                    <DrawerTitle>已選擇的經文</DrawerTitle>
                    <Layout.Drawer.SelectedRaw />
                </Layout.Drawer>
            </Layout.Body>
        </Layout.AppContainer>
    )
}
const MemoContainer = React.memo(Container, (prev, next) => {
    console.log('run MemoContainer =>>>>')
    if (!isEqual(prev.chapterVerseInfo, next.chapterVerseInfo)) {
        console.log(
            'chapterVerseInfo',
            !isEqual(prev.chapterVerseInfo, next.chapterVerseInfo)
        )
        return false
    }
    if (!isEqual(prev.currentChapter, next.currentChapter)) {
        console.log(
            'currentChapter',
            !isEqual(prev.currentChapter, next.currentChapter)
        )
        return false
    }
    if (!isEqual(prev.readingQuerys, next.readingQuerys)) {
        console.log(
            'readingQuerys',
            !isEqual(prev.readingQuerys, next.readingQuerys)
        )
        return false
    }
    if (!isEqual(prev.bookRaws, next.bookRaws)) {
        console.log('bookRaws', !isEqual(prev.bookRaws, next.bookRaws))
        return false
    }
    if (!isEqual(prev.selectedRaws, next.selectedRaws)) {
        console.log(
            'selectedRaws',
            !isEqual(prev.selectedRaws, next.selectedRaws)
        )
        return false
    }

    return true
})

export const Verses = () => {
    const dispatch = useDispatch()
    const isAfterReload = useSelector((state) => state.data.isAfterReload)
    const readingQuerys = useSelector((state) => state.data.readingQuerys)
    const bookRaws = useSelector((state) => {
        return state.data.raws.filter((raw) => {
            return raw.book === Number(readingQuerys[0].book.index)
        })
    })
    const { chapterVerseInfo } = useSelector(
        (state) => state.data.translation?.info
    )
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
        <MemoContainer
            {...{
                readingQuerys,
                bookRaws,
                chapterVerseInfo,
                currentChapter,
                selectedRaws,
                isFetching,
            }}
        />
    )
}

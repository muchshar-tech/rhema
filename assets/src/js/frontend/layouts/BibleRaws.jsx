import React, { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { max } from 'lodash'
import Skeleton from 'react-loading-skeleton'

import * as Paragraph from '@components/frontend/paragraph'
import { Page } from '@assets/js/frontend/layouts'
import Content from '@assets/js/frontend/layouts/Content'
import {
    onSwipMoveChapterPage,
    onCompletedSwipMoveChapter,
    retrieveBookIndexBySlug,
} from '@components/frontend/utilities'

const BibleRaws = ({
    currentSelection,
    readingQuerys,
    bookRaws,
    chapterVerseInfo,
    selectedRaws,
}) => {
    const chapterPaged = parseInt(readingQuerys[0].chapter)
    let currentBookIndex = readingQuerys[0]?.book?.index
    if (!currentBookIndex) {
        const { books1: bookSlugOfParam } = useParams()
        currentBookIndex = retrieveBookIndexBySlug(bookSlugOfParam)
    }

    if (!chapterVerseInfo) {
        return null
    }

    const maxChapterNumberOfCurrentBook = max(
        Object.keys(chapterVerseInfo[currentBookIndex]).map((num) =>
            Number(num)
        )
    )

    const prepareChaptersSlot = new Array(maxChapterNumberOfCurrentBook)
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
                    chapterVerseInfo[currentBookIndex][slotChapterNumber],
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
        return returnChapters.sort((a) => {
            const chapterNumber = Array.isArray(a)
                ? a[0]?.chapter
                : a.chapterNumber
            return chapterNumber >= middleChapterIndex ? 1 : -1
        })
    }, [bookRaws, chapterPaged])

    return (
        <Content
            pagePosition={
                chapterPaged === 1
                    ? 'left'
                    : chapterPaged > 1 &&
                      chapterPaged < maxChapterNumberOfCurrentBook
                    ? 'middle'
                    : 'right'
            }
            currentBookMaxChapter={maxChapterNumberOfCurrentBook}
            currentChapter={chapterPaged}
            onMoveFirstPage={onSwipMoveChapterPage.bind(this, chapterPaged, -1)}
            onMoveLastPage={onSwipMoveChapterPage.bind(this, chapterPaged, 1)}
            onCompletedMove={onCompletedSwipMoveChapter.bind(this, {
                currentBookIndex,
                chapterPaged,
                readingQuerys,
            })}
        >
            {renderChapters.map((raws) => {
                const pageIdx = raws?.chapterNumber || raws[0].chapter
                const isWaitingLoading =
                    raws.length === 0 || !Array.isArray || raws.maxVerseNumber
                return (
                    <Page key={pageIdx}>
                        <Paragraph.Block>
                            {isWaitingLoading ? (
                                <Skeleton
                                    inline={true}
                                    count={raws.maxVerseNumber}
                                />
                            ) : (
                                raws.map((raw) => {
                                    const shouldPicked =
                                        !!currentSelection &&
                                        currentSelection?.chapters ===
                                            raw.chapter &&
                                        currentSelection?.verses === raw.verse
                                    return (
                                        <Paragraph.Line
                                            picked={shouldPicked}
                                            active={selectedRaws.some(
                                                (selectedRaw) =>
                                                    selectedRaw.id === raw.id
                                            )}
                                            id={raw.id}
                                            key={raw.id}
                                            verseNum={raw.verse}
                                        >
                                            {raw.text}
                                        </Paragraph.Line>
                                    )
                                })
                            )}
                        </Paragraph.Block>
                    </Page>
                )
            })}
        </Content>
    )
}

export default BibleRaws

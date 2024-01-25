import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { max } from 'lodash'
import { Button } from '@wordpress/components'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import * as Layout from '@components/frontend/layouts'
import * as Tools from '@components/frontend/tools'
import {
    onSwipMoveChapterPage,
    onCompletedSwipMoveChapter,
    generateVerseUrl,
} from '@components/frontend/utilities'

const Main = ({ className }) => {
    const stateData = useSelector((state) => state.data)
    const showConfirm = useSelector(
        (state) => state.general.footerSwitch.main.confirmSelection
    )
    const { pagePos } = useSelector((state) => state.general.pageSwipper)
    const { readingQuerys } = stateData
    const { chapterVerseInfo } = stateData.translation?.info

    const classNames = ['justify-between', className].join(' ')
    const currentBookIndex = readingQuerys[0]?.book?.index
    const chapterPaged = parseInt(readingQuerys[0].chapter)

    const maxChapterNumberOfCurrentBook = max(
        Object.keys(chapterVerseInfo[currentBookIndex]).map((num) =>
            Number(num)
        )
    )

    const onMoveFirstPage = onSwipMoveChapterPage.bind(this, chapterPaged, -1)
    const onMoveLastPage = onSwipMoveChapterPage.bind(this, chapterPaged, 1)

    return (
        <Layout.Top.Row className={classNames}>
            <Layout.Top.LeftSide>
                <Tools.Borderless
                    label="Prev Chapter"
                    disabled={chapterPaged <= 1}
                    onClick={() => {
                        onMoveFirstPage()
                        onCompletedSwipMoveChapter(
                            {
                                currentBookIndex,
                                chapterPaged,
                                readingQuerys,
                            },
                            -1,
                            pagePos,
                            true
                        )
                    }}
                >
                    <FiChevronLeft
                        {...{
                            ...(chapterPaged <= 1 ? { color: '#6b7280' } : {}),
                        }}
                    />
                </Tools.Borderless>
                <Tools.Borderless
                    label="Next Chapter"
                    disabled={chapterPaged >= maxChapterNumberOfCurrentBook}
                    onClick={() => {
                        onMoveLastPage()
                        onCompletedSwipMoveChapter(
                            {
                                currentBookIndex,
                                chapterPaged,
                                readingQuerys,
                            },
                            1,
                            pagePos,
                            true
                        )
                    }}
                >
                    <FiChevronRight
                        {...{
                            ...(chapterPaged >= maxChapterNumberOfCurrentBook
                                ? { color: '#6b7280' }
                                : {}),
                        }}
                    />
                </Tools.Borderless>
            </Layout.Top.LeftSide>
            <Layout.Top.RightSide>
                {showConfirm ? (
                    <Button variant="primary">Confirm</Button>
                ) : null}
            </Layout.Top.RightSide>
        </Layout.Top.Row>
    )
}

export { Main }

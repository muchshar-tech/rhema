import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import {
    generateVerseUrl,
    generateRandomlyChapter,
} from '@assets/js/frontend/utilities'
import * as Layout from '@components/frontend/layouts'
import * as Headers from '@components/frontend/headers'
import * as Paragraph from '@components/frontend/paragraph'
import * as Books from '@components/frontend/books'
import * as Search from '@components/frontend/search'
import { updateReadingQuerys } from '@assets/js/frontend/states/dataSlice'

const Container = ({}) => {
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
                HOME
            </Layout.Body>
        </Layout.AppContainer>
    )
}

const MemoContainer = React.memo(Container, (prev, next) => {
    return true
})

export const Home = () => {
    return <MemoContainer />
}

export const RandomlyChapter = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const chapterVerseInfo = useSelector(
        (state) => state.data.translation.info.chapterVerseInfo
    )
    const randomlyChapter = generateRandomlyChapter()
    const currentBookIndex = randomlyChapter.book.index
    const newReadingQuerys = [
        {
            book: { ...randomlyChapter.book },
            chapter: randomlyChapter.chapter,
            verse: 1,
        },
        {
            book: { ...randomlyChapter.book },
            chapter: randomlyChapter.chapter,
            verse: chapterVerseInfo[currentBookIndex][randomlyChapter.chapter],
        },
    ]

    useEffect(() => {
        dispatch(updateReadingQuerys(newReadingQuerys))
        navigate(
            generateVerseUrl(
                randomlyChapter.book.slug,
                randomlyChapter.chapter,
                1
            )
        )
    }, [])
    return null
}

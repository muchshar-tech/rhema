import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { motion } from 'framer-motion'

import {
    booksSelectorBooks,
    booksSelectorChapters,
    booksSelectorVerses,
} from '@assets/js/frontend/states/generalSlice'
import * as Layout from '@components/frontend/layouts'

const Tab = ({ isActive, onClick, children }) => {
    const underlineClassNames = [
        "after:content-['']",
        'after:block',
        'after:h-2px',
        'after:w-full',
        'after:absolute',
        'after:-bottom-px',
        'after:left-0',
        'after:bg-red-600',
    ]
    const classNames = [
        'relative',
        'px-12px',
        'py-8px',
        ...(isActive ? underlineClassNames : []),
        'cursor-pointer'
    ].join(' ')
    return (
        <div className={classNames} onClick={onClick}>
            {children}
        </div>
    )
}

const BookTab = () => {
    const showBooksSelector = useSelector(
        (state) => state.general.booksSelector.toggle
    )
    const triggerTabs = useSelector((state) => ({
        books: state.general.booksSelector.books,
        chapters: state.general.booksSelector.chapters,
        verses: state.general.booksSelector.verses,
    }))
    const classNames = [
        'border-t',
        ...(showBooksSelector ? ['flex'] : ['hidden']),
        'justify-around',
    ].join(' ')

    const dispatch = useDispatch()
    const onClickTabBook = () => dispatch(booksSelectorBooks())
    const onClickTabChapter = () => dispatch(booksSelectorChapters())
    const onClickTabVerse = () => dispatch(booksSelectorVerses())

    return (
        <Layout.Top.Row className={classNames}>
            <Tab isActive={triggerTabs.books} onClick={onClickTabBook}>
                Book
            </Tab>
            <Tab isActive={triggerTabs.chapters} onClick={onClickTabChapter}>
                Chapter
            </Tab>
            <Tab isActive={triggerTabs.verses} onClick={onClickTabVerse}>
                Verse
            </Tab>
        </Layout.Top.Row>
    )
}

export { BookTab }

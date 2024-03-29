import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { UI_MESSAGE_MAPPING } from '@components/constants'
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
        'cursor-pointer',
    ].join(' ')
    return (
        <div className={classNames} onClick={onClick}>
            {children}
        </div>
    )
}

const BookTab = ({ classname: extraClassName = '' }) => {
    const triggerTabs = useSelector((state) => state.general.booksSelector)
    const classNames = [
        'border-t',
        'justify-around',
        ...extraClassName.split(' '),
    ].join(' ')

    const dispatch = useDispatch()
    const onClickTabBook = () => dispatch(booksSelectorBooks())
    const onClickTabChapter = () => dispatch(booksSelectorChapters())
    const onClickTabVerse = () => dispatch(booksSelectorVerses())

    return (
        <Layout.Top.Row className={classNames}>
            <Tab isActive={triggerTabs.books} onClick={onClickTabBook}>
                {UI_MESSAGE_MAPPING['bible-directory/book']}
            </Tab>
            <Tab isActive={triggerTabs.chapters} onClick={onClickTabChapter}>
                {UI_MESSAGE_MAPPING['bible-directory/chapter']}
            </Tab>
            <Tab isActive={triggerTabs.verses} onClick={onClickTabVerse}>
                {UI_MESSAGE_MAPPING['bible-directory/verse']}
            </Tab>
        </Layout.Top.Row>
    )
}

export { BookTab }

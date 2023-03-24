import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Ripples from 'react-ripples'
import Highlighter from 'react-highlight-words'

import { generateVerseUrl } from '@assets/js/frontend/utilities'

export const Button = ({ onClick, children }) => {
    return (
        <Ripples
            {...{
                ...(onClick && { onClick }),
            }}
        >
            <div className="flex cursor-pointer items-center leading-18px text-base md:text-lg md:leading-22px justify-center overflow-hidden bg-white border border-gray-300 rounded-sm w-72px md:w-80px py-5px md:py-8px">
                {children}
            </div>
        </Ripples>
    )
}

export const StringLabel = ({ className, children }) => {
    const classNames = ['inline-block', 'text-sm', className].join(' ')
    return <span className={classNames}>{children}</span>
}

export const DrawerTitle = ({ children }) => {
    return <h3>{children}</h3>
}

export const LinkVerse = ({ book, chapter, number, onClick }) => {
    const booksData = useSelector((state) => [
        ...state.data.books.old,
        ...state.data.books.new,
    ])
    const slug = booksData[book - 1].slug
    return (
        <Link
            onClick={onClick}
            className={`flex w-full h-full justify-center items-center px-3 font-medium text-gray-900 group-hover:text-rose-600`}
            to={generateVerseUrl(slug, chapter, number)}
        >
            {number.toString()}
        </Link>
    )
}

LinkVerse.propTypes = {
    book: PropTypes.number,
    chapter: PropTypes.number,
    number: PropTypes.number,
}

export const Line = ({
    bookAbbr,
    chapterNum,
    verseNum,
    className,
    children,
}) => {
    const booksDataSelector = useSelector((state) => [
        ...state.data.books.old,
        ...state.data.books.new,
    ])
    const currentKeywords = useSelector(
        (state) => state.general.searchKeywords.current
    )

    const classNames = [
        'flex',
        'before:whitespace-nowrap',
        'before:p-3px',
        'before:mt-5px',
        'before:content-[attr(data-book-abbr)_"_"attr(data-chapter-num)":"_attr(data-verse-num)]',
        'before:text-12px',
        'before:inline-flex',
        'before:items-start	',
        'before:justify-center',
        'before:text-center',
        'before:align-text-top',
        'before:text-gray-400',
        'before:leading-none',
        'before:decoration-sky-500',
        className,
    ].join(' ')

    const bookAbbrString = booksDataSelector[bookAbbr - 1].abbr
    return (
        <span
            {...(bookAbbr
                ? {
                      'data-book-abbr': bookAbbrString,
                  }
                : {})}
            {...(chapterNum
                ? {
                      'data-chapter-num': chapterNum,
                  }
                : {})}
            {...(verseNum
                ? {
                      'data-verse-num': verseNum,
                  }
                : {})}
            className={classNames}
        >
            <Highlighter
                highlightClassName="text-rose-600"
                searchWords={currentKeywords.split(' ')}
                autoEscape={true}
                textToHighlight={children}
            />
        </span>
    )
}

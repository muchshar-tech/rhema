import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { generateVerseUrl } from '@assets/js/frontend/utilities'

export const DrawerTitle = ({ children }) => {
    return <h3>{children}</h3>
}

export const LinkVerse = ({ book, chapter, number }) => {
    const booksData = useSelector((state) => [
        ...state.data.books.old,
        ...state.data.books.new,
    ])
    const bookAbbr = booksData[book - 1].abbr.replace('.', '').toLowerCase()
    return (
        <Link
            className={`block w-full px-3 font-medium text-gray-900 group-hover:text-rose-600`}
            to={generateVerseUrl(bookAbbr, chapter, number)}
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

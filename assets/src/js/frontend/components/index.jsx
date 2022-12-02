import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { generateVerseUrl } from '@assets/js/frontend/utilities'

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

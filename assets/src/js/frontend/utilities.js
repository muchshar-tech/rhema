import isempty from 'lodash/isEmpty'
import { generatePath } from 'react-router-dom'
import { max } from 'lodash'

import { store } from '@assets/js/frontend/store'
import { clickBookSelector } from '@assets/js/frontend/states/generalSlice'
import { updateReadingQuerys } from '@assets/js/frontend/states/dataSlice'

/**
 * 將相同的書、章的字串縮短
 * @param array queryString
 * @returns string
 */
export const queryStringModifier = (queryString = []) => {
    if (isempty(queryString)) {
        return ['聖經目錄']
    }
    if (queryString.length < 2) {
        return ['']
    }
    const rangeFrom = queryString[0]
    const rangeTo = queryString[1] ? queryString[1] : queryString[0]
    const isSameBook = rangeFrom.book.name === rangeTo.book.name
    const isSameChapter = rangeFrom.chapter === rangeTo.chapter
    let returnQueryString = [
        `${rangeFrom.book.name} ${rangeFrom.chapter}:${rangeFrom.verse}`,
    ]
    if (!!rangeTo && !!rangeTo.book && rangeTo.chapter && rangeTo.verse) {
        returnQueryString[0] += `-${isSameBook ? '' : rangeTo.book.name + ' '}${isSameChapter ? '' : rangeTo.chapter + ':'
            }${rangeTo.verse}`
    }
    return returnQueryString
}

export const generateVerseUrl = (bookAbbr, chapter, number) => {
    return generatePath('/bible/:books/:verse', {
        books: bookAbbr,
        verse: `${chapter}:${number}`,
    })
}

export const generateRestRangeParam = ({ books1, verse1, books2, verse2 }) => {
    const range =
        books2 && verse2
            ? [`${books1}${verse1}`, `${books2}${verse2}`]
            : [`${books1}${verse1}`]
    return range
}

export const retrieveChapterByParamString = (paramString) => {
    const matched = paramString.match(/[0-9]?[a-z]+(\d{0,3}):?(\d{0,3})/i)
    return Number(matched[1])
}

export const retrieveBookIndexBySlug = (slug) => {
    const { getState } = store
    const { data } = getState()
    const bookData = [...data.books.old, ...data.books.new]
    const bookFiltered = bookData.filter((book) => book.slug === slug)
    if (bookFiltered.length === 0) {
        return new Error(`Can not find book by slug: ${slug}`)
    }
    const bookIndex = bookFiltered[0].index
    return bookIndex
}

export const validIsQueryWholeChapter = (querys, chapterVerseInfo) => {
    if (!chapterVerseInfo) {
        return new Error(`Parma chapterVerseInfo is must needed.`)
    }
    if (!Array.isArray(querys) || querys.length === 0) {
        return new Error(`Parma querys length equal 0.`)
    }
    if (querys.length > 2) {
        return new Error(`Parma querys length should be less then 2.`)
    }
    if (querys.length === 1) {
        return true
    }
    if (querys[0].book.index !== querys[1].book.index) {
        return false
    }
    if (Number(querys[0].chapter) !== Number(querys[1].chapter)) {
        return false
    }
    if (Number(querys[0].verse) !== 1) {
        return false
    }
    const maxVerseNumber =
        chapterVerseInfo[querys[0].book.index][querys[0].chapter]
    if (Number(querys[1].verse) !== maxVerseNumber) {
        return false
    }
    return true
}

export const generateRandomlyChapter = (assignSchema) => {
    const { getState } = store
    const { data } = getState()
    let schema = assignSchema
    if (!Array.isArray(schema) || schema.length === 0) {
        schema = ['book', 'chapter', 'verse']
    }
    const bookData = [...data.books.old, ...data.books.new]
    const bookIndexRandomly = Math.round(Math.random() * bookData.length)
    const maxChapterNumberOfCurrentBook = bookData[bookIndexRandomly].chapters
    const chapterIndexRandomly = Math.floor(Math.random() * maxChapterNumberOfCurrentBook) + 1 
    console.log(bookData, bookIndexRandomly, maxChapterNumberOfCurrentBook, chapterIndexRandomly)
    return {
        book: bookData[bookIndexRandomly],
        chapter: chapterIndexRandomly,
        verse: 1,
    }
}

export const onClickVerse = async function ({
    book: bookIndex,
    chapter,
    verse,
    maxVerseNumberOfChapter,
}) {
    const { dispatch, getState } = store
    const { data } = getState()
    let maxVerseNumber = maxVerseNumberOfChapter
    if (!maxVerseNumber) {
        const { chapterVerseInfo } = data.translation.info
        maxVerseNumber = chapterVerseInfo[bookIndex][chapter]
    }
    const bookData = [...data.books.old, ...data.books.new]
    const book = bookData[bookIndex - 1]
    const prepareQueryString = [
        { book, chapter, verse: 1 },
        { book, chapter, verse: maxVerseNumber },
    ]
    await dispatch(updateReadingQuerys(prepareQueryString))
    await dispatch(
        clickBookSelector({
            verses: Number(verse),
        })
    )
}
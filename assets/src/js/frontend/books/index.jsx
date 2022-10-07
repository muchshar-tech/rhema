import React from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'

import { LinkVerse } from '@assets/js/frontend/components'
import { currentSelection } from '@assets/js/frontend/states/generalSlice'
import { updateQueryString } from '@assets/js/frontend/states/dataSlice'

const Block = ({
    onClick,
    className: extraClassName = '',
    title,
    desc,
    selected,
    size = 'medium',
    children,
}) => {
    const hasTitle = !!title && typeof title === 'string' && title.length > 0
    const hasDesc = !!desc && typeof desc === 'string' && desc.length > 0
    const sizeIsVaild = ['small', 'medium', 'large'].some(
        (correctlySize) => correctlySize === size
    )
    if (!sizeIsVaild) {
        throw new Error('Component `Block` size of param are invaild.')
    }
    const Title = hasTitle ? (
        <span
            className={`block w-full px-3 font-medium text-gray-900 group-hover:text-rose-600 ${
                selected ? 'text-rose-600' : ''
            }`}
        >
            {title}
        </span>
    ) : null
    const Desc = hasDesc ? (
        <small
            className={`px-3 text-gray-600 group-hover:text-rose-600 group-selected:text-rose-600 ${
                selected ? 'text-rose-600' : ''
            }`}
        >
            {desc}
        </small>
    ) : null
    const classNames = [
        'border',
        'bg-white',
        'flex',
        'flex-wrap',
        'items-center',
        ...(size === 'small'
            ? [
                  'w-1/6',
                  'xs:w-1/8',
                  'md:w-1/12',
                  'lg:w-1/24',
                  'every-6:border-r-0',
                  'xs:every-6:border-r',
                  'only-xs:every-8:border-r',
                  'only-md:every-12:border-r',
                  'only-lg:every-24:border-r',
              ]
            : []),
        ...(size === 'medium'
            ? [
                  'w-1/4',
                  'xs:w-1/6',
                  'md:w-1/8',
                  'lg:w-1/12',
                  'every-4:border-r-0',
                  'xs:every-4:border-r',
                  'only-xs:every-6:border-r',
                  'only-md:every-8:border-r',
                  'only-lg:every-12:border-r',
              ]
            : []),
        'border-t-0',
        'border-l-0',
        'aspect-square',
        'content-center',
        'group',
        'hover:bg-gray-100',
        'cursor-pointer',
        selected ? 'bg-gray-100' : '',
        ...extraClassName.split(' '),
    ].join(' ')
    return (
        <li className={classNames} onClick={onClick}>
            {children ? children : Title}
            {children ? null : Desc}
        </li>
    )
}

Block.propTypes = {
    onClick: PropTypes.func,
    className: PropTypes.string,
    title: PropTypes.string,
    desc: PropTypes.string,
    selected: PropTypes.bool,
    size: PropTypes.string,
    children: PropTypes.element,
}

const BlockWrap = ({ className: extraClassname = '', children }) => {
    return (
        <ul className={['flex flex-auto flex-wrap', extraClassname].join(' ')}>
            {children}
        </ul>
    )
}

BlockWrap.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element),
    ]),
}

const Container = ({ className: extraClassname = '', toggle, children }) => {
    const classNames = [
        toggle ? 'flex' : 'hidden',
        'flex-wrap',
        ...extraClassname.split(' '),
    ].join(' ')
    return <div className={classNames}>{children}</div>
}

Container.propTypes = {
    className: PropTypes.string,
    toggle: PropTypes.bool,
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element),
    ]),
}

const List = () => {
    const showBooksSelector = useSelector(
        (state) => state.general.headersSwitch.books
    )
    const booksDataSelector = useSelector((state) => state.data.books)
    const classNames = [
        ...(showBooksSelector ? ['flex'] : ['hidden']),
        'flex-auto',
        'bg-white',
        'overflow-y-auto',
    ].join(' ')
    return (
        <div className={classNames}>
            <Books {...{ booksData: booksDataSelector }} />
            <Chapters />
            <Verses />
        </div>
    )
}

const Books = ({ booksData }) => {
    const dispatch = useDispatch()
    const toggleBooks = useSelector(
        (state) => state.general.booksSelector.books
    )
    const booksDataSelector = useSelector((state) => [
        ...state.data.books.old,
        ...state.data.books.new,
    ])
    const currentQueryString = useSelector((state) => state.data.queryString)
    const currentSelectionSelector = useSelector(
        (state) => state.general.currentSelection
    )
    const onClickBlock = function (bookIndex) {
        console.log(bookIndex)
        dispatch(
            currentSelection({
                books: booksDataSelector.filter((book) => {
                    return book.index === bookIndex
                })[0],
            })
        )
    }
    return (
        <Container toggle={toggleBooks}>
            <div className="w-full text-sm p-3 bg-gray-200 text-gray-500">
                舊約
            </div>
            <BlockWrap className="bg-gray-200">
                {booksData.old.map(({ abbr, name, index }, idx) => {
                    const isSomeInCurrentQuery = currentQueryString.filter(
                        (query) => query.book.name === name
                    )[0]
                    const isCurrentSelection =
                        currentSelectionSelector.books.index === index
                    const classNames = [
                        isSomeInCurrentQuery ? 'bg-gray-100' : '',
                    ]
                    return (
                        <Block
                            className={classNames.join(' ')}
                            onClick={onClickBlock.bind(this, index)}
                            key={idx}
                            {...{
                                title: abbr,
                                desc: name,
                                selected: isCurrentSelection,
                            }}
                        />
                    )
                })}
            </BlockWrap>
            <div className="w-full text-sm p-3 bg-gray-200 text-gray-500">
                新約
            </div>
            <BlockWrap className="bg-gray-200">
                {booksData.new.map(({ abbr, name, index }, idx) => {
                    const isSomeInCurrentQuery = currentQueryString.filter(
                        (query) => query.book.name === name
                    )[0]
                    const isCurrentSelection =
                        currentSelectionSelector.books.index === index
                    const classNames = [
                        isSomeInCurrentQuery ? 'bg-gray-100' : '',
                    ]
                    return (
                        <Block
                            className={classNames.join(' ')}
                            onClick={onClickBlock.bind(this, index)}
                            key={idx}
                            {...{
                                title: abbr,
                                desc: name,
                                selected: isCurrentSelection,
                            }}
                        />
                    )
                })}
            </BlockWrap>
        </Container>
    )
}

Books.propTypes = {
    booksData: PropTypes.object,
}

const Chapters = () => {
    const dispatch = useDispatch()
    const toggleChapters = useSelector(
        (state) => state.general.booksSelector.chapters
    )
    const currentQueryString = useSelector((state) => state.data.queryString)
    const chapterVerseInfo = useSelector(
        (state) => state.data.translation.info.chapterVerseInfo
    )
    const currentSelectionBookIndex = useSelector(
        (state) => state.general.currentSelection.books.index
    )
    const currentSelectionChapter = useSelector(
        (state) => state.general.currentSelection.chapters
    )
    const currentQueryBookIndexs = Object.keys(chapterVerseInfo).filter(
        (bookIndex) =>
            currentQueryString.some(
                (query) => query.book.index === Number(bookIndex)
            )
    )
    const currentQueryChapters = currentQueryBookIndexs.map((bookIndex) =>
        Object.keys(chapterVerseInfo[bookIndex])
    )
    const currentSelectionChapters = currentSelectionBookIndex
        ? [Object.keys(chapterVerseInfo[currentSelectionBookIndex])]
        : null
    const displayChapters = currentSelectionChapters
        ? currentSelectionChapters
        : currentQueryChapters
    const onClickBlock = function (number) {
        dispatch(
            currentSelection({
                chapters: Number(number),
            })
        )
    }
    return (
        <Container className="w-full" toggle={toggleChapters}>
            {displayChapters.map((chapterNumber, idx) => {
                return (
                    <BlockWrap key={idx} className="items-start content-start">
                        {chapterNumber.map((number, idx) => {
                            const isSomeInCurrentQuery =
                                currentQueryString.filter((query) =>
                                    currentSelectionBookIndex
                                        ? Number(query.book.index) ===
                                              Number(
                                                  currentSelectionBookIndex
                                              ) &&
                                          Number(query.chapter) ===
                                              Number(number)
                                        : Number(query.chapter) ===
                                          Number(number)
                                )[0]
                            const isCurrentSelection =
                                currentSelectionChapter === Number(number)
                            const classNames = ['text-center']
                            if (isSomeInCurrentQuery) {
                                classNames.push('bg-gray-100')
                            }
                            return (
                                <Block
                                    onClick={onClickBlock.bind(this, number)}
                                    className={classNames.join(' ')}
                                    size="small"
                                    key={idx}
                                    {...{
                                        title: number.toString(),
                                        selected: isCurrentSelection,
                                    }}
                                />
                            )
                        })}
                    </BlockWrap>
                )
            })}
        </Container>
    )
}

const Verses = () => {
    const dispatch = useDispatch()
    const toggleVerses = useSelector(
        (state) => state.general.booksSelector.verses
    )
    const currentQueryString = useSelector((state) => state.data.queryString)
    const chapterVerseInfo = useSelector(
        (state) => state.data.translation.info.chapterVerseInfo
    )
    const currentSelectionBooks = useSelector(
        (state) => state.general.currentSelection.books
    )
    const currentSelectionBookIndex = currentSelectionBooks.index
    const currentSelectionChapter = useSelector(
        (state) => state.general.currentSelection.chapters
    )
    const isSameQueryBookChapter = currentQueryString.every(
        (query, index, arr) =>
            arr.every(
                (arrQuery) =>
                    arrQuery.book.index === query.book.index &&
                    arrQuery.chapter === query.chapter
            )
    )
    const currentQueryChapterVerseInfo = isSameQueryBookChapter
        ? {
              [currentQueryString[0].chapter]:
                  chapterVerseInfo[currentQueryString[0].book.index][
                      currentQueryString[0].chapter
                  ],
          }
        : currentQueryString.reduce(
              (accumulator, query, currentIndex, currentArray) => {
                  const currentQueryBook = currentArray[0].book
                  const currentQueryChapter = query.chapter
                  const chapterMaxVerse =
                      chapterVerseInfo[currentQueryBook.index][query.chapter]
                  accumulator[currentQueryChapter] = chapterMaxVerse
                  return accumulator
              },
              {}
          )
    const displayBooksIndex = currentSelectionBookIndex
        ? currentSelectionBookIndex
        : currentQueryString[0].book.index
    const displayChapterVerseInfo = currentSelectionChapter
        ? {
              [currentSelectionChapter]:
                  chapterVerseInfo[
                      currentSelectionBookIndex
                          ? currentSelectionBookIndex
                          : currentQueryString[0].book.index
                  ][currentSelectionChapter],
          }
        : currentQueryChapterVerseInfo
    const isQueryAndSelectionSame = currentQueryString.some(
        (query) =>
            query.book.index === currentSelectionBookIndex &&
            Number(query.chapter) === currentSelectionChapter
    )
    const onClickBlock = async function ({ book, chapter, verse }) {
        const maxVerseNumber = chapterVerseInfo[displayBooksIndex][chapter]
        const prepareQueryString = [
            { book, chapter, verse: 1 },
            { book, chapter, verse: maxVerseNumber },
        ]
        await dispatch(
            currentSelection({
                verses: Number(verse),
            })
        )
        await dispatch(updateQueryString(prepareQueryString))
    }
    return (
        <Container className="w-full" toggle={toggleVerses}>
            {Object.keys(displayChapterVerseInfo).map(
                (chapter, index, arrData) => {
                    const maxVerse =
                        chapterVerseInfo[displayBooksIndex][chapter]
                    const verses = new Array(maxVerse)
                        .fill(0)
                        .map((ele, index) => index + 1)
                    return (
                        <div key={index} className="w-full">
                            {arrData.length > 1 ? (
                                <div className="w-full text-sm p-3 bg-gray-200 text-gray-500">
                                    {chapter}
                                </div>
                            ) : null}
                            <BlockWrap className="items-start content-start">
                                {verses.map((number, idx) => {
                                    const literalIntegral =
                                        Number(chapter) * 100 + number
                                    const fromIntegral =
                                        Number(currentQueryString[0].chapter) *
                                            100 +
                                        Number(currentQueryString[0].verse)
                                    const toIntegral =
                                        Number(currentQueryString[1].chapter) *
                                            100 +
                                        Number(currentQueryString[1].verse)
                                    const isSomeInCurrentQuery =
                                        isQueryAndSelectionSame &&
                                        literalIntegral >= fromIntegral &&
                                        literalIntegral <= toIntegral
                                    const classNames = ['text-center']
                                    if (isSomeInCurrentQuery) {
                                        classNames.push('bg-gray-100')
                                    }
                                    return (
                                        <Block
                                            onClick={onClickBlock.bind(this, {
                                                book: currentSelectionBooks,
                                                chapter:
                                                    currentSelectionChapter,
                                                verse: number,
                                            })}
                                            className={classNames.join(' ')}
                                            size="small"
                                            key={idx}
                                            {...{ title: number.toString() }}
                                        >
                                            <LinkVerse
                                                book={displayBooksIndex}
                                                chapter={Number(chapter)}
                                                number={number}
                                            />
                                        </Block>
                                    )
                                })}
                            </BlockWrap>
                        </div>
                    )
                }
            )}
        </Container>
    )
}

export { List }

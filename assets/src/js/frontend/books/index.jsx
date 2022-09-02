import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { currentSelection } from '@assets/js/frontend/states/generalSlice'

const Block = ({
    onClick,
    className: extraClassName = '',
    title,
    desc,
    selected,
    size = 'medium',
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
            {Title}
            {Desc}
        </li>
    )
}

const BlockWrap = ({ className: extraClassname = '', children }) => {
    return (
        <ul className={['flex flex-auto flex-wrap', extraClassname].join(' ')}>
            {children}
        </ul>
    )
}

const Container = ({ className: extraClassname = '', toggle, children }) => {
    const classNames = [
        toggle ? 'flex' : 'hidden',
        'flex-wrap',
        ...extraClassname.split(' '),
    ].join(' ')
    return <div className={classNames}>{children}</div>
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
    const onClickBlock = function (bookIndex, e) {
        console.log(this, bookIndex)
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

const Chapters = () => {
    const dispatch = useDispatch()
    const toggleChapters = useSelector(
        (state) => state.general.booksSelector.chapters
    )
    const currentQueryString = useSelector((state) => state.data.queryString)
    const booksSelector = useSelector((state) => [
        ...state.data.books.old,
        ...state.data.books.new,
    ])
    const currentSelectionChapterSelector = useSelector(
        (state) => state.general.currentSelection.chapters
    )
    const currentQueryBooks = booksSelector.filter((book) =>
        currentQueryString.some((query) => query.book.name === book.name)
    )
    const onClickBlock = function (number, e) {
        console.log(this, number)
        dispatch(
            currentSelection({
                chapters: number,
            })
        )
    }
    return (
        <Container className="w-full" toggle={toggleChapters}>
            {currentQueryBooks.map((book, idx) => {
                const chapters = new Array(book.chapters)
                    .fill(0)
                    .map((ele, index) => index + 1)
                return (
                    <BlockWrap key={idx} className="items-start content-start">
                        {chapters.map((number, idx) => {
                            const isSomeInCurrentQuery =
                                currentQueryString.filter(
                                    (query) => Number(query.chapter) === number
                                )[0]
                            const isCurrentSelection = currentSelectionChapterSelector === number
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
                                    {...{ title: number.toString(), selected: isCurrentSelection, }}
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
    const toggleVerses = useSelector(
        (state) => state.general.booksSelector.verses
    )
    const currentQueryString = useSelector((state) => state.data.queryString)
    const chapterVerseInfo = useSelector(
        (state) => state.data.translation.info.chapterVerseInfo
    )
    const isSameBookChapter = currentQueryString.every((query, index, arr) =>
        arr.every(
            (arrQuery) =>
                arrQuery.book.index === query.book.index &&
                arrQuery.chapter === query.chapter
        )
    )
    const currentQueryChapterVerseInfo = isSameBookChapter
        ? {
              [currentQueryString[0].chapter]:
                  chapterVerseInfo[currentQueryString[0].book.index + 1][
                      currentQueryString[0].chapter
                  ],
          }
        : currentQueryString.reduce(
              (accumulator, query, currentIndex, currentArray) => {
                  const currentQueryBook = currentArray[0].book
                  const currentQueryChapter = query.chapter
                  const chapterMaxVerse =
                      chapterVerseInfo[currentQueryBook.index + 1][
                          query.chapter
                      ]
                  accumulator[currentQueryChapter] = chapterMaxVerse
                  return accumulator
              },
              {}
          )
    return (
        <Container className="w-full" toggle={toggleVerses}>
            {Object.keys(currentQueryChapterVerseInfo).map((chapter, index) => {
                const maxVerse = currentQueryChapterVerseInfo[chapter]
                const verses = new Array(maxVerse)
                    .fill(0)
                    .map((ele, index) => index + 1)
                return (
                    <div key={index}>
                        <div className="w-full text-sm p-3 bg-gray-200 text-gray-500">
                            {chapter}
                        </div>
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
                                    literalIntegral >= fromIntegral &&
                                    literalIntegral <= toIntegral
                                const classNames = ['text-center']
                                if (isSomeInCurrentQuery) {
                                    classNames.push('bg-gray-100')
                                }
                                return (
                                    <Block
                                        className={classNames.join(' ')}
                                        size="small"
                                        key={idx}
                                        {...{ title: number.toString() }}
                                    />
                                )
                            })}
                        </BlockWrap>
                    </div>
                )
            })}
        </Container>
    )
}

export { List }

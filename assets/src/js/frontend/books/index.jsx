import React from 'react'
import { useSelector } from 'react-redux'

const Block = ({
    className: extraClassName = '',
    title,
    desc,
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
        <span className="block w-full px-3 font-medium text-gray-900 group-hover:text-rose-600">
            {title}
        </span>
    ) : null
    const Desc = hasDesc ? (
        <small className="px-3 text-gray-600 group-hover:text-rose-600">
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
        ...extraClassName.split(' '),
    ].join(' ')
    return (
        <li className={classNames}>
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
    const booksNameSelector = useSelector((state) => state.data.books)
    const classNames = [
        ...(showBooksSelector ? ['flex'] : ['hidden']),
        'flex-auto',
        'bg-white',
        'overflow-y-auto',
    ].join(' ')
    return (
        <div className={classNames}>
            <Books {...{ booksName: booksNameSelector }} />
            <Chapters />
            <Verses />
        </div>
    )
}

const Books = ({ booksName }) => {
    const toggleBooks = useSelector(
        (state) => state.general.booksSelector.books
    )
    const currentQueryString = useSelector((state) => state.data.queryString)
    return (
        <Container toggle={toggleBooks}>
            <div className="w-full text-sm p-3 bg-gray-200 text-gray-500">
                舊約
            </div>
            <BlockWrap className="bg-gray-200">
                {booksName.old.map(({ abbr, name }, idx) => {
                    const isSomeInCurrentQuery = currentQueryString.filter(
                        (query) => query.book.name === name
                    )[0]
                    return (
                        <Block
                            className={
                                isSomeInCurrentQuery ? 'bg-gray-100' : ''
                            }
                            onClick={() => {}}
                            key={idx}
                            {...{ title: abbr, desc: name }}
                        />
                    )
                })}
            </BlockWrap>
            <div className="w-full text-sm p-3 bg-gray-200 text-gray-500">
                新約
            </div>
            <BlockWrap className="bg-gray-200">
                {booksName.new.map(({ abbr, name }, idx) => {
                    return (
                        <Block
                            onClick={() => {}}
                            key={idx}
                            {...{ title: abbr, desc: name }}
                        />
                    )
                })}
            </BlockWrap>
        </Container>
    )
}

const Chapters = ({}) => {
    const toggleChapters = useSelector(
        (state) => state.general.booksSelector.chapters
    )
    const currentQueryString = useSelector((state) => state.data.queryString)
    const booksSelector = useSelector((state) => state.data.books)
    const chapters = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27,
    ]
    return (
        <Container className="w-full" toggle={toggleChapters}>
            <BlockWrap className="items-start content-start">
                {chapters.map((number, idx) => {
                    const isSomeInCurrentQuery = currentQueryString.filter(
                        (query) => Number(query.chapter) === number
                    )[0]
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
        </Container>
    )
}

const Verses = () => {
    const toggleVerses = useSelector(
        (state) => state.general.booksSelector.verses
    )
    const currentQueryString = useSelector((state) => state.data.queryString)
    const verses = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
        39, 40, 41, 42, 43, 44, 45, 46, 47, 48,
    ]
    return (
        <Container className="w-full" toggle={toggleVerses}>
            <BlockWrap className="items-start content-start">
                {verses.map((number, idx) => {
                    const isSomeInCurrentQuery = currentQueryString.every(
                        (query) => Number(query.verse) >= number && Number(query.verse) <= number
                    )

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
        </Container>
    )
}

export { List }

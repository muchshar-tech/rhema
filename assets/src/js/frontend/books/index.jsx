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
    const booksNameSelector = useSelector(
        (state) => state.data.books
    )
    const classNames = [
        ...(showBooksSelector ? ['flex'] : ['hidden']),
        'flex-auto',
        'bg-white',
        'overflow-y-auto',
    ].join(' ')
    const booksName = {
        old: [
            { abbr: '創', name: '創世記' },
            { abbr: '出', name: '出埃及記' },
            { abbr: '利', name: '利未記' },
            { abbr: '民', name: '民數記' },
            { abbr: '申', name: '申命記' },
            { abbr: '書', name: '約書亞記' },
            { abbr: '士', name: '士師記' },
            { abbr: '得', name: '路得記' },
            { abbr: '撒上 1', name: '撒母耳記上' },
            { abbr: '撒下 2', name: '撒母耳記下' },
            { abbr: '王上', name: '列王紀上' },
            { abbr: '王下', name: '列王紀下' },
            { abbr: '代上 1', name: '歷代志上' },
            { abbr: '代下 2', name: '歷代志下' },
            { abbr: '拉', name: '以斯拉記' },
            { abbr: '尼', name: '尼希米記' },
            { abbr: '斯', name: '以斯帖記' },
            { abbr: '伯', name: '約伯記' },
            { abbr: '詩', name: '詩篇' },
            { abbr: '箴', name: '箴言' },
            { abbr: '傳', name: '傳道書' },
            { abbr: '歌', name: '雅歌' },
            { abbr: '賽', name: '以賽亞書' },
            { abbr: '耶', name: '耶利米書' },
            { abbr: '哀', name: '耶利米哀歌' },
            { abbr: '結', name: '以西結書' },
            { abbr: '但', name: '但以理書' },
            { abbr: '何', name: '何西阿書' },
            { abbr: '珥', name: '約珥書' },
            { abbr: '摩', name: '阿摩司書' },
            { abbr: '俄', name: '俄巴底亞書' },
            { abbr: '拿', name: '約拿書' },
            { abbr: '彌', name: '彌迦書' },
            { abbr: '鴻', name: '那鴻書' },
            { abbr: '哈', name: '哈巴谷書' },
            { abbr: '番', name: '西番雅書' },
            { abbr: '該', name: '哈該書' },
            { abbr: '亞', name: '撒迦利亞書' },
            { abbr: '瑪', name: '瑪拉基書' },
        ],
        new: [
            { abbr: '太', name: '馬太福音' },
            { abbr: '可', name: '馬可福音' },
            { abbr: '路', name: '路加福音' },
            { abbr: '約', name: '約翰福音' },
            { abbr: '徒', name: '使徒行傳' },
            { abbr: '羅', name: '羅馬書' },
            { abbr: '林前1', name: '哥林多前書' },
            { abbr: '林後2', name: '哥林多後書' },
            { abbr: '加', name: '加拉太書' },
            { abbr: '弗', name: '以弗所書' },
            { abbr: '腓', name: '腓立比書' },
            { abbr: '西', name: '歌羅西書' },
            { abbr: '帖前1', name: '帖撒羅尼迦前書' },
            { abbr: '帖後2', name: '帖撒羅尼迦後書' },
            { abbr: '提前1', name: '提摩太前書' },
            { abbr: '提後2', name: '提摩太後書' },
            { abbr: '多', name: '提多書' },
            { abbr: '門', name: '腓利門書' },
            { abbr: '來', name: '希伯來書' },
            { abbr: '雅', name: '雅各書' },
            { abbr: '彼前1', name: '彼得前書' },
            { abbr: '彼後2', name: '彼得後書' },
            { abbr: '約一1', name: '約翰壹書' },
            { abbr: '約二2', name: '約翰貳書' },
            { abbr: '約三3', name: '約翰參書' },
            { abbr: '猶', name: '猶大書' },
            { abbr: '啟', name: '啟示錄' },
        ],
    }
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
    return (
        <Container toggle={toggleBooks}>
            <div className="w-full text-sm p-3 bg-gray-200 text-gray-500">
                舊約
            </div>
            <BlockWrap className="bg-gray-200">
                {booksName.old.map(({ abbr, name }, idx) => {
                    return (
                        <Block
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
    const chapters = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27,
    ]
    return (
        <Container className="w-full" toggle={toggleChapters}>
            <BlockWrap className="items-start content-start">
                {chapters.map((number, idx) => {
                    return (
                        <Block
                            className="text-center"
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
    const verses = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
        39, 40, 41, 42, 43, 44, 45, 46, 47, 48,
    ]
    return (
        <Container className="w-full" toggle={toggleVerses}>
            <BlockWrap className="items-start content-start">
                {verses.map((number, idx) => {
                    return (
                        <Block
                            className="text-center"
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

import React from 'react'
import PropTypes from 'prop-types'
import { useLongPress } from 'use-long-press'
import { useSelector, useDispatch } from 'react-redux'

import { switchHeadersSelection } from '@assets/js/frontend/states/generalSlice'
import { putRaw, delRaw } from '@assets/js/frontend/states/selectedSlice'

const RelateContent = ({}) => {
    return (
        <div className="flex relative justify-center my-10px overflow-hidden space-x-4">
            <div className="w-11/12 max-w-360px max-h-180px aspect-video bg-sky-300 rounded-xl"></div>
            <div className="absolute w-11/12 max-w-360px max-h-180px aspect-video bg-sky-300 rounded-xl translate-x-full"></div>
        </div>
    )
}

const Title = ({ children }) => {
    return <h3 className="mb-10px text-sm font-bold">{children}</h3>
}

Title.propTypes = {
    children: PropTypes.element,
}

const Block = ({ children }) => {
    return (
        <p className="line-break-anywhere leading-12 mb-10px last:mb-0px">
            {children}
        </p>
    )
}

Block.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element),
    ]),
}

const Line = ({
    active = false,
    block = false,
    id = '0000000',
    bookAbbr = '',
    chapterNum = '',
    verseNum = '',
    children,
}) => {
    const isSelectionMode = useSelector(
        (state) => state.general.headersSwitch.selection
    )
    const dispatch = useDispatch()
    const { current: currentChapterRaws } = useSelector(
        (state) => state.data.raws
    )
    const {
        fontSize,
    } = useSelector((state) => state.general.displaySetting)
    const selectedRaws = useSelector((state) => state.selected.raws)
    const bind = useLongPress(
        !isSelectionMode
            ? () => {
                  console.log('Long pressed!')
                  dispatch(switchHeadersSelection())
                  if (active) {
                      return
                  }
                  const rawIndex = currentChapterRaws.findIndex(
                      (raw) => raw.id === id
                  )
                  dispatch(putRaw(currentChapterRaws[rawIndex]))
              }
            : null,
        {
            threshold: 500,
            cancelOnMovement: true,
        }
    )

    const onClickVerse = (id, e) => {
        console.log('onClickVerse')
        e.preventDefault()
        if (!isSelectionMode) {
            return
        }
        const rawIndex = currentChapterRaws.findIndex((raw) => raw.id === id)
        const selectedRawIndex = selectedRaws.findIndex((raw) => raw.id === id)
        const isSelectedRaw = selectedRawIndex !== -1
        if (isSelectedRaw) {
            dispatch(delRaw(selectedRaws[selectedRawIndex]))
            return
        }
        if (active) {
            dispatch(delRaw(currentChapterRaws[rawIndex]))
            return
        }
        dispatch(putRaw(currentChapterRaws[rawIndex]))
    }
    const generateBeforeContentClassName = (bookAbbr, chapterNum) => {
        if (bookAbbr && chapterNum) {
            return 'before:content-[attr(data-book-abbr)_"_"attr(data-chapter-num)":"_attr(data-verse-num)]'
        }
        return `before:content-[attr(data-verse-num)]`
    }
    const beforeIsWider = !!bookAbbr && !!chapterNum
    const classNames = [
        'before:text-12px',
        ...(!beforeIsWider ? ['before:w-18px'] : ['before:px-3px']),
        'before:inline-flex',
        'before:items-center',
        'before:justify-center',
        'before:text-center',
        generateBeforeContentClassName(bookAbbr, chapterNum),
        'before:align-text-top',
        'before:mt-5px',
        'before:text-gray-400',
        ...(active
            ? [
                  'underline',
                  'decoration-2',
                  'decoration-dotted',
                  'underline-offset-4',
              ]
            : []),
        ...(block ? ['block'] : []),
        'before:leading-none',
        'before:decoration-sky-500',
        'cursor-pointer',
        'text-16px',
    ].join(' ')
    return (
        <span
            {...(bookAbbr
                ? {
                      'data-book-abbr': bookAbbr,
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
            {...bind()}
            onClick={onClickVerse.bind(this, id)}
        >
            {children}
        </span>
    )
}

Line.propTypes = {
    active: PropTypes.bool,
    block: PropTypes.bool,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    bookAbbr: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    chapterNum: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    verseNum: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element),
    ]),
}

export { Title, Block, Line, RelateContent }

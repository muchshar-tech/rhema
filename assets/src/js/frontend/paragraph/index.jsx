import React, { useState } from 'react'
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

const Block = ({ children }) => {
    return (
        <p className="line-break-anywhere leading-12 mb-10px last:mb-0px">
            {children}
        </p>
    )
}

const Line = ({ active = false, block = false, id, verseNum, children }) => {
    const isSelectionMode = useSelector(
        (state) => state.general.headersSwitch.selection
    )
    const dispatch = useDispatch()
    const { current: currentChapterRaws } = useSelector(
        (state) => state.data.raws
    )
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
    const classNames = [
        'before:text-12px',
        'before:w-18px',
        'before:inline-flex',
        'before:items-center',
        'before:justify-center',
        'before:text-center',
        'before:content-[attr(data-verse-num)]',
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
    ].join(' ')
    return (
        <span
            data-verse-num={verseNum}
            className={classNames}
            {...bind()}
            onClick={onClickVerse.bind(this, id)}
        >
            {children}
        </span>
    )
}
export { Title, Block, Line, RelateContent }

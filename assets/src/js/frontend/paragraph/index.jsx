import React, { useState } from 'react'
import { useLongPress } from 'use-long-press'
import { useSelector, useDispatch } from 'react-redux'

import { switchHeadersSelection } from '@assets/js/frontend/states/generalSlice'

const Paragraph = ({ children }) => {
    return <p className="line-break-anywhere leading-12">{children}</p>
}

const Line = ({ verseNum, children }) => {
    const isSelectionMode = useSelector(
        (state) => state.general.headersSwitch.selection
    )
    const [active, setActive] = useState(false)
    const dispatch = useDispatch()
    const bind = useLongPress(
        !isSelectionMode
            ? () => {
                  console.log('Long pressed!')
                  setActive(!active)
                  dispatch(switchHeadersSelection())
              }
            : null,
        {
            threshold: 500,
            cancelOnMovement: true,
        }
    )
    const onClickVerse = (e) => {
        console.log(isSelectionMode)
        e.preventDefault()
        if (!isSelectionMode) {
            return
        }
        setActive(!active)
    }
    const classNames = [
        'before:text-12px',
        'before:w-14px',
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
        'before:leading-none',
        'before:decoration-sky-500',
        'cursor-pointer',
    ].join(' ')
    return (
        <span
            data-verse-num={verseNum}
            className={classNames}
            {...bind()}
            onClick={onClickVerse}
        >
            {children}
        </span>
    )
}

export default Paragraph
export { Line }

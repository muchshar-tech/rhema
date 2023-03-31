import React, { useState } from 'react'
import clamp from 'lodash/clamp'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { FiMinusSquare } from 'react-icons/fi'
import Swipe from 'react-easy-swipe'

import * as Paragraph from '@components/frontend/paragraph'
import * as Tools from '@components/frontend/tools'

const AppContainer = ({ children }) => {
    const showSelection = useSelector(
        (state) => state.general.headersSwitch.selection
    )
    const showSomeDrawer = useSelector((state) => {
        const someDrawerOpend = Object.keys(state.general.drawer).some(
            (key) => {
                return state.general.drawer[key] === true
            }
        )
        return someDrawerOpend
    })

    const fullscreen = useSelector((state) => state.general.fullscreen)

    const fullscreenStyle = fullscreen
        ? [
              'fixed',
              'top-0',
              'right-0',
              'bottom-0',
              'left-0',
              'z-99999',
              'flex',
              'flex-col',
          ]
        : ['container']
    return (
        <div
            className={[
                'mx-auto',
                'overflow-hidden',
                ...(fullscreen ? [] : ['md:rounded-8px']),
                'font-bible',
                'drop-shadow-md',
                ...fullscreenStyle,
            ].join(' ')}
        >
            {children}
            <Tools.AddNewPostButton showOn={showSelection && !showSomeDrawer} />
        </div>
    )
}

const Top = ({ children }) => {
    return (
        <div className="flex flex-wrap items-center text-gray-800 bg-white border-b text-12px md:text-14px drop-shadow-sm">
            {children}
        </div>
    )
}

const Body = ({ children }) => {
    const showScroll = useSelector((state) => {
        const someDrawerOpend = Object.keys(state.general.drawer).some(
            (key) => {
                return state.general.drawer[key] === true
            }
        )
        return !someDrawerOpend
    })
    const classnames = [
        'relative',
        'flex-auto',
        'overflow-x-hidden',
        'bg-white',
        ...(showScroll ? ['overflow-y-auto'] : ['overflow-y-hidden']),
    ].join(' ')
    return <div className={classnames}>{children}</div>
}

const Content = ({ children }) => {
    const showMain = useSelector(
        (state) =>
            state.general.headersSwitch.main ||
            state.general.headersSwitch.selection
    )
    const [movePercentage, setMovePercentage] = useState(0)
    const [pagePos, setPagePos] = useState(0)
    const onSwipeStart = (event) => {
        console.log('Start swiping...', event)
    }

    const onSwipeMove = (position, event) => {
        const movePercentageX = Number(
            ((position.x / Number(screen.width)) * 100).toFixed(1)
        )
        const movePercentageY = Number(
            ((position.y / Number(screen.width)) * 100).toFixed(1)
        )
        // console.log(`Moved ${position.x} pixels horizontally`, event)
        // console.log(`Moved ${movePercentageX} percentage horizontally`, event)
        console.log(`Moved ${position.y} pixels vertically`, event)
        console.log(`Moved ${movePercentageY} percentage vertically`, event)
        setMovePercentage(clamp(movePercentageX, -100, 100))
    }

    const onSwipeEnd = (event) => {
        console.log('End swiping...', event, movePercentage)
        const moveAbsPercentage = Math.abs(movePercentage)
        if (moveAbsPercentage > 30) {
            setPagePos(movePercentage < 0 ? pagePos - 100 : pagePos + 100)
        }
        setMovePercentage(0)
    }

    const classNames = [
        ...(showMain ? ['flex'] : ['hidden']),
        'relative',
        'flex',
        'min-h-full',
        'py-10',
    ].join(' ')

    return (
        <Swipe
            onSwipeStart={onSwipeStart}
            onSwipeMove={onSwipeMove}
            onSwipeEnd={onSwipeEnd}
            className={classNames}
        >
            {(Array.isArray(children) ? children : [children]).map(
                (child, idx) => {
                    return (
                        <motion.div
                            key={idx}
                            animate={{
                                x: `${pagePos + movePercentage}%`,
                            }}
                            transition={{ ease: 'easeOut' }}
                            initial={false}
                            className="min-w-full px-10"
                        >
                            {child}
                        </motion.div>
                    )
                }
            )}
        </Swipe>
    )
}

const Page = ({ children }) => {
    return <>{children}</>
}

const Drawer = ({ name, className: extraClassName = '', children }) => {
    const showDrawer = useSelector((state) => state.general.drawer[name])
    const fullscreen = useSelector((state) => state.general.fullscreen)
    const classNames = [
        'hidden',
        ...(fullscreen ? ['sticky'] : ['absolute']),
        ...(fullscreen ? [] : ['drop-shadow-lg border-l']),
        'right-0',
        'left-0',
        'md:left-1/2',
        'bottom-0',
        'top-0',
        'min-h-full',
        'flex-auto',
        'bg-white/[.9]',
        'backdrop-blur-sm',
        'overflow-y-auto',
        'overflow-x-hidden',
        ...extraClassName.split(' '),
    ].join(' ')
    return (
        <motion.div
            animate={{
                x: showDrawer ? '0%' : '100%',
                display: 'flex',
                transitionEnd: {
                    ...(!showDrawer ? { display: 'none' } : {}),
                },
            }}
            transition={{ ease: 'easeOut' }}
            initial={false}
            className={classNames}
        >
            {children}
        </motion.div>
    )
}

Top.LeftSide = function LeftSide({ className: extraClassName = '', children }) {
    const classNames = [
        'flex',
        'items-center',
        'space-x-4',
        ...extraClassName.split(' '),
    ].join(' ')
    return <div className={classNames}>{children}</div>
}

Top.MiddleSide = function MiddleSide({
    className: extraClassName = '',
    children,
}) {
    const classNames = [
        'flex',
        'items-center',
        'absolute',
        'top-1/2',
        'left-1/2',
        'transform',
        '-translate-x-1/2',
        '-translate-y-1/2',
        ...extraClassName.split(' '),
    ].join(' ')
    return <div className={classNames}>{children}</div>
}

Top.RightSide = function RightSide({
    className: extraClassName = '',
    children,
}) {
    const classNames = [
        'flex',
        'items-center',
        'space-x-4',
        ...extraClassName.split(' '),
    ].join(' ')
    return <div className={classNames}>{children}</div>
}

Top.Row = function Row({ className: extraClassName = '', children }) {
    const classNames = [
        'relative',
        'flex',
        'items-center',
        'w-full',
        ...extraClassName.split(' '),
    ].join(' ')
    return <div className={classNames}>{children}</div>
}

Drawer.SelectedRaw = function SelectedRaw() {
    const selectedRaws = useSelector((state) => state.selected.raws)
    const booksDataSelector = useSelector((state) => [
        ...state.data.books.old,
        ...state.data.books.new,
    ])
    return (
        <div className="w-full">
            {selectedRaws.map((raw) => {
                const bookData = booksDataSelector[raw.book + 1]
                const bookAbbr = bookData.abbr
                return (
                    <div key={raw.id}>
                        <FiMinusSquare className="text-neutral-600 h-15px w-15px inline-block" />
                        <Paragraph.Line
                            id={raw.id}
                            bookAbbr={bookAbbr}
                            chapterNum={raw.chapter}
                            verseNum={raw.verse}
                        >
                            {raw.text}
                        </Paragraph.Line>
                    </div>
                )
            })}
        </div>
    )
}

export { AppContainer, Body, Content, Drawer, Page, Top }

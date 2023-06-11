import React, { useState, useMemo, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
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

const PageWrapper = ({
    className,
    movePercentage,
    pagePos,
    onTransitionEnd,
    children,
}) => {
    const elementRef = useRef(null)

    useEffect(() => {
        const element = elementRef.current
        const handlerOnTransitionEnd = () => {
            console.log('run handlerOnTransitionEnd', pagePos, children)
            onTransitionEnd()
        }
        if (onTransitionEnd) {
            element.addEventListener('transitionend', handlerOnTransitionEnd)
        }

        return () => {
            element.removeEventListener('transitionend', handlerOnTransitionEnd)
        }
    }, [onTransitionEnd])
    return (
        <div
            ref={elementRef}
            style={{
                transform: `translateX(${-(pagePos * 100) + movePercentage}%`,
            }}
            className={className}
        >
            {children}
        </div>
    )
}

const Content = ({
    pagePosition = 'middle',
    onMoveFirstPage,
    onMoveLastPage,
    onCompletedMove,
    children,
}) => {
    const initialPos =
        pagePosition === 'middle' ? 1 : pagePosition === 'left' ? 0 : 1

    const showMain = useSelector(
        (state) =>
            state.general.headersSwitch.main ||
            state.general.headersSwitch.selection
    )
    const [movePercentage, setMovePercentage] = useState(0)
    const [onTransition, setOnTransition] = useState(false)
    const [pagePos, setPagePos] = useState(initialPos)
    const onSwipeStart = (event) => {
        console.groupCollapsed('Start swiping...')
        console.log('Start swiping...', event)
    }

    const onSwipeMove = (position, event) => {
        const movePercentageX = Number(
            ((position.x / Number(screen.width)) * 100).toFixed(1)
        )
        const movePercentageY = Number(
            ((position.y / Number(screen.width)) * 100).toFixed(1)
        )
        // console.log(`Moved ${position.y} pixels vertically`, event)
        // console.log(`Moved ${movePercentageY} percentage vertically`, event)
        setMovePercentage(
            clamp(
                movePercentageX,
                pagePosition !== 'right' ? -100 : -20,
                pagePosition !== 'left' ? 100 : 20
            )
        )
        setOnTransition(true)
    }

    const onSwipeEnd = (event) => {
        console.groupEnd('Start swiping...')
        console.groupCollapsed('End swiping...')
        console.log(event, movePercentage)
        const moveAbsPercentage = Math.abs(movePercentage)
        const pagesCount = children.length || 0
        if (moveAbsPercentage > 30) {
            const nextPagePos = clamp(
                movePercentage < 0 ? pagePos + 1 : pagePos - 1,
                0,
                2
            )
            console.log(pagesCount, pagePos, nextPagePos)
            if (nextPagePos === 0 || (initialPos === 2 && nextPagePos === 1)) {
                onMoveFirstPage()
            }
            if (nextPagePos === 2 || (initialPos === 0 && nextPagePos === 1)) {
                onMoveLastPage()
            }
            setPagePos(nextPagePos)
        }
        setMovePercentage(0)
        console.groupEnd('End swiping...')
    }

    const handlerOnTransitionEnd = () => {
        console.log('onTransitionEnd', pagePos, initialPos)
        if (pagePos !== initialPos) {
            setOnTransition(false)
            onCompletedMove(
                initialPos > pagePos ? -1 : initialPos < pagePos ? 1 : 0
            )
            setPagePos(initialPos === 0 ? 1 : initialPos === 2 ? 1 : initialPos)
        }
    }

    const classNames = [
        ...(showMain ? ['flex'] : ['hidden']),
        'items-start',
        'relative',
        'flex',
        'py-10',
        'overflow-hidden',
        'h-full'
    ].join(' ')

    const pageClassNames = [
        ...(movePercentage > 0 || onTransition
            ? ['transition-transform', 'ease-out', 'duration-500']
            : []),
        'min-w-full',
        'h-full',
        'overflow-y-auto',
        'px-10',
    ]

    useEffect(() => {
        setPagePos(initialPos)
    }, [initialPos])

    return (
        <Swipe
            onSwipeStart={onSwipeStart}
            onSwipeMove={onSwipeMove}
            onSwipeEnd={onSwipeEnd}
            className={classNames}
        >
            {Array.isArray(children) && children.length > 0 ? (
                children.map((child, idx) => {
                    return (
                        <PageWrapper
                            {...{
                                key: idx,
                                className: pageClassNames.join(' '),
                                movePercentage,
                                pagePos,
                                ...(idx === initialPos && {
                                    onTransitionEnd: handlerOnTransitionEnd,
                                }),
                            }}
                        >
                            {child}
                        </PageWrapper>
                    )
                })
            ) : (
                <div className="px-6">{children}</div>
            )}
            {console.groupEnd()}
            {console.groupEnd()}
        </Swipe>
    )
}
Content.propTypes = {
    pagePosition: PropTypes.string,
    onMoveStartPage: PropTypes.func,
    onMoveEndPage: PropTypes.func,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element),
    ]),
}

const Page = ({ children }) => {
    return <div>{children}</div>
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

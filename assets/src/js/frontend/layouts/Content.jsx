import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { clamp } from 'lodash'
import Swipe from 'react-easy-swipe'
import useResizeObserver from '@react-hook/resize-observer'

import { updatePageSwipper } from '@assets/js/frontend/states/generalSlice'
import PageWrapper from '@components/frontend/layouts/PageWrapper'

const Content = ({
    pagePosition = 'middle',
    currentBookMaxChapter,
    currentChapter,
    onMoveFirstPage,
    onMoveLastPage,
    onCompletedMove,
    children,
}) => {
    const dispatch = useDispatch()

    const pageWrappersRef = React.useRef(null)

    const changePageMovePercentageThreshold = 6
    const maxChapterNumberOfCurrentBook = parseInt(currentBookMaxChapter) || 1
    const currentChapterNumber = parseInt(currentChapter) || 1

    const initialPos =
        pagePosition === 'middle' ? 1 : pagePosition === 'left' ? 0 : 1

    const showMain = useSelector(
        (state) =>
            state.general.headersSwitch.main ||
            state.general.headersSwitch.selection
    )
    const fullscreen = useSelector((state) => state.general.fullscreen)
    const { pagePos, onTransition } = useSelector(
        (state) => state.general.pageSwipper
    )
    const [currentContentMaxHeight, setCurrentContentMaxHeight] = useState(0)
    const [movePercentage, setMovePercentage] = useState(0)
    // const onSwipeStart = (event) => {}

    const onSwipeMove = (position, event) => {
        const movePercentageX = Number(
            ((position.x / Number(screen.width)) * 100).toFixed(1)
        )
        if (
            movePercentageX > changePageMovePercentageThreshold &&
            movePercentageX < -changePageMovePercentageThreshold
        ) {
            event.preventDefault()
        }
        // console.log(`Moved ${movePercentageX}`)
        // const movePercentageY = Number(
        //     ((position.y / Number(screen.width)) * 100).toFixed(1)
        // )
        // console.log(`Moved ${position.y} pixels vertically`, event)
        // console.log(`Moved ${movePercentageY} percentage vertically`, event)
        setMovePercentage(
            clamp(
                movePercentageX,
                pagePosition !== 'right'
                    ? -99
                    : -changePageMovePercentageThreshold,
                pagePosition !== 'left' ? 99 : changePageMovePercentageThreshold
            )
        )
        dispatch(updatePageSwipper({ onTransition: true }))
    }

    const onSwipeEnd = (event) => {
        const moveAbsPercentage = Math.abs(movePercentage)
        if (moveAbsPercentage > changePageMovePercentageThreshold) {
            const nextPagePos = clamp(
                movePercentage < 0 ? pagePos + 1 : pagePos - 1,
                0,
                2
            )
            if (nextPagePos === 0 || (initialPos === 2 && nextPagePos === 1)) {
                onMoveFirstPage()
            }
            if (nextPagePos === 2 || (initialPos === 0 && nextPagePos === 1)) {
                onMoveLastPage()
            }
            dispatch(updatePageSwipper({ pagePos: nextPagePos }))
        }
        setMovePercentage(0)
    }

    const handlerOnTransitionEnd = () => {
        console.log('onTransitionEnd', pagePos, initialPos)
        if (pagePos === initialPos) {
            return
        }
        let offsetNext = 0
        let pagePosNext = pagePos
        if (initialPos > pagePos && currentChapterNumber - 1 > 0) {
            offsetNext = -1
        }
        if (
            initialPos < pagePos &&
            currentChapterNumber + 1 <= maxChapterNumberOfCurrentBook
        ) {
            offsetNext = 1
        }
        onCompletedMove(
            offsetNext,
            initialPos === 0 ? 1 : initialPos === 2 ? 1 : initialPos,
            false
        )
    }

    const classNames = [
        'items-start',
        'relative',
        'flex',
        'h-full',
        'w-full',
    ].join(' ')

    const pageClassNames = [
        ...(onTransition
            ? ['transition-transform', 'ease-out', 'duration-500']
            : []),
        'min-w-full',
        ...(fullscreen ? ['h-full'] : []),
        'overflow-y-auto',
        'px-10',
        'py-10',
    ]

    useEffect(() => {
        dispatch(updatePageSwipper({ pagePos: initialPos }))
    }, [initialPos])

    useEffect(() => {
        const currentContentDom =
            pageWrappersRef?.current?.children[0]?.children[pagePos]
        const currentContentMaxHeight = currentContentDom?.clientHeight

        setCurrentContentMaxHeight(currentContentMaxHeight)
    }, [currentChapterNumber])

    useResizeObserver(pageWrappersRef, (entry) => {
        const currentContentDom =
            pageWrappersRef?.current?.children[0]?.children[pagePos]
        const currentContentMaxHeight = currentContentDom?.clientHeight

        setCurrentContentMaxHeight(currentContentMaxHeight)
    })

    return (
        <div
            ref={pageWrappersRef}
            className={[
                'flex min-w-320px flex-wrap overflow-hidden',
                ...(showMain ? ['flex'] : ['hidden']),
            ].join(' ')}
            style={{
                ...(currentContentMaxHeight > 0 && !fullscreen
                    ? { maxHeight: `${currentContentMaxHeight}px` }
                    : {}),
            }}
        >
            <Swipe
                onSwipeMove={onSwipeMove}
                onSwipeEnd={onSwipeEnd}
                className={classNames}
            >
                {Array.isArray(children) && children.length > 0 ? (
                    children.map((child, idx) => {
                        return (
                            <PageWrapper
                                {...{
                                    key: child.key,
                                    className: pageClassNames.join(' '),
                                    movePercentage,
                                    pagePos,
                                    ...(idx === initialPos &&
                                        pagePos !== initialPos && {
                                            onTransitionEnd:
                                                handlerOnTransitionEnd,
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
            </Swipe>
        </div>
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

export default Content

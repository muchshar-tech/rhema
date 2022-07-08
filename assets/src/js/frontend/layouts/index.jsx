import React, { useState } from 'react'
import clamp from 'lodash/clamp'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import Swipe from 'react-easy-swipe'

const AppContainer = ({ children }) => {
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
                'md:rounded-8px',
                'font-bible',
                'drop-shadow-md',
                ...fullscreenStyle,
            ].join(' ')}
        >
            {children}
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

const Content = ({ children }) => {
    const showBooksSelector = useSelector(
        (state) => state.general.booksSelector.toggle
    )
    const [movePercentage, setMovePercentage] = useState(0)
    const [pagePos, setPagePos] = useState(0)
    const onSwipeStart = (event) => {
        console.log('Start swiping...', event)
    }

    const onSwipeMove = (position, event) => {
        const movePercentage = Number(
            ((position.x / Number(screen.width)) * 100).toFixed(1)
        )
        console.log(`Moved ${position.x} pixels horizontally`, event)
        console.log(`Moved ${movePercentage} percentage horizontally`, event)
        setMovePercentage(clamp(movePercentage, -100, 100))
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
        ...(!showBooksSelector ? ['flex'] : ['hidden']),
        'relative',
        'flex',
        'flex-auto',
        'py-10',
        'bg-white',
        'overflow-y-auto',
        'overflow-x-hidden',
    ].join(' ')

    return (
        <Swipe
            onSwipeStart={onSwipeStart}
            onSwipeMove={onSwipeMove}
            onSwipeEnd={onSwipeEnd}
            className={classNames}
        >
            {children.map((child, idx) => {
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
            })}
        </Swipe>
    )
}

const Page = ({ children }) => {
    return <>{children}</>
}

Top.LeftSide = ({ children }) => {
    return <div className="flex items-center space-x-4">{children}</div>
}

Top.RightSide = ({ children }) => {
    return <div className="flex items-center space-x-12px">{children}</div>
}

Top.Row = ({ className: extraClassName = '', children }) => {
    const classNames = [
        'flex',
        'items-center',
        'px-12px',
        'w-full',
        ...extraClassName.split(' '),
    ].join(' ')
    return <div className={classNames}>{children}</div>
}

export { AppContainer, Page, Top, Content }

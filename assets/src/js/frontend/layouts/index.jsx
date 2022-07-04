import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { motion, useMotionValue } from 'framer-motion'
import Swipe from 'react-easy-swipe'
import {
    BsChevronCompactUp,
    BsChevronCompactDown,
    BsChevronCompactLeft,
    BsChevronCompactRight,
} from 'react-icons/bs'

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
        <div className="flex items-center justify-between text-gray-800 bg-white border-b px-12px h-52px md:h-64px text-12px md:text-14px drop-shadow-sm">
            {children}
        </div>
    )
}

const Content = ({ children }) => {
    const [rightX, setRightX] = useState(100)
    const [leftX, setLeftX] = useState(100)
    const onSwipeStart = (event) => {
        console.log('Start swiping...', event)
    }

    const onSwipeMove = (position, event) => {
        // console.log(`Moved ${position.y} pixels vertically`, event)
        const moveAbsNumber = Math.abs(position.x)
        const percentage =
            moveAbsNumber > 120 ? 100 : (moveAbsNumber / 120) * 100
        if (position.x < 0 && percentage < 100) {
            setRightX(100 - percentage)
        }

        if (position.x > 0) {
            setLeftX(100 - percentage)
        }
    }

    const onSwipeEnd = (event) => {
        console.log('End swiping...', event)
        setRightX(100)
        setLeftX(100)
    }
    useEffect(() => {

        if (leftX <= 3) {
            console.log('chnage prev page')
        }
    }, [leftX])

    useEffect(() => {
        if (rightX <= 3) {
            console.log('chnage next page')
        }
    }, [rightX])

    return (
        <Swipe
            onSwipeStart={onSwipeStart}
            onSwipeMove={onSwipeMove}
            onSwipeEnd={onSwipeEnd}
            className="relative flex-auto p-10 bg-white"
        >
            <motion.div
                animate={{
                    x: `${rightX}%`,
                    y: '-50%',
                }}
                initial={false}
                className="absolute right-0 top-1/2"
            >
                <BsChevronCompactRight className="h-100px w-60px text-neutral-600" />
            </motion.div>
            <motion.div
                animate={{
                    x: `-${leftX}%`,
                    y: '-50%',
                }}
                initial={false}
                className="absolute left-0 top-1/2"
            >
                <BsChevronCompactLeft className="h-100px w-60px text-neutral-600" />
            </motion.div>
            {children}
        </Swipe>
    )
}

Top.LeftSide = ({ children }) => {
    return <div className="flex items-center space-x-4">{children}</div>
}

Top.RightSide = ({ children }) => {
    return <div className="flex items-center space-x-12px">{children}</div>
}

export { AppContainer, Top, Content }

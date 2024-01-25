import React from 'react'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { FiMinusSquare } from 'react-icons/fi'

import * as Paragraph from '@components/frontend/paragraph'

const Drawer = ({ name, className: extraClassName = '', children }) => {
    const showDrawer = useSelector((state) => state.general.drawer[name])
    const fullscreen = useSelector((state) => state.general.fullscreen)
    const allocationMode = useSelector(
        (state) => state.general.layoutAllocationMode
    )
    const classNames = [
        'z-10',
        'hidden',
        ...(fullscreen || allocationMode === 'split'
            ? ['static']
            : ['absolute']),
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
            onAnimationComplete={() => {}}
        >
            {children}
        </motion.div>
    )
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

export default Drawer

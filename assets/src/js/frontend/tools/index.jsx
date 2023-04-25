import React, { forwardRef } from 'react'
import intersection from 'lodash/intersection'
import { useSelector, useDispatch } from 'react-redux'
import { motion } from 'framer-motion'
import { HiOutlineSearch } from 'react-icons/hi'
import { AiOutlineExpand, AiOutlineCompress } from 'react-icons/ai'
import { BsPlus } from 'react-icons/bs'
import { MdHistoryToggleOff } from 'react-icons/md'
import Ripples from 'react-ripples'

import {
    toggleScreen,
    toggleDrawer,
    switchHeadersBooks,
} from '@assets/js/frontend/states/generalSlice'
import { Form } from '@components/frontend/forms'

const Bordered = ({ children }) => {
    return (
        <Ripples>
            <div className="flex items-center leading-18px md:leading-22px justify-center overflow-hidden bg-white border border-gray-300 rounded-sm w-72px md:w-80px py-5px md:py-8px">
                {children}
            </div>
        </Ripples>
    )
}

const Borderless = ({ onClick, children }) => {
    return (
        <Ripples>
            <div
                className="relative flex items-center justify-center overflow-hidden h-30px w-30px md:h-40px md:w-40px cursor-pointer"
                onClick={onClick}
            >
                {children}
            </div>
        </Ripples>
    )
}

const SearchBar = forwardRef(({ expand, onSubmit, ...otherprops }, ref) => {
    const inputClassNames = [
        'w-0',
        'h-24px',
        'outline-0',
        'group-hover:w-auto',
        ...(expand ? ['w-auto'] : []),
    ].join(' ')
    return (
        <Ripples>
            <Form onSubmit={onSubmit}>
                <div className="relative flex items-center justify-center overflow-hidden bg-white border border-gray-300 rounded-sm py-2px pl-5px pr-23px md:pl-9px md:pr-29px md:py-7px group">
                    <input
                        placeholder="輸入關鍵字進行搜尋"
                        type="text"
                        autoComplete="off"
                        className={inputClassNames}
                        {...(!!ref ? { ref } : {})}
                        {...(!!otherprops ? otherprops : {})}
                    />
                    <HiOutlineSearch className="absolute h-20px w-20px right-4px md:right-10px text-neutral-600" />
                </div>
            </Form>
        </Ripples>
    )
})

const FullScreenToggle = () => {
    const fullscreen = useSelector((state) => state.general.fullscreen)
    const Icon = fullscreen ? (
        <AiOutlineCompress className="h-20px w-20px right-4px md:right-10px text-neutral-700" />
    ) : (
        <AiOutlineExpand className="h-20px w-20px right-4px md:right-10px text-neutral-700" />
    )
    const dispatch = useDispatch()
    return (
        <Ripples>
            <Borderless onClick={() => dispatch(toggleScreen())}>
                {Icon}
            </Borderless>
        </Ripples>
    )
}

const BooksSelectorButton = ({ range = [] }) => {
    const toggleRange =
        Array.isArray(range) && range.length === 2 ? (
            <>
                <div className="h-px mx-1 bg-gray-400 w-8px"></div>
                <div className="text-center leading-18px md:leading-22px w-96px md:w-144px py-5px md:py-8px">
                    <span>{range.pop()}</span>
                </div>
            </>
        ) : null
    const dispatch = useDispatch()
    console.log(range)
    return (
        <div
            className="flex items-center overflow-hidden bg-white border border-dashed border-gray-300 rounded-sm cursor-pointer"
            onClick={() => dispatch(switchHeadersBooks())}
        >
            <div className="text-center leading-18px md:leading-22px min-w-96px md:min-w-144px p-5px md:p-8px">
                <span>{range.shift()}</span>
            </div>
            {toggleRange}
        </div>
    )
}

const AddNewPostButton = ({
    showOn = false,
    className: extraClassname = '',
}) => {
    const classNames = [
        'absolute',
        'right-18px',
        'bottom-18px',
        'rounded-full',
        'overflow-hidden',
        'bg-gray-100',
        'drop-shadow-md',
        ...extraClassname.split(' '),
    ].join(' ')
    const dispatch = useDispatch()
    return (
        <motion.div
            animate={{
                y: showOn ? '0%' : '200%',
            }}
            transition={{ ease: 'easeOut' }}
            initial={false}
            className={classNames}
        >
            <Ripples>
                <button
                    className="w-full p-5px"
                    onClick={() => {
                        dispatch(toggleDrawer({ name: 'new-post' }))
                    }}
                >
                    <BsPlus className="h-40px w-40px text-neutral-700" />
                </button>
            </Ripples>
        </motion.div>
    )
}

const CurrentRawsSelected = () => {
    const currentRaws = useSelector((state) => state.data.raws.current)
    const selectedRaws = useSelector((state) => state.selected.raws)
    const booksDataSelector = useSelector((state) => [
        ...state.data.books.old,
        ...state.data.books.new,
    ])
    const currentSelectedRaws = intersection(selectedRaws, currentRaws)
    const displayCurrentSelected = currentSelectedRaws.reduce(
        (acc, raw, index, raws) => {
            const bookIndex = raw.book
            const bookFilterd = booksDataSelector.filter(
                (book) => book.index === bookIndex
            )
            const abbrName = bookFilterd[0].abbr
            if (index === 0) {
                acc.push(`${abbrName} ${raw.chapter}:${raw.verse}`)
                return acc
            }
            if (Math.abs(raw.id - raws[index - 1].id) === 1) {
                acc[acc.length - 1] = acc[acc.length - 1].replace(
                    /\-\d{0,3}/,
                    ''
                )
                acc[acc.length - 1] += `-${raw.verse}`
                return acc
            }
            acc.push(`${raw.chapter}:${raw.verse}`)
            return acc
        },
        []
    )
    const dispatch = useDispatch()
    return (
        <Ripples>
            <div
                className="flex items-center overflow-hidden bg-white border border-dashed border-gray-300 rounded-sm cursor-pointer"
                onClick={() =>
                    dispatch(toggleDrawer({ name: 'selected-raws' }))
                }
            >
                {displayCurrentSelected.length > 0 &&
                !!displayCurrentSelected[0] ? (
                    <div className="text-center leading-18px md:leading-22px p-5px md:p-8px">
                        <span>{displayCurrentSelected.join(', ')}</span>
                    </div>
                ) : null}
                <div className="p-5px">
                    <MdHistoryToggleOff className="h-20px w-20px text-neutral-700" />
                </div>
            </div>
        </Ripples>
    )
}

export {
    AddNewPostButton,
    BooksSelectorButton,
    CurrentRawsSelected,
    Bordered,
    Borderless,
    FullScreenToggle,
    SearchBar,
}

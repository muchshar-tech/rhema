import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { motion } from 'framer-motion'
import { HiOutlineSearch } from 'react-icons/hi'
import { AiOutlineExpand, AiOutlineCompress } from 'react-icons/ai'
import { BsPlus } from 'react-icons/bs'
import Ripples from 'react-ripples'

import {
    toggleScreen,
    toggleDrawer,
    switchHeadersBooks,
} from '@assets/js/frontend/states/generalSlice'

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
                className="relative flex items-center justify-center overflow-hidden h-30px w-30px md:h-40px md:w-40px"
                onClick={onClick}
            >
                {children}
            </div>
        </Ripples>
    )
}

const SearchBar = () => {
    return (
        <Ripples>
            <div className="relative flex items-center justify-center overflow-hidden bg-white border border-gray-300 rounded-sm py-2px pl-5px pr-23px md:pl-9px md:pr-29px md:py-7px group">
                <input
                    placeholder="輸入關鍵字進行搜尋"
                    type="text"
                    autoComplete="off"
                    className="w-0 h-24px outline-0 group-hover:w-auto"
                />
                <HiOutlineSearch className="absolute h-20px w-20px right-4px md:right-10px text-neutral-600" />
            </div>
        </Ripples>
    )
}

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
                        dispatch(toggleDrawer({name: 'new-post'}))
                    }}
                >
                    <BsPlus className="h-40px w-40px text-neutral-700" />
                </button>
            </Ripples>
        </motion.div>
    )
}

export {
    AddNewPostButton,
    BooksSelectorButton,
    Bordered,
    Borderless,
    FullScreenToggle,
    SearchBar,
}

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    toggleScreen,
    switchHeadersBooks,
} from '@assets/js/frontend/states/generalSlice'
import { SearchIcon } from '@heroicons/react/solid'
import { AiOutlineExpand, AiOutlineCompress } from 'react-icons/ai'

const Bordered = ({ children }) => {
    return (
        <div className="flex items-center leading-18px md:leading-22px justify-center overflow-hidden bg-white border border-gray-300 rounded-sm w-72px md:w-80px py-5px md:py-8px">
            {children}
        </div>
    )
}

const Borderless = ({ onClick, children }) => {
    return (
        <div
            className="relative flex items-center justify-center overflow-hidden h-30px w-30px md:h-40px md:w-40px"
            onClick={onClick}
        >
            {children}
        </div>
    )
}

const SearchBar = () => {
    return (
        <div className="relative flex items-center justify-center overflow-hidden bg-white border border-gray-300 rounded-sm py-2px pl-5px pr-23px md:pl-9px md:pr-29px md:py-7px group">
            <input
                placeholder="輸入關鍵字進行搜尋"
                type="text"
                autoComplete="off"
                className="w-0 h-24px outline-0 group-hover:w-auto"
            />
            <SearchIcon className="absolute h-20px w-20px right-4px md:right-10px text-neutral-600" />
        </div>
    )
}

const FullScreenToggle = ({ children }) => {
    const fullscreen = useSelector((state) => state.general.fullscreen)
    const Icon = fullscreen ? (
        <AiOutlineCompress className="h-20px w-20px right-4px md:right-10px text-neutral-700" />
    ) : (
        <AiOutlineExpand className="h-20px w-20px right-4px md:right-10px text-neutral-700" />
    )
    const dispatch = useDispatch()
    return (
        <Borderless onClick={() => dispatch(toggleScreen())}>{Icon}</Borderless>
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
            className="flex items-center overflow-hidden bg-white border border-gray-300 rounded-sm cursor-pointer"
            onClick={() => dispatch(switchHeadersBooks())}
        >
            <div className="text-center leading-18px md:leading-22px w-96px md:w-144px py-5px md:py-8px">
                <span>{range.shift()}</span>
            </div>
            {toggleRange}
        </div>
    )
}

export {
    Bordered,
    Borderless,
    SearchBar,
    FullScreenToggle,
    BooksSelectorButton,
}

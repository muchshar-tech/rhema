import React, { forwardRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { motion } from 'framer-motion'
import { AiOutlineExpand, AiOutlineCompress } from 'react-icons/ai'
import { BsPlus } from 'react-icons/bs'
import { MdHistoryToggleOff } from 'react-icons/md'
import Ripples from 'react-ripples'

import {
    toggleScreen,
    toggleDrawer,
    switchHeadersBooks,
} from '@assets/js/frontend/states/generalSlice'
import SearchBarInput from '@components/frontend/tools/SearchBarInput'
import BibleSelector from '@components/frontend/tools/BooksSelector'
import BorderlessBlock from '@components/frontend/tools/Borderless'
import BorderedBlock from '@components/frontend/tools/Bordered'

const SearchBar = forwardRef(({ expand, onSubmit, ...otherprops }, ref) => {
    return (
        <Ripples>
            <SearchBarInput
                expand={expand}
                onSubmit={onSubmit}
                forwardRef={ref}
                {...otherprops}
            />
        </Ripples>
    )
})

const Borderless = ({ label, className, disabled, onClick, children }) => {
    const classNames = [className].join(' ')
    return (
        <Ripples
            onClick={(e) => {
                if (disabled) return
                onClick(e)
            }}
            className={classNames}
        >
            <BorderlessBlock>{children}</BorderlessBlock>
            {typeof label === 'string' && label.length > 0 ? (
                <div
                    className={[
                        'flex items-center md:leading-22px p-5px md:p-8px md:pl-0 cursor-pointer',
                        disabled ? 'text-gray-400' : '',
                    ].join(' ')}
                >
                    {label}
                </div>
            ) : null}
        </Ripples>
    )
}

const Bordered = ({ onClick, children }) => {
    return (
        <Ripples onClick={onClick}>
            <BorderedBlock>{children}</BorderedBlock>
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
    const dispatch = useDispatch()
    return (
        <BibleSelector
            onClick={() => dispatch(switchHeadersBooks())}
            range={range}
        />
    )
}

const AddNewPostButton = ({
    showOn = false,
    className: extraClassname = '',
}) => {
    const classNames = [
        'absolute',
        'right-35px',
        'bottom-35px',
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
    const selectedRaws = useSelector((state) => state.selected.raws)
    const booksDataSelector = useSelector((state) => [
        ...state.data.books.old,
        ...state.data.books.new,
    ])
    const displayCurrentSelected = selectedRaws.reduce(
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

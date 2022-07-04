import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleScreen } from '@assets/js/frontend/states/generalSlice'
import { AiOutlineExpand, AiOutlineCompress } from 'react-icons/ai'

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

export { Borderless, FullScreenToggle }

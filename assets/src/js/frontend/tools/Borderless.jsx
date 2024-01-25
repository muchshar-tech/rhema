import React from 'react'

const Borderless = ({ onClick, children }) => {
    return (
        <div
            className="relative flex items-center justify-center overflow-hidden h-30px min-w-30px md:h-40px md:min-w-40px cursor-pointer"
            onClick={onClick}
        >
            {children}
        </div>
    )
}

export default Borderless

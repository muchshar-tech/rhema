import React from 'react'

const Bordered = ({ children }) => {
    return (
        <div className="flex items-center leading-18px md:leading-22px justify-center overflow-hidden bg-white border border-gray-300 rounded-sm w-72px md:w-80px py-5px md:py-8px">
            {children}
        </div>
    )
}

export default Bordered

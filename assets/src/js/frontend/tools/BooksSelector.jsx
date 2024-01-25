import React from 'react'

const BooksSelector = ({ range = [], onClick }) => {
    const toggleRange =
        Array.isArray(range) && range.length === 2 ? (
            <>
                <div className="h-px mx-1 bg-gray-400 w-8px"></div>
                <div className="text-center leading-18px md:leading-22px w-96px md:w-144px py-5px md:py-8px">
                    <span>{range.pop()}</span>
                </div>
            </>
        ) : null
    return (
        <div
            className="flex items-center overflow-hidden bg-white border border-dashed border-gray-300 rounded-sm cursor-pointer"
            onClick={onClick}
        >
            <div className="text-center leading-18px md:leading-22px min-w-96px md:min-w-144px p-5px md:p-8px">
                <span>{range.shift()}</span>
            </div>
            {toggleRange}
        </div>
    )
}

export default BooksSelector

import React from 'react'

const Paragraph = ({ children }) => {
    return <p className="line-break-anywhere leading-12">{children}</p>
}

const Line = ({ verseNum, children }) => {
    return (
        <span
            data-verse-num={verseNum}
            className="before:text-12px before:w-14px before:inline-flex before:items-center before:justify-center before:text-center before:content-[attr(data-verse-num)] before:align-text-top before:mt-5px before:text-gray-400 hover:underline decoration-2 decoration-dotted underline-offset-4 before:leading-none before:decoration-sky-500 cursor-pointer"
        >
            {children}
        </span>
    )
}

export default Paragraph
export { Line }

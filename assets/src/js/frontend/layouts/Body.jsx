import React from 'react'

const Body = ({ showScroll, allocationMode, className, children }) => {
    const classnames = [
        'relative',
        'flex-auto',
        'overflow-x-hidden',
        'bg-white',
        ...(showScroll ? ['overflow-y-auto'] : ['overflow-y-hidden']),
        ...(allocationMode === 'split' ? ['flex [&>div]:flex-1'] : []),
        className,
    ].join(' ')
    return <div className={classnames}>{children}</div>
}

export default Body

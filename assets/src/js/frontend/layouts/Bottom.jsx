import React from 'react'

const Bottom = ({ className, children }) => {
    const classNames = [
        'flex sticky z-20 bottom-0 w-full py-11px px-12px md:py-10px text-12px md:text-14px bg-white border-t justify-end space-x-4 rounded-b',
        className,
    ].join(' ')
    return <div className={classNames}>{children}</div>
}

export default Bottom

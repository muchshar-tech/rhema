import React from 'react'

const Top = ({ children }) => {
    const __wpAdminBar = document.getElementById('wpadminbar')
    const hasWpAdminBar = __wpAdminBar !== null
    const isWpAdmin = document.body.classList.contains('wp-admin')
    const topBarHeight = hasWpAdminBar ? __wpAdminBar.clientHeight : 0
    const classNames = [
        'flex flex-wrap sticky z-20 items-center text-gray-800 bg-white border-b text-12px md:text-14px drop-shadow-sm rounded-t',
        ...(!isWpAdmin && topBarHeight > 0 ? ['wp-sm:top-46px', 'md:top-32px'] : ['top-0']),
    ].join(' ')
    return <div className={classNames}>{children}</div>
}

Top.LeftSide = function LeftSide({ className: extraClassName = '', children }) {
    const classNames = [
        'flex',
        'items-center',
        'space-x-4',
        ...extraClassName.split(' '),
    ].join(' ')
    return <div className={classNames}>{children}</div>
}

Top.MiddleSide = function MiddleSide({
    className: extraClassName = '',
    children,
}) {
    const classNames = [
        'flex',
        'items-center',
        'absolute',
        'top-1/2',
        'left-1/2',
        'transform',
        '-translate-x-1/2',
        '-translate-y-1/2',
        ...extraClassName.split(' '),
    ].join(' ')
    return <div className={classNames}>{children}</div>
}

Top.RightSide = function RightSide({
    className: extraClassName = '',
    children,
}) {
    const classNames = [
        'flex',
        'items-center',
        'space-x-4',
        ...extraClassName.split(' '),
    ].join(' ')
    return <div className={classNames}>{children}</div>
}

Top.Row = function Row({ className: extraClassName = '', children }) {
    const classNames = [
        'relative',
        'flex',
        'items-center',
        'w-full',
        ...extraClassName.split(' '),
    ].join(' ')
    return <div className={classNames}>{children}</div>
}

export default Top

import React from 'react'

const TabWrap = ({ children }) => {
    return <h2 className="nav-tab-wrapper">{children}</h2>
}

const Tab = ({ isActive, children }) => {
    const classNames = [
        'nav-tab',
        ...(isActive ? ['nav-tab-active'] : [])
    ]
    return (
        <a className={classNames.join(' ')} href="#">
            {children}
        </a>
    )
}

const ContentsWrap = ({ children }) => {
    return <div className="section-panel-list">{children}</div>
}

const ContentWrap = ({ children }) => {
    return <div className="p-3">{children}</div>
}

export { TabWrap, Tab, ContentsWrap, ContentWrap }

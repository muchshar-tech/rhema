import React from 'react'

const TabWrap = ({ children }) => {
    return <h2 className="nav-tab-wrapper">{children}</h2>
}

const Tab = ({ children }) => {
    return (
        <a className="nav-tab nav-tab-active" href="#">
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

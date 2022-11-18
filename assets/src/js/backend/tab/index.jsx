import React from 'react'


const TabWrap = ({ children }) => {
    return <h2 className="nav-tab-wrapper">{children}</h2>
}

const ContentsWrap = ({ children }) => {
    return <div className="section-panel-list tailwind">{children}</div>
}

const ContentWrap = ({ children }) => {
    return <div className="p-3">{children}</div>
}

export { TabWrap, ContentsWrap, ContentWrap }

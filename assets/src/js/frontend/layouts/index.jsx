import React from 'react'
import { isEqual } from 'lodash'
import { useSelector } from 'react-redux'

import BibleRaws from '@components/frontend/layouts/BibleRaws'
import Content from '@components/frontend/layouts/Content'
import Drawer from '@components/frontend/layouts/Drawer'
import Top from '@components/frontend/layouts/Top'
import Bottom from '@components/frontend/layouts/Bottom'
import BodyComponent from '@components/frontend/layouts/Body'

const AppContainer = ({ children }) => {
    const fullscreen = useSelector((state) => state.general.fullscreen)

    const fullscreenStyle = fullscreen
        ? [
              'fixed',
              'top-0',
              'right-0',
              'bottom-0',
              'left-0',
              'z-99999',
              'flex',
              'flex-col',
          ]
        : ['container']
    return (
        <div
            className={[
                'mx-auto',
                'font-bible',
                'drop-shadow-md',
                ...fullscreenStyle,
            ].join(' ')}
        >
            {children}
        </div>
    )
}

const Body = ({ className = '', children }) => {
    const showScroll = useSelector((state) => {
        const someDrawerOpend = Object.keys(state.general.drawer).some(
            (key) => {
                return state.general.drawer[key] === true
            }
        )
        return !someDrawerOpend
    })
    const layoutAllocationMode = useSelector(
        (state) => state.general.layoutAllocationMode
    )
    const hasFooter = useSelector((state) => {
        return !!state.general.footerSwitch
    })
    const classNames = [className, ...(hasFooter ? ['pb-[31px]'] : [])].join(
        ' '
    )
    return (
        <BodyComponent className={classNames} showScroll={showScroll} allocationMode={layoutAllocationMode}>
            {children}
        </BodyComponent>
    )
}

const RawsContent = React.memo(BibleRaws, (prev, next) => {
    if (!isEqual(prev.chapterVerseInfo, next.chapterVerseInfo)) {
        return false
    }
    if (!isEqual(prev.readingQuerys, next.readingQuerys)) {
        return false
    }
    if (!isEqual(prev.bookRaws, next.bookRaws)) {
        return false
    }
    if (!isEqual(prev.selectedRaws, next.selectedRaws)) {
        return false
    }
    return true
})

const Page = ({ children }) => {
    return <div>{children}</div>
}

export { AppContainer, Body, Content, RawsContent, Drawer, Page, Top, Bottom }

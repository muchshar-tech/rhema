import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BiChevronLeft, BiFontSize } from 'react-icons/bi'

import { switchHeadersMain } from '@assets/js/frontend/states/generalSlice'
import * as Layout from '@components/frontend/layouts'
import * as Tools from '@components/frontend/tools'
import * as Tabs from '@components/frontend/tabs'

const Main = () => {
    const showMainHeader = useSelector(
        (state) => state.general.headersSwitch.main
    )
    const classNames = [
        ...(showMainHeader ? ['flex'] : ['hidden']),
        'py-11px',
        'px-12px',
        'md:py-10px',
        'justify-between',
    ].join(' ')
    return (
        <Layout.Top.Row className={classNames}>
            <Layout.Top.LeftSide>
                <Tools.BooksSelectorButton range={['出埃及记 3']} />
            </Layout.Top.LeftSide>
            <Layout.Top.RightSide>
                <Tools.SearchBar />
                <Tools.FullScreenToggle />
                <Tools.Borderless>
                    <BiFontSize className="h-20px w-20px right-4px md:right-10px text-neutral-700" />
                </Tools.Borderless>
            </Layout.Top.RightSide>
        </Layout.Top.Row>
    )
}
const Books = () => {
    const showBooksHeader = useSelector(
        (state) => state.general.headersSwitch.books
    )
    const classNames = [
        ...(showBooksHeader ? ['flex'] : ['hidden']),
        'w-full',
        'items-center',
        'flex-wrap',
    ].join(' ')
    const dispatch = useDispatch()
    return (
        <div className={classNames}>
            <Layout.Top.Row className="items-center w-full py-11px px-12px md:py-10px justify-between">
                <Layout.Top.LeftSide>
                    <Tools.Borderless
                        onClick={() => dispatch(switchHeadersMain())}
                    >
                        <BiChevronLeft className="h-20px w-20px right-4px md:right-10px text-neutral-700" />
                    </Tools.Borderless>
                </Layout.Top.LeftSide>
            </Layout.Top.Row>
            <Tabs.BookTab />
        </div>
    )
}
const Selection = () => {
    const showSelectionHeader = useSelector(
        (state) => state.general.headersSwitch.selection
    )
    const classNames = [
        ...(showSelectionHeader ? ['flex'] : ['hidden']),
        'w-full',
        'items-center',
        'flex-wrap',
    ].join(' ')
    const dispatch = useDispatch()
    return (
        <div className={classNames}>
            <Layout.Top.Row className="items-center w-full py-11px px-12px md:py-10px justify-between">
                <Layout.Top.LeftSide>
                    <Tools.Borderless
                        onClick={() => dispatch(switchHeadersMain())}
                    >
                        <BiChevronLeft className="h-20px w-20px right-4px md:right-10px text-neutral-700" />
                    </Tools.Borderless>
                </Layout.Top.LeftSide>
            </Layout.Top.Row>
        </div>
    )
}

export { Main, Books, Selection }

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BiChevronLeft, BiFontSize } from 'react-icons/bi'
import { BsLayoutTextSidebarReverse } from 'react-icons/bs'

import {
    switchHeadersMain,
    toggleDrawer,
} from '@assets/js/frontend/states/generalSlice'
import { queryStringModifier } from '@assets/js/frontend/utilities'
import * as Layout from '@components/frontend/layouts'
import * as Tools from '@components/frontend/tools'
import * as Tabs from '@components/frontend/tabs'

const Main = () => {
    const dispatch = useDispatch()
    const showMainHeader = useSelector(
        (state) => state.general.headersSwitch.main
    )
    const queryString = useSelector((state) => state.data.queryString)
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
                <Tools.BooksSelectorButton
                    range={queryStringModifier(queryString)}
                />
            </Layout.Top.LeftSide>
            <Layout.Top.RightSide>
                <Tools.SearchBar />
                <Tools.FullScreenToggle />
                <Tools.Borderless>
                    <BiFontSize className="h-20px w-20px right-4px md:right-10px text-neutral-700" />
                </Tools.Borderless>
                <Tools.Borderless
                    onClick={() =>
                        dispatch(toggleDrawer({ name: 'relative-posts' }))
                    }
                >
                    <BsLayoutTextSidebarReverse className="h-20px w-20px right-4px md:right-10px text-neutral-700" />
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
                <Layout.Top.MiddleSide className="text-16px">
                    聖經目錄
                </Layout.Top.MiddleSide>
                <Layout.Top.RightSide>
                    <Tools.Bordered>和合本</Tools.Bordered>
                </Layout.Top.RightSide>
            </Layout.Top.Row>
            <Tabs.BookTab />
        </div>
    )
}
const Selection = () => {
    const dispatch = useDispatch()
    const showSelectionHeader = useSelector(
        (state) => state.general.headersSwitch.selection
    )
    const classNames = [
        ...(showSelectionHeader ? ['flex'] : ['hidden']),
        'w-full',
        'items-center',
        'flex-wrap',
    ].join(' ')
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
                <Layout.Top.MiddleSide>
                    <Tools.CurrentRawsSelected />
                </Layout.Top.MiddleSide>
                <Layout.Top.RightSide></Layout.Top.RightSide>
            </Layout.Top.Row>
        </div>
    )
}

export { Main, Books, Selection }

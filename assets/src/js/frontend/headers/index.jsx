import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BiChevronLeft, BiFontSize } from 'react-icons/bi'
import { BsLayoutTextSidebarReverse } from 'react-icons/bs'

import {
    switchHeadersMain,
    toggleDrawer,
} from '@assets/js/frontend/states/generalSlice'
import * as Layout from '@components/frontend/layouts'
import * as Tools from '@components/frontend/tools'
import * as Tabs from '@components/frontend/tabs'

const Main = () => {
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
    const queryStringModifier = (queryString) => {
        const rangeFrom = queryString[0]
        const rangeTo = queryString[1] ? queryString[1] : queryString[0]
        const isSameBook = rangeFrom.book.name === rangeTo.book.name
        const isSameChapter = rangeFrom.chapter === rangeTo.chapter
        let returnQueryString = [
            `${rangeFrom.book.name} ${rangeFrom.chapter}:${rangeFrom.verse}`,
        ]
        if (!!rangeTo && !!rangeTo.book && rangeTo.chapter && rangeTo.verse) {
            returnQueryString[0] += `-${isSameBook ? '' : rangeTo.book.name} ${
                isSameChapter ? '' : rangeTo.chapter + ':'
            }${rangeTo.verse}`
        }
        return returnQueryString
    }
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
                <Layout.Top.MiddleSide>
                    <Tools.BooksSelectorButton
                        range={['出埃及记 3:12', '出埃及记 3:20']}
                    />
                </Layout.Top.MiddleSide>
                <Layout.Top.RightSide>
                    <Tools.Borderless
                        onClick={() =>
                            dispatch(toggleDrawer({ name: 'relative-posts' }))
                        }
                    >
                        <BsLayoutTextSidebarReverse className="h-20px w-20px right-4px md:right-10px text-neutral-700" />
                    </Tools.Borderless>
                </Layout.Top.RightSide>
            </Layout.Top.Row>
        </div>
    )
}

export { Main, Books, Selection }

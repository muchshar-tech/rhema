import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import { BiChevronLeft, BiFontSize } from 'react-icons/bi'
import { BsLayoutTextSidebarReverse } from 'react-icons/bs'
import { __ } from '@wordpress/i18n'

import * as FieldSchama from '@components/schema'
import {
    switchHeadersMain,
    changeFontSize,
    switchHeadersSearch,
    changeSearchPaged,
    inputSearchKeywords,
} from '@assets/js/frontend/states/generalSlice'

import { queryStringModifier } from '@assets/js/frontend/utilities'
import * as Layout from '@components/frontend/layouts'
import * as Tools from '@components/frontend/tools'
import * as Tabs from '@components/frontend/tabs'
import RHEMA_LOCALIZE from 'RHEMA_LOCALIZE'

const Main = () => {
    const dispatch = useDispatch()
    const showMainHeader = useSelector(
        (state) => state.general.headersSwitch.main
    )
    const showSearchHeader = useSelector(
        (state) => state.general.headersSwitch.search
    )
    const queryString = useSelector((state) => state.data.readingQuerys)
    const classNames = [
        ...(showMainHeader || showSearchHeader ? ['flex'] : ['hidden']),
        'ralative',
        'py-11px',
        'px-12px',
        'md:py-10px',
        'justify-between',
    ].join(' ')

    const searchFormMethods = useForm({
        defaultValues: {
            words: '',
        },
        resolver: joiResolver(FieldSchama.searchBibleRawsByKeyword),
    })

    const { register, formState, handleSubmit } = searchFormMethods
    const { isSubmitting: isSearching, errors } = formState

    const onSubmit = async (data) => {
        console.log(data)
        dispatch(inputSearchKeywords(data.words))
        dispatch(changeSearchPaged(1))
        dispatch(switchHeadersSearch())
    }

    const onClickFontSize = () => {
        dispatch(changeFontSize())
    }

    return (
        <Layout.Top.Row className={classNames}>
            <Layout.Top.LeftSide>
                {showMainHeader ? (
                    <Tools.BooksSelectorButton
                        range={queryStringModifier(queryString)}
                    />
                ) : (
                    <Tools.Borderless
                        onClick={() => dispatch(switchHeadersMain())}
                    >
                        <BiChevronLeft className="h-20px w-20px right-4px md:right-10px text-neutral-700" />
                    </Tools.Borderless>
                )}
            </Layout.Top.LeftSide>
            <Layout.Top.RightSide>
                <Tools.SearchBar
                    expand={showSearchHeader}
                    onSubmit={handleSubmit(onSubmit)}
                    {...register('words', {
                        required: true,
                    })}
                />

                {!showSearchHeader ? (
                    <>
                        <Tools.FullScreenToggle />
                        <Tools.Borderless onClick={onClickFontSize}>
                            <BiFontSize className="h-20px w-20px right-4px md:right-10px text-neutral-700" />
                        </Tools.Borderless>
                        {/* <Tools.Borderless
                            onClick={() =>
                                dispatch(
                                    toggleDrawer({ name: 'relative-posts' })
                                )
                            }
                        >
                            <BsLayoutTextSidebarReverse className="h-20px w-20px right-4px md:right-10px text-neutral-700" />
                        </Tools.Borderless> */}
                    </>
                ) : null}
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
                    {__(`bible-directory`, RHEMA_LOCALIZE.RHEMA_DOMAIN_TEXT)}
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

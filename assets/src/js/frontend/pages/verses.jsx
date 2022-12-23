import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'

import * as Layout from '@components/frontend/layouts'
import * as Headers from '@components/frontend/headers'
import * as Paragraph from '@components/frontend/paragraph'
import * as Books from '@components/frontend/books'
import * as Forms from '@components/frontend/forms'
import { DrawerTitle } from '@components/frontend/components'
import { useGetBibleRawQuery } from '@components/frontend/services'
import { generateRestRangeParam } from '@assets/js/frontend/utilities'
import { loadRaws } from '@assets/js/frontend/states/dataSlice'

const Container = ({ raws, selected, isFetching, loadingLine }) => {
    // console.log('Run Memo', raws, loadingLine)
    const isLoading = isFetching && loadingLine > 0
    return (
        <Layout.AppContainer>
            <Layout.Top>
                <Headers.Main />
                <Headers.Books />
                <Headers.Selection />
            </Layout.Top>
            <Layout.Body>
                <Books.List />
                <Layout.Content>
                    <Layout.Page>
                        <Paragraph.Block>
                            {isLoading ? (
                                <Skeleton inline={true} count={loadingLine} />
                            ) : (
                                raws.map((raw) => (
                                    <Paragraph.Line
                                        active={selected.some(
                                            (selectedRaw) =>
                                                selectedRaw.id === raw.id
                                        )}
                                        id={raw.id}
                                        key={raw.id}
                                        verseNum={raw.verse}
                                    >
                                        {raw.text}
                                    </Paragraph.Line>
                                ))
                            )}
                        </Paragraph.Block>
                    </Layout.Page>
                    <Layout.Page></Layout.Page>
                </Layout.Content>
                <Layout.Drawer name="new-post">
                    <Forms.Posts />
                </Layout.Drawer>
                <Layout.Drawer className="p-2" name="relative-posts">
                    <DrawerTitle>此段聖經相關文章</DrawerTitle>
                </Layout.Drawer>
                <Layout.Drawer
                    className="p-2 content-start flex-wrap"
                    name="selected-raws"
                >
                    <DrawerTitle>已選擇的經文</DrawerTitle>
                    <Layout.Drawer.SelectedRaw />
                </Layout.Drawer>
            </Layout.Body>
        </Layout.AppContainer>
    )
}

const MemoContainer = React.memo(Container, (prev, next) => {
    if (prev.isFetching !== next.isFetching) {
        return false
    }
    if (prev.loadingLine !== next.loadingLine) {
        return false
    }
    if (prev.raws.length !== next.raws.length) {
        return false
    }
    if (
        next.raws.some((raw, index) => {
            return raw.id !== prev.raws[index].id
        })
    ) {
        return false
    }
    if (prev.selected.length !== next.selected.length) {
        return false
    }
    if (next.error) {
        return false
    }
    return true
})

export const Verses = () => {
    const dispatch = useDispatch()
    const params = useParams()
    const urlParams = generateRestRangeParam(params)
    const queryString = useSelector((state) => state.data.queryString)
    const { current } = useSelector((state) => state.data.raws)
    const selected = useSelector((state) => state.selected.raws)
    const { data, error, isFetching } = useGetBibleRawQuery({
        ranges: urlParams,
        withPrevChapter: true,
        withNextChapter: true,
    })
    const currentQueryMaxVerseNumber = queryString[queryString.length - 1].verse
    const loadingLine = isFetching ? currentQueryMaxVerseNumber : 0
    useEffect(() => {
        if (data && Object.keys(data).length > 0) {
            dispatch(loadRaws(data))
        }
    }, [data])
    return (
        <MemoContainer
            raws={current}
            selected={selected}
            isFetching={isFetching}
            loadingLine={loadingLine}
            error={error}
        />
    )
}

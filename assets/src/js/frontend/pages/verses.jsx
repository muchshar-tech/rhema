import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import * as Layout from '@components/frontend/layouts'
import * as Headers from '@components/frontend/headers'
import * as Paragraph from '@components/frontend/paragraph'
import * as Books from '@components/frontend/books'
import * as Forms from '@components/frontend/forms'
import { DrawerTitle } from '@components/frontend/components'
import { useGetBibleRawQuery } from '@components/frontend/services'
import { generateRestRangeParam } from '@assets/js/frontend/utilities'
import { loadRaws } from '@assets/js/frontend/states/dataSlice'

const Container = ({ raws, isLoading }) => {
    console.log('Run Memo', raws, isLoading)
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
                            {raws.map((raw) => (
                                <Paragraph.Line
                                    key={raw.id}
                                    verseNum={raw.verse}
                                >
                                    {raw.text}
                                </Paragraph.Line>
                            ))}
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
            </Layout.Body>
        </Layout.AppContainer>
    )
}

const MemoContainer = React.memo(Container, (prev, next) => {
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
    return true
})

export const Verses = () => {
    const dispatch = useDispatch()
    const params = useParams()
    const rangeParams = generateRestRangeParam(params)
    const { current } = useSelector((state) => state.data.raws)
    const { data, error, isLoading } = useGetBibleRawQuery({
        ranges: rangeParams,
        withPrevChapter: true,
        withNextChapter: true,
    })

    useEffect(() => {
        if (data && Object.keys(data).length > 0) {
            dispatch(loadRaws(data))
        }
    }, [data])
    return <MemoContainer raws={current} isLoading={isLoading} error={error} />
}

import React from 'react'

import * as Layout from '@components/frontend/layouts'
import * as Headers from '@components/frontend/headers'
import * as Paragraph from '@components/frontend/paragraph'
import * as Books from '@components/frontend/books'
import * as Search from '@components/frontend/search'

const Container = ({}) => {
    return (
        <Layout.AppContainer>
            <Layout.Top>
                <Headers.Main />
                <Headers.Books />
                <Headers.Selection />
            </Layout.Top>
            <Layout.Body>
                <Books.List />
                <Search.Results />
                HOME
            </Layout.Body>
        </Layout.AppContainer>
    )
}

const MemoContainer = React.memo(Container, (prev, next) => {
    return true
})

export const Home = () => {
    return <MemoContainer />
}

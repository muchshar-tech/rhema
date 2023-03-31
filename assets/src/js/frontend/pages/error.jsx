import React from 'react'
import RHEMA_LOCALIZE from 'RHEMA_LOCALIZE'

import * as Layout from '@components/frontend/layouts'
import { ERROR_MESSAGE_MAPPING } from '@components/constants'

export const Error = ({ error, resetErrorBoundary }) => {
    const style = `:host, :root {display:block;margin: 24px auto; font-size: 16px;}`
    const pluginFrontendCssUrl = RHEMA_LOCALIZE.RHEMA_FRONTEND_CSS_URL
    const { message } = error
    const displayMsg = ERROR_MESSAGE_MAPPING.hasOwnProperty(message)
        ? ERROR_MESSAGE_MAPPING[message]
        : message
    return (
        <Layout.AppContainer>
            <style>
                @import '{pluginFrontendCssUrl}'; @import
                url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap');
                {style}
            </style>
            <Layout.Body>
                <Layout.Content>
                    <Layout.Page>{displayMsg}</Layout.Page>
                </Layout.Content>
            </Layout.Body>
        </Layout.AppContainer>
    )
}

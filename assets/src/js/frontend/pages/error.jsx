import React from 'react'
import RHEMA_LOCALIZE from 'RHEMA_LOCALIZE'

import * as Layout from '@components/frontend/layouts'

export const Error = ({ error, resetErrorBoundary }) => {
    const style = `:host, :root {display:block;margin: 24px auto; font-size: 16px;}`
    const pluginFrontendCssUrl = RHEMA_LOCALIZE.RHEMA_FRONTEND_CSS_URL
    return (
        <Layout.AppContainer>
            <style>
                @import '{pluginFrontendCssUrl}'; @import
                url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap');
                {style}
            </style>
            Error
            <pre>{error.message}</pre>
        </Layout.AppContainer>
    )
}

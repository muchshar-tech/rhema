import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import RHEMA_LOCALIZE from 'RHEMA_LOCALIZE'

import * as Pages from './pages'
import { generateVerseUrl, generateRandomlyChapter } from './utilities'

const App = () => {
    const style = `:host, :root {display:block;margin: 24px auto; font-size: 16px;}`
    const pluginFrontendCssUrl = RHEMA_LOCALIZE.RHEMA_FRONTEND_CSS_URL
    if (RHEMA_LOCALIZE.RHEMA_INITAIL_DATA.hasOwnProperty('ERROR')) {
        throw new Error(RHEMA_LOCALIZE.RHEMA_INITAIL_DATA.ERROR)
    }

    return (
        <BrowserRouter basename={RHEMA_LOCALIZE.RHEMA_SITE_ROOT}>
            <style>
                @import '{pluginFrontendCssUrl}'; @import
                url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap');
                {style}
            </style>
            <Routes>
                <Route path="/bible">
                    <Route path=":books1">
                        <Route path=":verse1" element={<Pages.Verses />} />
                        <Route
                            path=":verse1/-/:books2/:verse2"
                            element={<Pages.Verses />}
                        />
                        <Route index element={<Pages.Chapters />} />
                    </Route>
                    <Route path="error" element={<Pages.Error />} />
                    <Route index element={<Pages.RandomlyChapter />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MemoryRouter, Routes, Route, Navigate } from 'react-router-dom'

import RHEMA_LOCALIZE from 'RHEMA_LOCALIZE'
import * as Pages from '@components/frontend/pages'

const style = `:host, :root {display:block;margin: 0; font-size: 16px;}`
const pluginFrontendCssUrl = RHEMA_LOCALIZE.RHEMA_BLOCK_EDITOR_CSS_URL

const BibleSelector = () => {
    return (
        <MemoryRouter>
            <style>
                @import '{pluginFrontendCssUrl}';
                @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap');
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
                </Route>
                <Route index element={<Pages.RandomlyChapter />} />
            </Routes>
        </MemoryRouter>
    )
}

export default BibleSelector

/**
 * SASS
 */
import '../postcss/frontend.pcss'
import 'react-loading-skeleton/dist/skeleton.css'


/**
 * JavaScript
 */
import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import ReactShadowRoot from 'react-shadow-root'

import App from './frontend/App'
import { store } from './frontend/store'

/**
 * Add here your JavasScript code
 */

const container = document.getElementById('bible-app')
if (!!container && container instanceof HTMLElement) {
    const root = createRoot(container)
    root.render(
        <ReactShadowRoot>
            <Provider store={store}>
                <App className="bible_app" />
            </Provider>
        </ReactShadowRoot>
    )
}

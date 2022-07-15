/**
 * SASS
 */
import '../postcss/frontend.pcss'

/**
 * JavaScript
 */
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './frontend/App'
import { store } from './frontend/store'
import { Provider } from 'react-redux'
import ReactShadowRoot from 'react-shadow-root'

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

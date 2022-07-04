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

/**
 * Add here your JavasScript code
 */

const container = document.getElementById('bible-app')
const shadow = container.attachShadow({ mode: 'open' })
if (!!container && container instanceof HTMLElement) {
    const root = createRoot(shadow)
    root.render(
        <Provider store={store}>
            <App className="bible_app" />
        </Provider>
    )
}

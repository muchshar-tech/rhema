/**
 * SASS
 */
import '../postcss/backend.pcss'

/**
 * JavaScript
 */
import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './backend/App'

import { store } from './backend/store'

/**
 * Add here your JavasScript code
 */

const container = document.getElementById('rhema-app')
if (!!container && container instanceof HTMLElement) {
    const root = createRoot(container)
    root.render(
        <Provider store={store}>
            <App />
        </Provider>
    )
}

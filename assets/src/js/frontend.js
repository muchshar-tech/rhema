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
import { ErrorBoundary } from 'react-error-boundary'
import ReactShadowRoot from 'react-shadow-root'

import App from './frontend/App'
import { store } from './frontend/store'
import * as Pages from './frontend/pages'

/**
 * Add here your JavasScript code
 */

const container = document.getElementById('bible-app')
if (!!container && container instanceof HTMLElement) {
    const root = createRoot(container)
    root.render(
        <ReactShadowRoot>
            <Provider store={store}>
                <ErrorBoundary FallbackComponent={Pages.Error}>
                    <App className="bible_app" />
                </ErrorBoundary>
            </Provider>
        </ReactShadowRoot>
    )
}

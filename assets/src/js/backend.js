/**
 * SASS
 */
import '../postcss/backend.pcss'

/**
 * JavaScript
 */
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './backend/App'

/**
 * Add here your JavasScript code
 */

const container = document.getElementById('rhema-app')
const root = createRoot(container)
root.render(<App />)

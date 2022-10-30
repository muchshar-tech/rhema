import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import generalReducer from './states/generalSlice'

export const store = configureStore({
    reducer: {
        general: generalReducer,
    },
})

setupListeners(store.dispatch)
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { bibleApi } from './services'
import generalReducer from './states/generalSlice'
import dataReducer from './states/dataSlice'
import selectedReducer from './states/selectedSlice'

export const store = configureStore({
    reducer: {
        general: generalReducer,
        data: dataReducer,
        selected: selectedReducer,
        [bibleApi.reducerPath]: bibleApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(bibleApi.middleware),
})

setupListeners(store.dispatch)
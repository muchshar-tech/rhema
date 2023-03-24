import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { bibleApi, searchApi } from '../services'
import generalReducer from './states/generalSlice'
import dataReducer from './states/dataSlice'
import selectedReducer from './states/selectedSlice'

export const store = configureStore({
    reducer: {
        general: generalReducer,
        data: dataReducer,
        selected: selectedReducer,
        [bibleApi.reducerPath]: bibleApi.reducer,
        [searchApi.reducerPath]: searchApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([bibleApi.middleware, searchApi.middleware]),
})

setupListeners(store.dispatch)
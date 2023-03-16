import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import {
    optionsApi,
    activateApi,
    deactivateApi,
    signinApi,
    ordersApi,
} from '@components/services'
import generalReducer from './states/generalSlice'
import accountReducer from './states/accountSlice'

export const store = configureStore({
    reducer: {
        general: generalReducer,
        account: accountReducer,
        [optionsApi.reducerPath]: optionsApi.reducer,
        [activateApi.reducerPath]: activateApi.reducer,
        [deactivateApi.reducerPath]: deactivateApi.reducer,
        [signinApi.reducerPath]: signinApi.reducer,
        [ordersApi.reducerPath]: ordersApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            optionsApi.middleware,
            activateApi.middleware,
            deactivateApi.middleware,
            signinApi.middleware,
            ordersApi.middleware,
        ]),
})

setupListeners(store.dispatch)

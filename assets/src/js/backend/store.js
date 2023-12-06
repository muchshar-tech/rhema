import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import {
    optionsApi,
    activateApi,
    deactivateApi,
    signinApi,
    sendVerifyApi,
    sendForgotApi,
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
        [sendVerifyApi.reducerPath]: sendVerifyApi.reducer,
        [sendForgotApi.reducerPath]: sendForgotApi.reducer,
        [ordersApi.reducerPath]: ordersApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            optionsApi.middleware,
            activateApi.middleware,
            deactivateApi.middleware,
            signinApi.middleware,
            sendVerifyApi.middleware,
            sendForgotApi.middleware,
            ordersApi.middleware,
        ]),
})

setupListeners(store.dispatch)

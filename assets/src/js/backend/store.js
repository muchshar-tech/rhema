import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { activateApi, deactivateApi, signinApi } from '@components/services'
import generalReducer from './states/generalSlice'
import accountReducer from './states/accountSlice'

export const store = configureStore({
    reducer: {
        general: generalReducer,
        account: accountReducer,
        [activateApi.reducerPath]: activateApi.reducer,
        [deactivateApi.reducerPath]: deactivateApi.reducer,
        [signinApi.reducerPath]: signinApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(activateApi.middleware),
})

setupListeners(store.dispatch)

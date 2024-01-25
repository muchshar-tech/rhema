import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { bibleApi, searchApi } from '../services'
import generalReducer, { initialState as generalState } from './states/generalSlice'
import dataReducer, { initialState as dataState } from './states/dataSlice'
import selectedReducer, { initialState as selectedState } from './states/selectedSlice'

const initialStore = (state = {}) => {
    const store = configureStore({
        reducer: {
            general: generalReducer,
            data: dataReducer,
            selected: selectedReducer,
            [bibleApi.reducerPath]: bibleApi.reducer,
            [searchApi.reducerPath]: searchApi.reducer,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat([bibleApi.middleware, searchApi.middleware]),
        preloadedState: {
            general: generalState(state?.general),
            data: dataState(state?.data),
            selected: selectedState(state?.selected),
        },
    })
    setupListeners(store.dispatch)
    return store
}
export class Store {
    static instance = null;
    constructor(state = {}) {
        if (!Store.instance) {
            Store.instance = initialStore(state);
        }
        return Store.instance;
    }
}


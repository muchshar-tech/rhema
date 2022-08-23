import { configureStore } from '@reduxjs/toolkit'
import generalReducer from './states/generalSlice'
import dataReducer from './states/dataSlice'

export const store = configureStore({
    reducer: {
        general: generalReducer,
        data: dataReducer
    },
})

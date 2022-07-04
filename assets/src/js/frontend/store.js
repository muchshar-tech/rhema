import { configureStore } from '@reduxjs/toolkit'
import generalReducer from './states/generalSlice'

export const store = configureStore({
    reducer: {
        general: generalReducer,
    },
})

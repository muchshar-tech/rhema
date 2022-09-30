import { createSlice } from '@reduxjs/toolkit'
import RHEMA_LOCALIZE from 'RHEMA_LOCALIZE'

const initialState = {
    raws: {
        prev: [],
        current: RHEMA_LOCALIZE.RHEMA_INITAIL_DATA.RAW || [],
        next: [],
    },
    books: RHEMA_LOCALIZE.RHEMA_INITAIL_DATA.BOOKS || [],
    queryString: RHEMA_LOCALIZE.RHEMA_INITAIL_DATA.QUERYS,
    translation: {
        abbr: RHEMA_LOCALIZE.RHEMA_INITAIL_DATA.TRANSLATION.ABBR,
        info: RHEMA_LOCALIZE.RHEMA_INITAIL_DATA.TRANSLATION.INFO,
    },
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        loadRaws: (state, action) => {
            const { payload } = action
            state.raws = payload
        },
        insertRaw: (state, action) => {
            const { payload } = action
            state.raws.push(payload)
        },
        updateQueryString: (state, action) => {
            const { payload } = action
            state.queryString = payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { loadRaws, insertRaw } = dataSlice.actions

export default dataSlice.reducer

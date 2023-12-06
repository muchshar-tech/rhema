import { createSlice } from '@reduxjs/toolkit'
import RHEMA_LOCALIZE from 'RHEMA_LOCALIZE'

const initialQuery = RHEMA_LOCALIZE.RHEMA_INITAIL_DATA?.QUERYS

const initialState = {
    raws: RHEMA_LOCALIZE.RHEMA_INITAIL_DATA?.RAW || [],
    books: RHEMA_LOCALIZE.RHEMA_INITAIL_DATA?.BOOKS || [],
    readingQuerys: initialQuery,
    translation: {
        abbr: RHEMA_LOCALIZE.RHEMA_INITAIL_DATA?.TRANSLATION?.ABBR,
        info: RHEMA_LOCALIZE.RHEMA_INITAIL_DATA?.TRANSLATION?.INFO,
    },
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        loadRaws: (state, action) => {
            const { payload } = action

            const newDiffRaws = [...payload].filter((newFetchedRaw) => {
                return 0 > state.raws.findIndex(
                    (fetchedRaw) =>
                        fetchedRaw.book === newFetchedRaw.book &&
                        fetchedRaw.chapter === newFetchedRaw.chapter &&
                        fetchedRaw.verse === newFetchedRaw.verse
                )
            })
            const prepareRaws = [...state.raws, ...newDiffRaws].sort(function (
                a,
                b
            ) {
                return a.id - b.id
            })
            state.raws = prepareRaws
        },
        insertRaw: (state, action) => {
            const { payload } = action
            state.raws.push(payload)
        },
        updateReadingQuerys: (state, action) => {
            const { payload } = action
            state.readingQuerys = payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { loadRaws, insertRaw, updateReadingQuerys } = dataSlice.actions

export default dataSlice.reducer

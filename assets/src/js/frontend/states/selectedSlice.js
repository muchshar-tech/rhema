import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    raws: [],
}

export const selectedSlice = createSlice({
    name: 'selected',
    initialState,
    reducers: {
        putRaw: (state, action) => {
            const { payload } = action
            console.log(payload)
            state.raws.push(payload)
            state.raws.sort((a, b) => {
                if (a.id < b.id) {
                    return -1
                }
                if (a.id > b.id) {
                    return 1
                }
                return 0
            })
        },
        delRaw: (state, action) => {
            const { payload } = action
            const targetID = payload.id
            const targetIndex = state.raws.findIndex(
                (raw) => raw.id === targetID
            )
            state.raws.splice(targetIndex, 1)
        },
        clearRaw: (state) => {
            state.raws = []
        },
    },
})

// Action creators are generated for each case reducer function
export const { putRaw, delRaw, clearRaw } = selectedSlice.actions

export default selectedSlice.reducer

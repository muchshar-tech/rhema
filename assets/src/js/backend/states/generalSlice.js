import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    fullscreen: false,
}

export const generalSlice = createSlice({
    name: 'general',
    initialState,
    reducers: {
        toggleScreen: (state) => {
            state.fullscreen = !state.fullscreen
        },
    },
})

// Action creators are generated for each case reducer function
export const { toggleScreen } = generalSlice.actions

export default generalSlice.reducer

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    fullscreen: 0,
}

export const generalSlice = createSlice({
    name: 'general',
    initialState,
    reducers: {
        toggleScreen: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.fullscreen = !state.fullscreen
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { toggleScreen, incrementByAmount } = generalSlice.actions

export default generalSlice.reducer

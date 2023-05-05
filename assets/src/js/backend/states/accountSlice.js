import { createSlice } from '@reduxjs/toolkit'
import {
    retrieveLogosSignedToken,
    setLogosSignedToken,
    removeLogosSignedToken,
} from '@components/common'

const initialState = {
    token: retrieveLogosSignedToken(sessionStorage),
}

export const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        addSigninToken: (state, action) => {
            const { token } = action.payload
            setLogosSignedToken(sessionStorage, token)
            state.token = token
            console.log(token, state)
        },
        deleteSigninToken: (state) => {
            removeLogosSignedToken(sessionStorage)
            state.token = null
        },
    },
})

export const { addSigninToken, deleteSigninToken } = accountSlice.actions

export default accountSlice.reducer

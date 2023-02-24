import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    token: sessionStorage.getItem('logos.token'),
}

export const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        addSigninToken: (state, action) => {
            const { token } = action.payload
            console.log(token)
            sessionStorage.setItem('logos.token', token)
            state = { token }
        },
        delelteSigninToken: (state) => {
            sessionStorage.removeItem('logos.token')
            state.token = null
        },
    },
})

export const { addSigninToken, delelteSigninToken } = accountSlice.actions

export default accountSlice.reducer

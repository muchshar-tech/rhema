import { createSlice } from '@reduxjs/toolkit'
import RHEMA_LOCALIZE from 'RHEMA_LOCALIZE'

const initialState = {
    licenses: RHEMA_LOCALIZE.RHEMA_BACKEND.LICENSES,
}

export const generalSlice = createSlice({
    name: 'general',
    initialState,
    reducers: {
        addLicense: (state, action) => {
            const { bible } = action.payload
            console.log(bible)
            state.licenses = { bible }
        },
        deleteLicense: (state, action) => {
            const { bible } = action.payload
            if (bible.key !== state.licenses.bible.key) {
                return state
            }
            state.licenses.bible = {
                key: '',
                renew_date: null,
                data: null,
            }
        },
    },
})

// Action creators are generated for each case reducer function
export const { addLicense, deleteLicense } = generalSlice.actions

export default generalSlice.reducer

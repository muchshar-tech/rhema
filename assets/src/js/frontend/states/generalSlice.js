import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    fullscreen: false,
    headersSwitch: {
        main: true,
        books: false,
        selection: false,
    },
    booksSelector: {
        books: true,
        chapters: false,
        verses: false,
    },
}

export const generalSlice = createSlice({
    name: 'general',
    initialState,
    reducers: {
        toggleScreen: (state) => {
            state.fullscreen = !state.fullscreen
        },
        switchHeadersMain: (state) => {
            state.headersSwitch.main = true
            state.headersSwitch.books = false
            state.headersSwitch.selection = false
        },
        switchHeadersBooks: (state) => {
            state.headersSwitch.main = false
            state.headersSwitch.books = true
            state.headersSwitch.selection = false
        },
        switchHeadersSelection: (state) => {
            state.headersSwitch.main = false
            state.headersSwitch.books = false
            state.headersSwitch.selection = true
        },
        booksSelectorToggle: (state) => {
            state.headersSwitch.books = !state.headersSwitch.books
        },
        booksSelectorBooks: (state) => {
            state.booksSelector.chapters = false
            state.booksSelector.verses = false
            state.booksSelector.books = !state.booksSelector.books
        },
        booksSelectorChapters: (state) => {
            state.booksSelector.chapters = !state.booksSelector.chapters
            state.booksSelector.verses = false
            state.booksSelector.books = false
        },
        booksSelectorVerses: (state) => {
            state.booksSelector.chapters = false
            state.booksSelector.verses = !state.booksSelector.verses
            state.booksSelector.books = false
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const {
    toggleScreen,
    switchHeadersMain,
    switchHeadersBooks,
    switchHeadersSelection,
    booksSelectorBooks,
    booksSelectorChapters,
    booksSelectorVerses,
    incrementByAmount,
} = generalSlice.actions

export default generalSlice.reducer
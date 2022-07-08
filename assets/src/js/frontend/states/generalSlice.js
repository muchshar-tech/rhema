import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    fullscreen: false,
    booksSelector: {
        toggle: false,
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
        booksSelectorToggle: (state) => {
            state.booksSelector.toggle = !state.booksSelector.toggle
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
    booksSelectorToggle,
    booksSelectorBooks,
    booksSelectorChapters,
    booksSelectorVerses,
    incrementByAmount,
} = generalSlice.actions

export default generalSlice.reducer

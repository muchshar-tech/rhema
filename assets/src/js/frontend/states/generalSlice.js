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
    currentSelection: {
        books: '',
        chapters: '',
        verse: '',
    },
    drawer: {},
}

export const generalSlice = createSlice({
    name: 'general',
    initialState,
    reducers: {
        toggleScreen: (state) => {
            state.fullscreen = !state.fullscreen
        },
        toggleDrawer: (state, action) => {
            const { name: drawerName } = action.payload
            if (!drawerName) {
                return
            }
            state.drawer = {
                ...state.drawer,
                [drawerName]: !state.drawer[drawerName],
            }
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
        currentSelection: (state, action) => {
            const { payload } = action
            const payloadKeys = Object.keys(payload)
            const currentClickBookChapterVerses = payloadKeys.indexOf('verses') !== -1 ? 'verses' : payloadKeys.indexOf('chapters') !== -1 ? 'chapters' : payloadKeys.indexOf('books') !== -1 ? 'books' : false
            if (typeof currentClickBookChapterVerses === 'string') {
                switch (currentClickBookChapterVerses) {
                    case 'books':
                        state.booksSelector.chapters = !state.booksSelector.chapters
                        state.booksSelector.verses = false
                        state.booksSelector.books = false
                        break;
                    case 'chapters':
                        state.booksSelector.chapters = false
                        state.booksSelector.verses = !state.booksSelector.verses
                        state.booksSelector.books = false
                        break;
                    case 'verses':
                        console.log('selected verses!')
                        break;
                }
            }
            state.currentSelection = { ...state.currentSelection, ...payload }
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const {
    toggleScreen,
    toggleDrawer,
    switchHeadersMain,
    switchHeadersBooks,
    switchHeadersSelection,
    booksSelectorBooks,
    booksSelectorChapters,
    booksSelectorVerses,
    currentSelection,
    incrementByAmount,
} = generalSlice.actions

export default generalSlice.reducer

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    fullscreen: false,
    headersSwitch: {
        main: true,
        books: false,
        selection: false,
        search: false,
    },
    booksSelector: {
        books: true,
        chapters: false,
        verses: false,
    },
    currentSelection: {
        books: '',
        chapters: '',
        verses: '',
    },
    searchKeywords: {
        current: '',
        history: [],
    },
    drawer: {},
}

const disableAllHeader = (headersSwitch) => {
    Object.keys(headersSwitch).forEach((key) => {
        headersSwitch[key] = false
    })
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
            disableAllHeader(state.headersSwitch)
            state.headersSwitch.main = true
            Object.keys(state.drawer).forEach((key) => {
                state.drawer[key] = false
            })
        },
        switchHeadersBooks: (state) => {
            disableAllHeader(state.headersSwitch)
            state.headersSwitch.books = true
        },
        switchHeadersSelection: (state) => {
            disableAllHeader(state.headersSwitch)
            state.headersSwitch.selection = true
        },
        switchHeadersSearch: (state) => {
            disableAllHeader(state.headersSwitch)
            state.headersSwitch.search = true
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
            const currentClickBookChapterVerses =
                payloadKeys.indexOf('verses') !== -1
                    ? 'verses'
                    : payloadKeys.indexOf('chapters') !== -1
                    ? 'chapters'
                    : payloadKeys.indexOf('books') !== -1
                    ? 'books'
                    : false
            if (typeof currentClickBookChapterVerses === 'string') {
                switch (currentClickBookChapterVerses) {
                    case 'books':
                        state.booksSelector.chapters =
                            !state.booksSelector.chapters
                        state.booksSelector.verses = false
                        state.booksSelector.books = false
                        state.currentSelection.chapters = ''
                        break
                    case 'chapters':
                        state.booksSelector.chapters = false
                        state.booksSelector.verses = !state.booksSelector.verses
                        state.booksSelector.books = false
                        break
                    case 'verses':
                        state.headersSwitch.main = true
                        state.headersSwitch.books = false
                        state.booksSelector.chapters = false
                        state.booksSelector.verses = false
                        state.booksSelector.books = true
                        break
                }
            }
            state.currentSelection = { ...state.currentSelection, ...payload }
        },
        inputSearchKeywords: (state, action) => {
            const { payload } = action
            if (
                !!state.searchKeywords.current &&
                state.searchKeywords.current.length > 0 &&
                payload !== state.searchKeywords.current
            ) {
                state.searchKeywords.history.push(state.searchKeywords.current)
            }
            state.searchKeywords.current = payload
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
    switchHeadersSearch,
    booksSelectorBooks,
    booksSelectorChapters,
    booksSelectorVerses,
    currentSelection,
    inputSearchKeywords,
    incrementByAmount,
} = generalSlice.actions

export default generalSlice.reducer

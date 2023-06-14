import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    fullscreen: false,
    isAfterReload: true,
    pageSwipper: {
        pagePos: 1,
        onTransition: true,
    },
    displaySetting: {
        fontSize: 'md',
    },
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
    search: {
        keywords: {
            current: '',
            history: [],
        },
        paged: 1,
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
            state.booksSelector.chapters = false
            state.booksSelector.verses = false
            state.booksSelector.books = true
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
            state.booksSelector = {
                chapters: false,
                verses: false,
                books: true,
            }
        },
        booksSelectorChapters: (state) => {
            state.booksSelector = {
                chapters: true,
                verses: false,
                books: false,
            }
        },
        booksSelectorVerses: (state) => {
            state.booksSelector = {
                chapters: false,
                verses: true,
                books: false,
            }
        },
        currentSelection: (state, action) => {
            const { payload } = action
            state.currentSelection = { ...state.currentSelection, ...payload }
        },
        clickBookSelector: (state, action) => {
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
            state.isAfterReload = false
            state.currentSelection = { ...state.currentSelection, ...payload }
        },
        inputSearchKeywords: (state, action) => {
            const { payload } = action
            if (
                !!state.search.keywords.current &&
                state.search.keywords.current.length > 0 &&
                payload !== state.search.keywords.current
            ) {
                state.search.keywords.history.push(
                    state.search.keywords.current
                )
            }
            if (state.search.keywords.history.includes(payload)) {
                state.search.keywords.history =
                    state.search.keywords.history.filter((item) => {
                        return item !== payload
                    })
            }
            state.search.keywords.current = payload
        },
        changeSearchPaged: (state, action) => {
            const { payload: paged } = action
            state.search.paged = paged
        },
        changeFontSize: (state) => {
            const sizes = ['sm', 'md', 'lg']
            const currentSizeIndex = sizes.indexOf(
                state.displaySetting.fontSize
            )
            const nextfontSize =
                currentSizeIndex + 1 > sizes.length - 1
                    ? sizes[0]
                    : sizes[currentSizeIndex + 1]
            state.displaySetting.fontSize = nextfontSize
        },
        updatePageSwipper: (state, action) => {
            const { payload } = action
            state.pageSwipper = { ...state.pageSwipper, ...payload }
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
    clickBookSelector,
    inputSearchKeywords,
    changeSearchPaged,
    changeFontSize,
    updatePageSwipper,
} = generalSlice.actions

export default generalSlice.reducer

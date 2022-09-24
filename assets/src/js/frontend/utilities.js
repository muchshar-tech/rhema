import { generatePath } from 'react-router-dom'

export const generateVerseUrl = (bookAbbr, chapter, number) => {
    return generatePath('/bible/:books/:verse', {
        'books': bookAbbr,
        'verse': `${chapter}:${number}`
    })
}

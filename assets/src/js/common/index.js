/**
 * 將相同的書、章的字串縮短
 * @param array queryString
 * @returns string
 */
export const queryStringModifier = (queryString = []) => {
    if (!queryString || !Array.isArray(queryString) || queryString.length === 0) {
        return ['聖經目錄']
    }
    if (queryString.length < 2) {
        return ['']
    }
    const rangeFrom = queryString[0]
    const rangeTo = queryString[1] ? queryString[1] : queryString[0]
    const isSameBook = rangeFrom.book.name === rangeTo.book.name
    const isSameChapter = rangeFrom.chapter === rangeTo.chapter
    let returnQueryString = [
        `${rangeFrom.book.name} ${rangeFrom.chapter}:${rangeFrom.verse}`,
    ]
    if (!!rangeTo && !!rangeTo.book && rangeTo.chapter && rangeTo.verse) {
        returnQueryString[0] += `-${isSameBook ? '' : rangeTo.book.name + ' '}${isSameChapter ? '' : rangeTo.chapter + ':'
            }${rangeTo.verse}`
    }
    return returnQueryString
}

export const retrieveLogosSignedToken = (sessionStorageApi) => {
    try {
        return sessionStorageApi.getItem('logos.token')
    } catch (e) {
        return ''
    }
}

export const setLogosSignedToken = (sessionStorageApi, token) => {
    try {
        sessionStorageApi.setItem('logos.token', token)
    } catch (e) {
        return false
    }
    return true
}

export const removeLogosSignedToken = (sessionStorageApi) => {
    try {
        sessionStorageApi.removeItem('logos.token')
    } catch (e) {
        return false
    }
    return true
}

export const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

export const localDateTime = (moment, value, timeZone = 0) => {
    if (
        !moment ||
        typeof moment !== 'function' ||
        Object.prototype.hasOwnProperty.call(moment, 'utcOffset') ||
        Object.prototype.hasOwnProperty.call(moment, 'format')
    ) {
        return value
    }
    return moment(value).utcOffset(timeZone).format('YYYY/MM/DD hh:mm:ss')
}
export const retrieveFontSize = (size) => {
    const sizeMap = {
        sm: 'text-14px',
        md: 'text-16px',
        lg: 'text-18px',
    }
    if (typeof sizeMap[size] === 'undefined') {
        return 'text-16px'
    }
    return sizeMap[size]
}
export const retrieveResponseFromRTK = (response) => {
    let code = ''
    let label = ''
    let message = 'There has been a critical error.'
    if (response) {
        console.log('response')
    }
    return {
        code,
        label,
        message,
    }
}
export const isJsonStr = (str) => {
    try {
        JSON.parse(str)
    } catch (e) {
        return false
    }
    return true
}

export const converterFilter = (raws, chapterNumber) => {
    return raws.filter((raw) => raw.chapter === chapterNumber)
}
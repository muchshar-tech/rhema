import React from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'

import { LinkVerse } from '@assets/js/frontend/components'
import { currentSelection } from '@assets/js/frontend/states/generalSlice'
import { updateQueryString } from '@assets/js/frontend/states/dataSlice'

export const Results = () => {
    const showSearchResults = useSelector(
        (state) => state.general.headersSwitch.search
    )
    const classNames = [
        ...(showSearchResults ? ['flex'] : ['hidden']),
        'flex-auto',
        'bg-white',
        'overflow-y-auto',
    ].join(' ')
    return (
        <div className={classNames}>
            Search Results
        </div>
    )
}
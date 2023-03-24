import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import Skeleton from 'react-loading-skeleton'

import * as Paragraph from '@components/frontend/paragraph'
import { Line, StringLabel, Button } from '@assets/js/frontend/components'
import { useSearchBibleRawsQuery } from '@components/services'
import { currentSelection } from '@assets/js/frontend/states/generalSlice'
import { updateQueryString } from '@assets/js/frontend/states/dataSlice'

export const Results = () => {
    const [paged, setPaged] = useState(1)
    const showSearchResults = useSelector(
        (state) => state.general.headersSwitch.search
    )
    const currentKeywords = useSelector(
        (state) => state.general.searchKeywords.current
    )
    const { data, error, isFetching } = useSearchBibleRawsQuery(
        {
            words: currentKeywords,
            paged,
        },
        {
            skip: currentKeywords.length === 0,
        }
    )
    const classNames = [
        ...(showSearchResults ? ['block'] : ['hidden']),
        'bg-white',
        'overflow-y-auto',
        'p-10',
    ].join(' ')

    const { hits, total } = data?.data?.hits || {
        hits: [],
        total: { value: 0 },
    }
    const loadingLine = 20 || 0
    return (
        <div className={classNames}>
            <StringLabel className={`block w-full mb-4`}>
                共 {isFetching ? '?' : total.value} 筆結果
            </StringLabel>
            <Paragraph.Block>
                <>
                    {hits.map(({ _source: raw }) => (
                        <Line
                            block={true}
                            id={raw.id}
                            key={raw.id}
                            bookAbbr={raw.book}
                            chapterNum={raw.chapter}
                            verseNum={raw.verse}
                        >
                            {raw.text}
                        </Line>
                    ))}
                    {isFetching ? (
                        <Skeleton inline={false} count={loadingLine} />
                    ) : null}
                </>
            </Paragraph.Block>
            <div className="w-full">
                <Button
                    onClick={() => {
                        setPaged(paged + 1)
                    }}
                >
                    讀取更多
                </Button>
            </div>
        </div>
    )
}

import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import Skeleton from 'react-loading-skeleton'

import * as Paragraph from '@components/frontend/paragraph'
import {
    Line,
    StringLabel,
    Button,
    KeywordLabel,
} from '@assets/js/frontend/components'
import { useSearchBibleRawsQuery } from '@components/services'
import {
    changeSearchPaged,
    inputSearchKeywords,
} from '@assets/js/frontend/states/generalSlice'

export const Results = () => {
    console.log('Results')
    const dispatch = useDispatch()
    const paged = useSelector((state) => state.general.search.paged)
    const history = useSelector(
        (state) => state.general.search.keywords.history
    )

    const showSearchResults = useSelector(
        (state) => state.general.headersSwitch.search
    )
    const currentKeywords = useSelector(
        (state) => state.general.search.keywords.current
    )
    const { data, currentData, error, isFetching, isLoading, isUninitialized } =
        useSearchBibleRawsQuery(
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

    const {
        hits,
        total: { value: total },
    } = data?.data?.hits || {
        hits: [],
        total: { value: 0 },
    }
    const loadingLine =
        (isLoading
            ? 20
            : Number(total) - hits.length > 20
            ? 20
            : Number(total) - hits.length) || 0
    const hasMore = total > hits.length

    const hasError = error && Object.keys(error).length > 0

    return (
        <div className={classNames}>
            {history.map((keyword, index) => {
                return (
                    <KeywordLabel
                        key={index}
                        onClick={() => {
                            dispatch(inputSearchKeywords(keyword))
                            dispatch(changeSearchPaged(1))
                        }}
                        className="text-zinc-400 mr-1 cursor-pointer"
                    >
                        {keyword}
                    </KeywordLabel>
                )
            })}
            <KeywordLabel className="text-rose-600">
                {currentKeywords}
            </KeywordLabel>
            <StringLabel className={`block w-full my-4`}>
                共 {isLoading ? '?' : total} 筆結果
            </StringLabel>
            <Paragraph.Block>
                <>
                    {hasError ? error.data.message : null}
                    {currentData
                        ? hits.map(({ _source: raw }) => (
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
                          ))
                        : null}
                    {isFetching ? (
                        <Skeleton inline={false} count={loadingLine} />
                    ) : null}
                </>
            </Paragraph.Block>
            <div
                className={['w-full', ...(!hasMore ? ['hidden'] : [])].join(
                    ' '
                )}
            >
                <Button
                    onClick={() => {
                        dispatch(changeSearchPaged(paged + 1))
                    }}
                >
                    讀取更多
                </Button>
            </div>
        </div>
    )
}

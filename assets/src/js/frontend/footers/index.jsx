import React from 'react'

import * as Layout from '@components/frontend/layouts'
import * as Tools from '@components/frontend/tools'

const ChapterControl = () => {
    

    return (
        <Layout.Top.Row className={classNames}>
            <Layout.Top.RightSide>
                <Tools.SearchBar
                    expand={showSearchHeader}
                    onSubmit={handleSubmit(onSubmit)}
                    {...register('words', {
                        required: true,
                    })}
                />
            </Layout.Top.RightSide>
        </Layout.Top.Row>
    )
}

export { ChapterControl }

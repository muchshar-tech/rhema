import React from 'react'
import { HiOutlineSearch } from 'react-icons/hi'

import Form from '@components/frontend/forms/Form'

const SearchBarInput = ({ expand, onSubmit, forwardRef, ...otherprops }) => {
    const inputClassNames = [
        'w-0',
        'h-24px',
        'outline-0',
        '!p-0',
        'line-height-24px',
        'group-hover:w-auto',
        ...(expand ? ['w-auto'] : []),
    ].join(' ')
    return (
        <Form onSubmit={onSubmit}>
            <div className="relative flex items-center justify-center overflow-hidden bg-white border border-gray-300 rounded-sm py-2px pl-5px pr-23px md:pl-9px md:pr-29px md:py-7px group">
                <input
                    placeholder="輸入關鍵字進行搜尋"
                    type="text"
                    autoComplete="off"
                    className={inputClassNames}
                    {...(!!forwardRef ? { ref: forwardRef } : {})}
                    {...(!!otherprops ? otherprops : {})}
                />
                <HiOutlineSearch className="absolute h-20px w-20px right-4px md:right-10px text-neutral-600" />
            </div>
        </Form>
    )
}

export default SearchBarInput

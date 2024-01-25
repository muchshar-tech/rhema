import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { useSelect, useMultipleSelection } from 'downshift'
import Ripples from 'react-ripples'

import { toggleDrawer } from '@assets/js/frontend/states/generalSlice'
import Form from '@components/frontend/forms/Form'

const FieldRow = ({ className: extraClassname = '', children }) => {
    const classNames = [
        'w-full',
        'border-b',
        ...extraClassname.split(' '),
    ].join(' ')
    return <div className={classNames}>{children}</div>
}

const CategorySelector = ({ options }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [highlightedIndex, setHighlightedIndex] = useState(false)
    const {
        getSelectedItemProps,
        getDropdownProps,
        addSelectedItem,
        removeSelectedItem,
        selectedItems,
    } = useMultipleSelection({ initialSelectedItems: [options[0], options[1]] })

    const getFilteredItems = (items) =>
        items.filter((item) => selectedItems.indexOf(item) < 0)

    return (
        <div>
            <div
                onBlur={() => {
                    setIsOpen(false)
                }}
                onClick={(e) => {
                    e.preventDefault()
                    setIsOpen(!isOpen)
                }}
                tabIndex="-1"
                className="flex flex-wrap items-center px-10px pb-3px"
            >
                {selectedItems.map((selectedItem, index) => (
                    <span
                        key={`selected-item-${index}`}
                        className="py-7px px-5px mr-5px leading-20px mt-3px bg-gray-200 rounded-md overflow-hidden"
                        {...getSelectedItemProps({
                            selectedItem,
                            index,
                        })}
                    >
                        {selectedItem}
                        <span
                            onClick={(e) => {
                                e.stopPropagation()
                                removeSelectedItem(selectedItem)
                            }}
                            className="ml-3px"
                        >
                            &#10005;
                        </span>
                    </span>
                ))}
                <div
                    className="py-7px pt-10px leading-20px outline-1 outline-graborder-gray-400"
                    {...getDropdownProps({ preventKeyAction: isOpen })}
                >
                    請選擇所屬的分類
                </div>
            </div>
            <ul
                className={[
                    ...(isOpen ? ['block'] : ['hidden']),
                    'absolute left-0 right-0 bg-white shadow-md max-h-80 overflow-scroll w-inherit z-50',
                ].join(' ')}
            >
                {getFilteredItems(options).map((item, index) => (
                    <li
                        style={
                            highlightedIndex === index
                                ? { backgroundColor: '#bde4ff' }
                                : {}
                        }
                        className="p-10px leading-20px flex flex-col"
                        key={`${item}${index}`}
                        onMouseDown={() => {
                            addSelectedItem(getFilteredItems(options)[index])
                        }}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}

const Footer = ({ children }) => {
    return (
        <div className="flex flex-row justify-between px-12px py-3px">
            {children}
        </div>
    )
}

const Posts = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => console.log(data)
    const dispatch = useDispatch()

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <FieldRow>
                <input
                    className="bg-transparent w-full px-10px outline-0 leading-40px"
                    placeholder="請輸入您的標題"
                    {...register('title', { required: true })}
                />
                {errors.title && <span>This field is required</span>}
            </FieldRow>
            <FieldRow>
                <CategorySelector
                    options={[
                        'Category 1',
                        'Category 2',
                        'Category 3',
                        'Category 4',
                        'Category 5',
                        'Category 6',
                    ]}
                />
            </FieldRow>
            <FieldRow className="flex-auto h-full">
                <textarea
                    className="bg-transparent w-full h-full px-10px outline-0 leading-40px"
                    placeholder="請輸入您的內容"
                    {...register('content', { required: true })}
                />
            </FieldRow>
            <Footer>
                <Ripples>
                    <button
                        className="p-12px"
                        onClick={() =>
                            dispatch(toggleDrawer({ name: 'new-post' }))
                        }
                    >
                        取消
                    </button>
                </Ripples>
                <Ripples>
                    <button className="p-12px">確認</button>
                </Ripples>
            </Footer>
        </Form>
    )
}

export { Posts, Form }

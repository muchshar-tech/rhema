import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const SwitchToggle = () => {
    return (
        <span className="inline-block relative group">
            <input
                className="peer absolute top-0 left-0 w-full h-full m-0 p-0 border-none z-10 opacity-0 checked:before:bg-none focus:border-sky-600 focus:outline-2 focus:outline focus:outline-transparent"
                type="checkbox"
            />
            <span className="box-border content-none inline-block align-top border border-solid border-zinc-700 w-9 h-18px rounded-xl transition-colors peer-focus:outline-2 peer-focus:outline-offset-2 peer-checked:peer-focus:shadow-[0_0_0_2px_#fff,0_0_0_4px_#0284c7] peer-checked:bg-sky-600 peer-checked:border-sky-600 peer-fo"></span>
            <span className="box-border translate-x-0 block absolute top-3px left-3px w-3 h-3 rounded-full transition-left border-4 border-solid border-zinc-700 bg-zinc-700 peer-checked:border-white peer-checked:bg-white peer-checked:left-20px"></span>
        </span>
    )
}

export const ScreenOverlay = ({ show, title, onClickClose, children }) => {
    const classNames = [
        ...(show ? ['fixed'] : ['hidden']),
        'top-0',
        'right-0',
        'bottom-0',
        'left-0',
        'bg-black/[.35]',
    ]

    return (
        <div className={classNames.join(' ')}>
            <div className="absolute top-1/2 left-1/2 bg-white shadow-xl rounded-sm -translate-x-1/2 -translate-y-1/2 rotate-0 skew-x-0 skew-y-0 scale-100">
                <div className="flex items-center">
                    <div className="flex-grow px-3">
                        <h4 className="my-0">{title}</h4>
                    </div>
                    <div>
                        <button
                            className="border-0 bg-transparent m-0 p-1"
                            onClick={onClickClose}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                aria-hidden="true"
                                focusable="false"
                            >
                                <path d="M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="p-3">{children}</div>
            </div>
        </div>
    )
}

ScreenOverlay.propTypes = {
    show: PropTypes.bool,
    title: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element),
    ]),
}

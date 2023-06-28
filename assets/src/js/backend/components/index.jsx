import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { UI_MESSAGE_MAPPING } from '@assets/js/constants'
import * as Components from '@components/backend/components'

export const ButtonSpinner = ({ className }) => {
    return (
        <span
            className={`spinner is-active m-0 float-none inline-block ${className}`}
        ></span>
    )
}
ButtonSpinner.propTypes = {
    className: PropTypes.string,
}

export const SwitchToggle = ({ isActive, onSwitchOn, onSwitchOff }) => {
    const classNames = {
        input: [
            'peer',
            'absolute',
            'top-0',
            'left-0',
            'w-full',
            'h-full',
            'm-0',
            'p-0',
            'border-none',
            'z-10',
            'opacity-0',
            'checked:before:bg-none',
            'focus:border-sky-600',
            'focus:outline-2',
            'focus:outline',
            'focus:outline-transparent',
        ],
        border: [
            'box-border',
            'content-none',
            'inline-block',
            'align-top',
            'border',
            'border-solid',
            'w-9',
            'h-18px',
            'rounded-xl',
            'transition-colors',
            'peer-focus:outline-2',
            'peer-focus:outline-offset-2',
            'peer-checked:peer-focus:shadow-[0_0_0_2px_#fff,0_0_0_4px_#0284c7]',
            'peer-checked:bg-sky-600',
            'peer-checked:border-sky-600',
        ],
        rounded: [
            'box-border',
            'translate-x-0',
            'block',
            'absolute',
            'top-3px',
            'left-3px',
            'w-3',
            'h-3',
            'rounded-full',
            'transition-left',
            'border-4',
            'border-solid',
            'peer-checked:border-white',
            'peer-checked:bg-white',
            'peer-checked:left-20px',
        ],
    }
    const deactiveClassNames = {
        input: [],
        border: ['border-zinc-700'],
        rounded: ['bg-zinc-700', 'border-zinc-700'],
    }
    const activedClassNames = {
        input: [],
        border: ['bg-sky-600', 'border-sky-600'],
        rounded: ['border-white', 'bg-white', 'left-20px'],
    }
    return (
        <span className="inline-block relative group">
            <input
                className={[
                    ...classNames.input,
                    ...(isActive
                        ? activedClassNames.input
                        : deactiveClassNames.input),
                ].join(' ')}
                type="checkbox"
            />
            <span
                className={[
                    ...classNames.border,
                    ...(isActive
                        ? activedClassNames.border
                        : deactiveClassNames.border),
                ].join(' ')}
            ></span>
            <span
                className={[
                    ...classNames.rounded,
                    ...(isActive
                        ? activedClassNames.rounded
                        : deactiveClassNames.rounded),
                ].join(' ')}
            ></span>
        </span>
    )
}
SwitchToggle.propTypes = {
    isActive: PropTypes.bool,
}

export const ScreenOverlay = ({
    show,
    title,
    className,
    onClickClose,
    ref,
    children,
}) => {
    const [disabledCloseEvent, setDisabledCloseEvent] = useState(false)
    const classNames = {
        root: [
            ...(show ? ['fixed'] : ['hidden']),
            'top-0',
            'right-0',
            'bottom-0',
            'left-0',
            'bg-black/[.35]',
            className?.root ? className.root : '',
        ],
        modal: [
            'absolute',
            'top-1/2',
            'left-1/2',
            'bg-white',
            'shadow-xl',
            'rounded-sm',
            '-translate-x-1/2',
            '-translate-y-1/2',
            'rotate-0',
            'skew-x-0',
            'skew-y-0',
            'scale-100',
            className?.modal ? className.modal : '',
        ],
    }

    return (
        <div
            className={classNames.root.join(' ')}
            onMouseDownCapture={(e) => {
                setDisabledCloseEvent(false)
            }}
            onClick={!disabledCloseEvent ? onClickClose : () => {}}
            {...{
                ref,
            }}
        >
            <div
                className={classNames.modal.join(' ')}
                onMouseDownCapture={(e) => {
                    setDisabledCloseEvent(true)
                }}
            >
                <div className="flex items-center">
                    <div className="flex-grow px-3">
                        <h4 className="my-0">{title}</h4>
                    </div>
                    <div>
                        <button
                            className="border-0 bg-transparent m-0 p-1"
                            onClick={(e) => {
                                e.stopPropagation()
                                onClickClose(e)
                            }}
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
    className: PropTypes.shape({
        root: PropTypes.string,
        modal: PropTypes.string,
    }),
    ref: PropTypes.any,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element),
    ]),
}

export const FeatureCard = ({
    title,
    isActive,
    version = '0.0.0',
    commingSoon,
    onClickActive = () => false,
    onClickLicense = () => false,
    children,
}) => {
    return (
        <div className="px-2 py-2 w-80">
            <div className="postbox mb-0 min-w-0">
                <div className="postbox-header px-2">
                    <h2 className="text-14px py-3 m-0">{title}</h2>
                    <div className="flex items-center hide-if-no-js">
                        <span className="text-gray-400 mr-1">
                            {UI_MESSAGE_MAPPING['features/status']}
                        </span>
                        <Components.SwitchToggle isActive={isActive} />
                    </div>
                </div>
                <div className="inside">{children}</div>
                <div className="p-1 flex items-center justify-between border-0 border-t border-[#c3c4c7] border-solid bg-[#f6f7f7]">
                    {commingSoon ? (
                        <button className="button" disabled>
                            {UI_MESSAGE_MAPPING['features/comming-soon']}
                        </button>
                    ) : (
                        <div>
                            <button
                                className="button mr-2"
                                onClick={onClickActive}
                                {...(isActive && { disabled: true })}
                            >
                                {UI_MESSAGE_MAPPING['features/active']}
                            </button>
                            <button className="button" onClick={onClickLicense}>
                                {UI_MESSAGE_MAPPING['features/license']}
                            </button>
                        </div>
                    )}
                    <span className="text-gray-500">{version}</span>
                </div>
            </div>
        </div>
    )
}

FeatureCard.propTypes = {
    title: PropTypes.string,
    isActive: PropTypes.bool,
    version: PropTypes.string,
    commingSoon: PropTypes.bool,
    onClickActive: PropTypes.func,
    onClickLicense: PropTypes.func,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element),
    ]),
}

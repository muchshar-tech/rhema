import React from 'react'
import PropTypes from 'prop-types'

const Table = ({ children }) => {
    return (
        <table className="form-table">
            <tbody>{children}</tbody>
        </table>
    )
}

const Row = ({ children }) => {
    return <tr>{children}</tr>
}

const Label = ({ htmlFor, children }) => {
    return (
        <th scope="row">
            <label {...(!!htmlFor && { htmlFor })}>{children}</label>
        </th>
    )
}

const FieldWrap = ({ children }) => {
    return <td>{children}</td>
}

const ModalForm = ({ className, onSubmit, children }) => {
    const formProps = {
        onSubmit,
    }
    return (
        <form className={className} {...formProps}>
            {children}
        </form>
    )
}

ModalForm.FieldRow = ({ className, label, children }) => {
    return (
        <div
            className={[
                'flex items-center mb-2 empty:hidden',
                className,
            ].join(' ')}
        >
            <div className="flex-grow self-start mr-2 mt-1 min-w-100px empty:hidden">
                {label}
            </div>
            <div className="flex-grow empty:hidden w-full">{children}</div>
        </div>
    )
}

const ResponseSuccessMsg = ({ label, children }) => {
    const shouldMount =
        typeof label === 'string' && label.length > 0 && !!children
    return shouldMount ? (
        <div className="flex items-center relative ml-2 grow rounded border border-dashed border-green-600 text-green-600">
            <div className="absolute -top-px -left-px origin-left scale-75 rotate-0 skew-x-0 skew-y-0 translate-x-0 -translate-y-1/2">
                <span className="bg-white m-1">{label}</span>
            </div>
            <span className="block px-2 py-1 text-xs">{children}</span>
        </div>
    ) : null
}

const ResponseErrorMsg = ({
    label,
    code,
    children = 'There has been a critical error.',
}) => {
    const shouldMount = !!code && !!children

    return shouldMount ? (
        <div className="flex items-center relative ml-2 grow rounded border border-dashed border-rose-400 text-rose-500">
            <div className="absolute -top-px -left-px origin-left scale-75 rotate-0 skew-x-0 skew-y-0 translate-x-0 -translate-y-1/2">
                <span className="px-1 text-white rounded bg-rose-500">
                    {code}
                </span>
                <span className="bg-white m-1">{label}</span>
            </div>
            <span className="block px-2 py-1 text-xs">{children}</span>
        </div>
    ) : null
}

const FieldErrorMsg = ({ message }) => {
    return !!message ? (
        <p role="alert" className="m-0 mb-2 max-w-200px text-xs text-red-500">
            {message}
        </p>
    ) : null
}

FieldErrorMsg.propTypes = {
    message: PropTypes.string,
}

export {
    Table,
    Row,
    Label,
    FieldWrap,
    ModalForm,
    FieldErrorMsg,
    ResponseSuccessMsg,
    ResponseErrorMsg,
}

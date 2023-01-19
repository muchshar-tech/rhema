import React from 'react'

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

const ModalForm = ({ onSubmit, children }) => {
    const formProps = {
        onSubmit
    }
    return <form {...formProps}>{children}</form>
}

ModalForm.FieldRow = ({ label, children }) => {
    return (
        <div className="flex items-center mb-2">
            <div className="flex-grow self-start mr-2 mt-1 min-w-100px">{label}</div>
            <div>{children}</div>
        </div>
    )
}

export { Table, Row, Label, FieldWrap, ModalForm }

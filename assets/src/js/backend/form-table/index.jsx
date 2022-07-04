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

export { Table, Row, Label, FieldWrap }

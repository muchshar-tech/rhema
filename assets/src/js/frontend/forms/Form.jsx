import React from 'react'

const Form = ({ onSubmit, children }) => {
    return (
        <form onSubmit={onSubmit} className="w-full flex flex-col">
            {children}
        </form>
    )
}

export default Form
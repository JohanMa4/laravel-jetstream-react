import React from 'react'

export default function Label(props) {
    const { children, value } = props;
    return (
        <label {...props} className="block font-medium text-sm text-gray-700">
            {value ? <span>{value}</span> : <span>{children}</span>}
        </label>
    )
}

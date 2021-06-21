import React from 'react'

export default function Input(props) {
    const { className } = props;

    const defaultClasses = 'border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm ';

    return (
        <input {...props} className={defaultClasses + className} />
    )
}

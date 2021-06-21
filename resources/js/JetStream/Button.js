import React from 'react'

const Button = (props) => {
    const { children, className } = props;

    const defaultClasses = 'inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition ';

    return (
        <button {...props} className={defaultClasses + className}>
            {children}
        </button>
    )
}

export default Button;
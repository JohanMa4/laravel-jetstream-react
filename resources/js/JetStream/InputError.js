import React from 'react'

export default function InputError(props) {
    const { message } = props;
    return (
        <>
            {message &&
                <div>
                    <p class="text-sm text-red-600">
                        {message}
                    </p>
                </div>
            }
        </>
    )
}

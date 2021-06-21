import React from 'react'
import { usePage } from '@inertiajs/inertia-react';

export default function ValidationErrors(props) {
    const errors = usePage().props.errors;
    const hasErrors = Object.keys(errors).length > 0;
    
    return (
        <>
            {hasErrors &&
                <div>
                    <div className="font-medium text-red-600">Whoops! Something went wrong.</div>

                    <ul className="mt-3 list-disc list-inside text-sm text-red-600">
                        {errors.map((error, key) => {
                            <li key={key}>{error}</li>
                        })}
                    </ul>
                </div>
            }
        </>
    );
}
import React from 'react'
import { InertiaLink } from '@inertiajs/inertia-react'

export default function DropdownLink(props) {
    const { children, as, href } = props;
    const renderElements = () => {
        if (as === 'button') {
            return (
                <button type="submit" class="block w-full px-4 py-2 text-sm leading-5 text-gray-700 text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition">
                    {children}
                </button>
            )
        } else if (as === 'a') {
            return (
                <a href={href} class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition">
                    {children}
                </a>
            )
        } else {
            return (
                <InertiaLink href={href} class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition">
                    {children}
                </InertiaLink>
            )
        }
    }
    return (
        <div>
            {renderElements()}
        </div>
    )
}

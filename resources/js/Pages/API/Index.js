import React from 'react'
import AppLayout from '../../Layouts/AppLayout';

export default function Index(props) {
    const { tokens, availablePermissions, defaultPermissions } = props;
    return (
        <AppLayout>
            <header>
                <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                    API Tokens
                </h2>
            </header>

            <div>
                <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
                    <api-token-manager tokens={tokens}
                        available-permissions={availablePermissions}
                        default-permissions={defaultPermissions} />
                </div>
            </div>
        </AppLayout>
    )
}

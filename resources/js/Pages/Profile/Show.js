import React from 'react'
import AppLayout from '../../Layouts/AppLayout';
import UpdateProfileInformationForm from './UpdateProfileInformationForm';
import TwoFactorAuthenticationForm from './TwoFactorAuthenticationForm';
import UpdatePasswordForm from './UpdatePasswordForm';
import SectionBorder from '../../JetStream/SectionBorder';
import { usePage } from '@inertiajs/inertia-react';

export default function Show() {
    const page = usePage();
    return (
        <AppLayout>
            <section>
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Profile
                </h2>
            </section>

            <div>
                <div className="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
                    {page.props.jetstream.canUpdateProfileInformation &&
                        <div>
                            <UpdateProfileInformationForm user="$page.props.user" />

                            <SectionBorder />
                        </div>
                    }
                    {page.props.jetstream.canUpdatePassword &&
                        <div>
                            <UpdatePasswordForm className="mt-10 sm:mt-0" />

                            <SectionBorder />
                        </div>
                    }

                    {page.props.jetstream.canManageTwoFactorAuthentication &&

                        <div>
                            <TwoFactorAuthenticationForm className="mt-10 sm:mt-0" />

                            <SectionBorder />
                        </div>
                    }

                    {/* <logout-other-browser-sessions-form sessions="sessions" className="mt-10 sm:mt-0" />

                    <template v-if="$page.props.jetstream.hasAccountDeletionFeatures">
                        <jet-section-border />

                        <delete-user-form className="mt-10 sm:mt-0" />
                    </template> */}
                </div>
            </div>
        </AppLayout>
    )
}

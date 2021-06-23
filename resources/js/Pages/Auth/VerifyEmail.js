import React from 'react'
import AuthenticationCard from '../../JetStream/AuthenticationCard';
import AuthenticationCardLogo from '../../JetStream/AuthenticationCardLogo';
import Button from '../../JetStream/Button';
import { InertiaLink } from '@inertiajs/inertia-react';
import { useForm } from '@inertiajs/inertia-react';

export default function VerifyEmail(props) {
    const { status } = props;
    const verificationLinkSent = status === 'verification-link-sent';
    const { data, setData, post, processing, errors } = useForm();
    const submit = (e) => {
        e.preventDefault();
        post(route('verification.send'));
    }
    return (
        <AuthenticationCard>
            <section>
                <AuthenticationCardLogo />
            </section>

            <div class="mb-4 text-sm text-gray-600">
                Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another.
            </div>

            <div class="mb-4 font-medium text-sm text-green-600" v-if="verificationLinkSent" >
                A new verification link has been sent to the email address you provided during registration.
            </div>

            <form onSubmit={submit}>
                <div class="mt-4 flex items-center justify-between">
                    <Button class="{'opacity-25': form.processing }" disabled="form.processing">
                        Resend Verification Email
                    </Button>

                    <InertiaLink href={route('logout')} method="post" as="button" class="underline text-sm text-gray-600 hover:text-gray-900">Log Out</InertiaLink>
                </div>
            </form>
        </AuthenticationCard>
    )
}

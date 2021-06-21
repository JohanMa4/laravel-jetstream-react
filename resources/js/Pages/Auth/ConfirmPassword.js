import React from 'react'
import AuthenticationCard from '../../JetStream/AuthenticationCard';
import AuthenticationCardLogo from '../../JetStream/AuthenticationCardLogo';
import ValidationErrors from '../../JetStream/ValidationErrors';
import Label from '../../JetStream/Label';
import Input from '../../JetStream/Input';
import Button from '../../JetStream/Button';
import { useForm } from '@inertiajs/inertia-react';

export default function ConfirmPassword() {
    const { setData, post, processing, reset } = useForm({
        password: ''
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('password.confirm'), {
            onFinish: () => reset(),
        })
    }

    return (
        <AuthenticationCard>
            <section>
                <AuthenticationCardLogo />
            </section>

            <div className="mb-4 text-sm text-gray-600">
                This is a secure area of the application. Please confirm your password before continuing.
            </div>

            <ValidationErrors className='mb-4' />

            <form onSubmit={submit}>
                <div>
                    <Label for="password" value="Password" />
                    <Input id="password" type="password" className="mt-1 block w-full"
                        required
                        autoComplete="current-password" autoFocus
                        onChange={e => setData('password', e.target.value)}
                    />
                </div>

                <div className="flex justify-end mt-4">
                    <Button className={"ml-4 " + processing ? 'opacity-25' : ''} disabled={processing}>
                        Confirm
                    </Button>
                </div>
            </form>
        </AuthenticationCard>
    )
}

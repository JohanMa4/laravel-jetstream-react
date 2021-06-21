import React, { useState } from 'react';
import AuthenticationCard from '../../JetStream/AuthenticationCard';
import ValidationErrors from '../../JetStream/ValidationErrors';
import Label from '../../JetStream/Label';
import Input from '../../JetStream/Input';
import Checkbox from '../../JetStream/Checkbox';
import Button from '../../JetStream/Button';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import { useForm } from '@inertiajs/inertia-react'
import { Formik } from 'formik';

export default function Login(props) {
    const { status, canResetPassword } = props;
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post('/login');
    }

    return (
        <AuthenticationCard>
            <ValidationErrors className="mb-4" {...props} />
            {status &&
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            }
            <form onSubmit={submit}>
                <div>
                    <Label htmlFor='email' value='Email' />
                    <Input
                        id="email"
                        type="email"
                        className="mt-1 block w-full"
                        required
                        autoFocus
                        onChange={e => setData('email', e.target.value)}
                    />
                    {errors.email && <div>{errors.email}</div>}
                </div>

                <div className="mt-4">
                    <Label htmlFor='password' value='Password' />
                    <Input
                        id="password"
                        type="password"
                        className="mt-1 block w-full"
                        required
                        autoComplete="current-password"
                        onChange={e => setData('password', e.target.value)}
                    />
                    {errors.password && <div>{errors.password}</div>}
                </div>

                <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={e => setData('remember', e.target.checked)}
                        />
                        <span className="ml-2 text-sm text-gray-600">Remember me</span>
                    </label>
                </div>

                <div className="flex items-center justify-end mt-4">
                    {canResetPassword &&
                        <InertiaLink href={route('password.request')} className="underline text-sm text-gray-600 hover:text-gray-900">
                            Forgot your password?
                        </InertiaLink>
                    }
                    <Button type='submit' className="ml-4" disabled={processing}>Log in</Button>
                </div>
            </form>
        </AuthenticationCard >
    )
}

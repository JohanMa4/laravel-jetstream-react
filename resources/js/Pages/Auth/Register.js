import React from 'react';
import AuthenticationCard from '../../JetStream/AuthenticationCard';
import Button from '../../JetStream/Button';
import Checkbox from '../../JetStream/Checkbox';
import Label from '../../JetStream/Label';
import Input from '../../JetStream/Input';
import ValidationErrors from '../../JetStream/ValidationErrors';
import { InertiaLink } from '@inertiajs/inertia-react';
import { Formik } from 'formik';

export default function Register(props) {
    return (
        <AuthenticationCard>
            <ValidationErrors className="mb-4" {...props} />
            <Formik
            >{({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
             }) => (
                <form>
                    <div>
                        <Label htmlFor="name" value="Name" />
                        <Input id="name" type="text" className="mt-1 block w-full" required autoFocus autoComplete="name" />
                    </div>

                    <div className="mt-4">
                        <Label htmlFor="email" value="Email" />
                        <Input id="email" type="email" className="mt-1 block w-full" required />
                    </div>

                    <div className="mt-4">
                        <Label htmlFor="password" value="Password" />
                        <Input id="password" type="password" className="mt-1 block w-full" required autoComplete="new-password" />
                    </div>

                    <div className="mt-4">
                        <Label htmlFor="password_confirmation" value="Confirm Password" />
                        <Input id="password_confirmation" type="password" className="mt-1 block w-full" required autoComplete="new-password" />
                    </div>

                    <div className="mt-4">
                        <Label htmlFor="terms">
                            <div className="flex items-center">
                                <Checkbox name="terms" id="terms" />

                                <div className="ml-2">
                                        I agree to the <a target="_blank" href='/' className="underline text-sm text-gray-600 hover:text-gray-900">Terms of Service</a> and <a target="_blank" href='/' className="underline text-sm text-gray-600 hover:text-gray-900">Privacy Policy</a>
                                </div>
                            </div>
                        </Label>
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        <InertiaLink href={route('login')} className="underline text-sm text-gray-600 hover:text-gray-900">
                            Already registered?
                        </InertiaLink>

                        <Button className="ml-4">
                            Register
                        </Button>
                    </div>
                </form >
            )}

            </Formik>
        </AuthenticationCard>
    )
}

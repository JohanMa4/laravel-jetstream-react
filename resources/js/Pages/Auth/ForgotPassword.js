import React from 'react'
import AuthenticationCard from '../../JetStream/AuthenticationCard'
import Label from '../../JetStream/Label';
import Input from '../../JetStream/Input';
import Button from '../../JetStream/Button';
import ValidationErrors from '../../JetStream/ValidationErrors';

export default function ForgotPassword(props) {
    const { status } = props;
    return (
        <AuthenticationCard>
            <div className="mb-4 text-sm text-gray-600">
                Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.
            </div>

            {status &&
                <div v-if="status" className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            }

            <ValidationErrors className="mb-4" {...props} />

            <form>
            <div>
                <Label htmlFor="email" value="Email" />
                <Input id="email" type="email" className="mt-1 block w-full" required autoFocus />
            </div>

            <div className="flex items-center justify-end mt-4">
                <Button type='submit'>
                Email Password Reset Link
                </Button>
            </div>
        </form >
    </AuthenticationCard >
    )
}

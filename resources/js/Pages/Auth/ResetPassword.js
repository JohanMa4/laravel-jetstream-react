import React from 'react'
import AuthenticationCard from '../../JetStream/AuthenticationCard';
import AuthenticationCardLogo from '../../JetStream/AuthenticationCardLogo';
import ValidationErrors from '../../JetStream/ValidationErrors';

export default function ResetPassword(props) {
    const { token } = props;
    const { data, setData, post, processing } = useForm({
        token: '',
        email: '',
        password: '',
        password_confirmation: ''
    })
    const submit = (e) => {
        e.preventDefault();
        post(this.route('password.update'), {
            onFinish: () => reset('password', 'password_confirmation'),
        })
    }
    return (
        <AuthenticationCard>
            <section>
                <AuthenticationCardLogo />
            </section>

            <ValidationErrors className="mb-4" />

            <form onSubmit={submit}>
                <div>
                    <Label for="email" value="Email" />
                    <Input id="email" type="email" className="mt-1 block w-full" required autoFocus />
                </div>

                <div className="mt-4">
                    <Label for="password" value="Password" />
                    <Input id="password" type="password" className="mt-1 block w-full" v-model="form.password" required autoComplete="new-password" />
                </div>

                <div className="mt-4">
                    <Label for="password_confirmation" value="Confirm Password" />
                    <Input id="password_confirmation" type="password" className="mt-1 block w-full" v-model="form.password_confirmation" required autoComplete="new-password" />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Button className={processing && 'opacity-25'} disabled={processing}>
                        Reset Password
                    </Button>
                </div>
            </form>
        </AuthenticationCard >
    )
}

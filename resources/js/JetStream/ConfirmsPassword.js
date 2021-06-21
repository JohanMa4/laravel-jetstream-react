import React from 'react'
import DialogModal from './DialogModal';
import InputError from './InputError';

export default function ConfirmsPassword(props) {
    const { children, title } = props;
    return (
        <span>
        <span>
            <slot />
        </span>

        <DialogModal show="confirmingPassword" >
            <template title>
                {title}
            </template>

            <template content>
                {content}

                <div class="mt-4">
                        <Input type="password" class="mt-1 block w-3/4" placeholder="Password"
                            ref="password"
                            v-model="form.password"
                        />

                    <InputError message="form.error" class="mt-2" />
                </div>
            </template>

            <template footer>
                <SecondaryButton>
                    Cancel
                </SecondaryButton>

                    <Button class="ml-2" class="{ 'opacity-25': form.processing }" disabled = "form.processing" >
                    {{ button }}
                </Button >
            </template >
        </DialogModal>
    </span >
    )
}

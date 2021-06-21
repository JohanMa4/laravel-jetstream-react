import React from 'react'
import SectionTitle from '../JetStream/SectionTitle';

const Actions = () => null;
const Form = () => null;
const Title = () => null;
const Description = () => null;

FormSection.Actions;
FormSection.Forms;
FormSection.Title;
FormSection.Description;

export default function FormSection() {
    const actions = children.find(el => el.type === Actions);
    const form = children.find(el => el.type === Form);
    const title = children.find(el => el.type === Title);
    const description = children.find(el => el.type === Description);
    const hasActions = !!actions;
    
    // This is an $emit simulation event from Vue, just experimenting
    const submitted = (e) => {
        e.prevenDefault();
        return e.target.value;
    }
    return (
        <div class="md:grid md:grid-cols-3 md:gap-6">
            <SectionTitle>
                <section>{title ? title.props.children : null}</section>
                <section>{description ? description.props.children : null}</section>
            </SectionTitle>

            <div class="mt-5 md:mt-0 md:col-span-2">
                <form onSubmit={submitted}>
                    <div class={"px-4 py-5 bg-white sm:p-6 shadow " + hasActions ? 'sm:rounded-tl-md sm:rounded-tr-md' : 'sm:rounded-md'}>
                        <div class="grid grid-cols-6 gap-6">
                            {form ? form.props.children : null}
                        </div>
                    </div>

                    {hasActions &&
                        <div class="flex items-center justify-end px-4 py-3 bg-gray-50 text-right sm:px-6 shadow sm:rounded-bl-md sm:rounded-br-md">
                            {actions ? actions.props.children : null}
                        </div>
                    }
                </form>
            </div >
        </div >
    )
}

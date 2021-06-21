import React from 'react'
import SectionTitle from '../JetStream/SectionTitle';

export default function ActionSection(props) {
    const { title, description, content } = props;
    return (
        <div className="md:grid md:grid-cols-3 md:gap-6">
            <SectionTitle>
                {title}
                {description}
            </SectionTitle>

            <div className="mt-5 md:mt-0 md:col-span-2">
                <div className="px-4 py-5 sm:p-6 bg-white shadow sm:rounded-lg">
                    {content}
                </div>
            </div>
        </div>
    )
}

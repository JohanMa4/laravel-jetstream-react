import React from 'react'

const Title = () => null;
const Description = () => null;
const Aside = () => null;

SectionTitle.Title;
SectionTitle.Description;

export default function SectionTitle() {
    const title = children.find(el => el.type === Title);
    const description = children.find(el => el.type === Description);
    const aside = children.find(el => el.type === Aside);
    return (
        <div>
            <div className="md:col-span-1 flex justify-between">
                <div className="px-4 sm:px-0">
                    <h3 className="text-lg font-medium text-gray-900">
                        {title ? title.props.children : null}
                    </h3>

                    <p className="mt-1 text-sm text-gray-600">
                        {description ? description.props.children : null}
                    </p>
                </div>

                <div className="px-4 sm:px-0">
                    {aside ? aside.props.children : null}
                </div>
            </div>
        </div>
    )
}

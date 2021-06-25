import React, {Fragment} from 'react'
import { Menu, Transition } from '@headlessui/react'

const Trigger = () => null;
const Content = () => null;

Dropdown.Trigger;
Dropdown.Content;

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Dropdown(props) {
    const { children } = props;
    const content = children.find(el => el.type === Content);
    const trigger = children.find(el => el.type === Trigger);
    return (
        <Menu as="div" className="relative inline-block text-left">
            {({ open }) => (
                <>
                    <div>
                        <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                            {trigger ? trigger.props.children : null}
                            {/* <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" /> */}
                        </Menu.Button>
                    </div>

                    <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        {open &&
                            <div
                            className="absolute z-50 mt-2 rounded-md shadow-lg"
                            // className="[widthClass, alignmentClasses]"
                            style="display: none;" onClick={open = false}>
                            <div className="rounded-md ring-1 ring-black ring-opacity-5"
                                // className="contentClasses"
                            >
                                    {content ? content.props.children : null}
                                </div>
                            </div>
                        }
                    </Transition>
                </>
            )}
        </Menu>
   )
}

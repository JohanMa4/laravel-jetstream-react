import React from 'react'

export default function ActionMessage(props) {
    const { show, children } = props;
    return (
        <div>
            {/* <transition leave-active-class="transition ease-in duration-1000" leave-from-class="opacity-100" leave-to-class="opacity-0"> */}
            {show === 'on' &&
                <div className="text-sm text-gray-600">
                    {children}
                </div>
            }
            {/* </transition> */}
        </div>
    )
}

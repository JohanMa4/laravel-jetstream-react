import React from 'react'

const Trigger = () => null;

export default function Dropdown(props) {
    const { children } = props;
    const trigger = children.find(el => el.type === Trigger)
    return (
        <div className="relative">
            <div>
                {trigger ? trigger.props.children : null}
            </div>

            <div v-show="open" className="fixed inset-0 z-40" >
        </div>
    </div >
    )
}

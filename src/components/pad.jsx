import {useState} from "react"

export default function Pad(props) {
    console.log(props)

    // the Pad component needs to receive the state from above
    // so that state can be controlled for ALL pads properly (single source of truth)
    // the toggle function is passed down as props and when called from the Pad's level
    // the id of the pad can be passed to the toggle function
    // NOTE: the key prop cannot be used for this purpose, which is why we have `id` created
    return (
        <button
            onClick={() => props.toggle(props.id)}
            style={{ backgroundColor: props.color }} 
            className={props.on ? "on" : undefined}>
        </button>
    )
}

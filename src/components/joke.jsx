import "react"
import React from "react"

export default function Joke(props) {
    const [isShown, setIsShown] = React.useState(false)

    function handleClick() {
        setIsShown(current => {
            return !current
        })
    }
    console.log(isShown)
    return (
        <div>
            {props.setup && <p>setup: {props.setup}</p>}
            {isShown ? <p>punchline: {props.punchline}</p> : null }
            <button onClick={handleClick} type="submit" id="joke-show">
                {isShown ? "Hide" : "Show"} punchline
            </button>
            <hr />
        </div>
    )
}

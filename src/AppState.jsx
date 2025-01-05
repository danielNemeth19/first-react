import React from "react"

export default function App() {
    const [count, setCount] = React.useState(0)

    function modifyCount(event) {
        const target = event.target;
        if (target.className == "minus") {
            return setCount(count - 1)
        } else {
            return setCount(count + 1)
        }
    }

    // Note: if you ever need the old value of state
    // to help you determine the new value of state,
    // you should pass a callback function to your 
    // state setter instead. This callback function
    // will receive the old value of state as its parameter,
    // which then can be used to determine new state value
    function add() {
        setCount(prevCount => prevCount + 1)
    }

    const [isGoingOut, setIsGoingOut] = React.useState(true)
    // let answer = isGoingOut ? "yes" : "no"

    function changeMind() {
        setIsGoingOut(prevStat => !prevStat)
    }

    return (
        <main className="container">
            <h1>How many times will Bob say "state" in this section?</h1>
            <div className="counter">
                <button onClick={modifyCount} className="minus" aria-label="Decrease count">–</button>
                <h2 className="count">{count}</h2>
                <button onClick={add} className="plus" aria-label="Increase count">+</button>
            </div>
            <div>
                <h2 className="title">Do I feel like going out tonight?</h2>
                <button
                    onClick={changeMind}
                    className="value"
                    aria-label={`Current answer is ${isGoingOut ? 'yes' : 'no'}. Click to change it`}
                >
                    {isGoingOut ? "yes" : "no"}
                </button>
            </div>
        </main>
    )
}

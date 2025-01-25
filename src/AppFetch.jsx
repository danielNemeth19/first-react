import React, { useEffect } from "react"

export default function App() {
    const [starWarsData, setStarWarsData] = React.useState(null)
    const [count, setCount] = React.useState(1)

    React.useEffect(() => {
        fetch(`https://swapi.dev/api/people/${count}`)
            .then(resp => resp.json())
            .then(data => setStarWarsData(data))
    }, [count]);

    return (
        <>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(prev => (prev + 1))} >Click</button>
            <div>
                <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
            </div>
        </>

    )
}

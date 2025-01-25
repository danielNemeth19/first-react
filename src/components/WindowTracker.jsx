import { useEffect, useState } from "react"

export default function WindowTracker() {
    const [width, setWidth] = useState(window.innerWidth)
    useEffect(() => {
        window.addEventListener("resize", function() {
            setWidth(window.innerWidth)
        })
    }, [])
    return (
        <h1>Window width: {width}</h1>
    )
}


import { useEffect, useState } from "react"

export default function WindowTracker() {
    const [width, setWidth] = useState(window.innerWidth)
    useEffect(() => {
        function windowSize() {
            console.log("refresh")
            setWidth(window.innerWidth)
        }
        window.addEventListener("resize", windowSize)
        return function() {
            console.log("Cleaning up..")
            window.removeEventListener("resize", windowSize)
        }
    }, [])
    return (
        <h1>Window width: {width}</h1>
    )
}


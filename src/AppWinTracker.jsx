import { useState } from "react"
import WindowTracker from "./components/WindowTracker.jsx"
import "./index_windows_tracker.css"

export default function App() {
    const [show, setShow] = useState(true)

    return (
        <main className="container">
            <button onClick={ ()=> setShow(prev => !prev)}>
                Toggle WindowTracker
            </button>
            { show && <WindowTracker />}
        </main>
    )
}

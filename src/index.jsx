import { createRoot } from "react-dom/client"

const root = createRoot(document.getElementById("root"))

function ReactFactsCard() {
    return(
        <main>
            <img src="vite.svg" width="40px" alt="Vite logo"/>
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 200k starts on Github</li>
                <li>Is maintained by Meta</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    )
}

root.render(
    <ReactFactsCard />
)


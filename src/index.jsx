import { createRoot } from "react-dom/client"
import App from "./App"
import AppJokes from "./AppJokes"

const root = createRoot(document.getElementById("root"))
root.render(<AppJokes />)


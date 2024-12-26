import { createRoot } from "react-dom/client"
import App from "./App.jsx"
// import Header from "./header"
// import MainContent from "./maincontent"
// import Footer from "./footer"
// import { Fragment } from "react" -- the empty <> in root.render basically creates a Fragment element, whithout the need of importing it

const root = createRoot(document.getElementById("root"))


root.render(<App/>)


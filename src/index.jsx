import { createRoot } from "react-dom/client"
import Header from "./header"
import MainContent from "./maincontent"
import Footer from "./footer"
// import { Fragment } from "react" -- the empty <> in root.render basically creates a Fragment element, whithout the need of importing it

const root = createRoot(document.getElementById("root"))

function Page({ library }) {
    return (
        <>
            <Header />
            <MainContent library={library} />
            <Footer />
        </>
    )
}

root.render(
    <Page library="React" />
)


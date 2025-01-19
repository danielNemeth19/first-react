import React from "react"
import Header from "./components/headerPassingData.jsx"
import Body from "./components/bodyPassingData.jsx"
import "./index_passingData.css"

export default function App() {
    const [userName, setUserName] = React.useState("Joe")
    return (
        <main>
            <Header userName={userName}/>
            <Body userName={userName}/>
        </main>
    )
}

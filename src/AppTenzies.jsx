import { useState } from "react"
import "./index_tenzies.css"
import Die from "./components/Die.jsx"




export default function AppTenzies() {
    const [dice, setDice] = useState(generateAllNewDice())

    function generateAllNewDice() {
        const max = 6;
        return new Array(10).fill(0).map(() => Math.ceil(Math.random() * max))
    }

    const diceElements = dice.map((item, i) => <Die key={i} value={item} />)

    return (
        <main>
            <div className="dice-container">
                {diceElements}
            </div>
        </main>
    )
}

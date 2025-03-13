import { useState } from "react"
import { nanoid } from "nanoid"
import "./index_tenzies.css"
import Die from "./components/Die.jsx"


export default function AppTenzies() {
    const [dice, setDice] = useState(generateAllNewDice())

    function hold(id) {
        console.log(id)
    }

    function generateAllNewDice() {
        const max = 6;
        return new Array(10).fill(0).map(() => ({
            value: Math.ceil(Math.random() * max),
            isHeld: true,
            id: nanoid(),
        }))
    }

    function rollDice() {
        setDice(generateAllNewDice())
    }

    const diceElements = dice.map((die) => (
        <Die
            key={die.id}
            id={die.id}
            value={die.value}
            handler={hold}
            isHeld={die.isHeld}
        />)
    )

    return (
        <main>
            <div className="dice-container">
                {diceElements}
            </div>
            <button className="roll" onClick={rollDice}>Roll</button>
        </main>
    )
}

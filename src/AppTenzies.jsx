import { useState, useRef, useEffect } from "react"
import { useWindowSize } from "react-use"
import { nanoid } from "nanoid"
import Confetti from "react-confetti"
import "./index_tenzies.css"
import Die from "./components/Die.jsx"


export default function AppTenzies() {
    const max = 6;
    const newGame = useRef(null)
    const [dice, setDice] = useState(() => generateAllNewDice())

    const gameWon = dice.every(die => die.isHeld) &&
        dice.every(die => die.value === dice[0].value)

    useEffect(() => {
        if (gameWon && newGame != null) {
            newGame.current.focus()
        }
    }, [gameWon])

    function generateAllNewDice() {
        return new Array(10).fill(0).map(() => ({
            value: Math.ceil(Math.random() * max),
            isHeld: false,
            id: nanoid(),
        }))
    }

    function hold(id) {
        setDice(prevDice => prevDice.map(
            die => die.id === id ? { ...die, isHeld: !die.isHeld } : die
        ))
    }

    function rollDice() {
        if (gameWon) {
            setDice(generateAllNewDice())
        } else {
            setDice(prevDice => prevDice.map(
                die => die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * max) }
            ))
        }
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

    const { width, height } = useWindowSize()

    return (
        <main>
            {gameWon && <Confetti width={width} height={height} />}
            <div aria-live="polite" className="sr-only">
                {gameWon && <p>Congratulations! You won! Press "New Game" to start again.</p>}
            </div>
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
                {diceElements}
            </div>
            <button className="roll" onClick={rollDice} ref={newGame}>{gameWon ? "New Game" : "Roll"}</button>
        </main>
    )
}

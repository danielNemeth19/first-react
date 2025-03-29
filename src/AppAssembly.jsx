import { useState } from "react";
import "./index_assembly.css"
import { languages } from "./languages.js"

export default function AppAssembly() {
    const [currentWord, setCurrentWord] = useState("react")
    const [guessedLetters, setGuessedLetters] = useState([])

    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    const languaeElements = languages.map((language) => {
        const styles = {
            color: language.color,
            backgroundColor: language.backgroundColor
        }
        return <span key={language.name} className="chip" style={styles}>{language.name}</span>
    })

    const letterElements = currentWord.split("").map((char, idx) => {
        return <span key={idx}>{char.toUpperCase()}</span>
    })

    function addGuessedLetter(char) {
        setGuessedLetters(prev => {
            return prev.includes(char) ? prev : [...prev, char]
        })
    }

    const keyboardElements = alphabet.split("").map((char) => {
                return <button onClick={() => addGuessedLetter(char)} key={char}>{char.toUpperCase()}</button>
            })

        return (
            <main>
                <header>
                    <h1>Assembly: Endgame</h1>
                    <p>Guess the word in under 8 attempts to keep the programming world save from Assembly!</p>
                </header>
                <main>
                    <section className="game-status">
                        <h2>You win!</h2>
                        <p>Well done! 🎉</p>
                    </section>
                    <section className="language-chips">
                        {languaeElements}
                    </section>
                    <section className="word">
                        {letterElements}
                    </section>
                    <section className="keyboard">
                        {keyboardElements}
                    </section>
                    <button className="new-game">New Game</button>
                </main>
            </main>
        )
    }

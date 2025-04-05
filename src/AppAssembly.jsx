import { useState, useRef } from "react";
import "./index_assembly.css"
import { languages } from "./languages.js"
import { clsx } from 'clsx'
import { getFarewellText } from "./utils.js";

export default function AppAssembly() {
    const [currentWord, setCurrentWord] = useState("react")
    const [guessedLetters, setGuessedLetters] = useState([])

    const availableGuesses = languages.length - 1;

    const wrongGuessCount = guessedLetters.reduce((count, char) => {
        return currentWord.includes(char) ? count : count + 1
    }, 0)

    const value = guessedLetters.at(-1) // either undefined or value
    const lostLanguage = value && !currentWord.includes(value)

    const isGameWon = currentWord.split("").every((char) => (guessedLetters.includes(char)))
    const isGameLost = wrongGuessCount >= availableGuesses
    const isGameOver = isGameWon || isGameLost

    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    const languaeElements = languages.map((language, idx) => {
        const styles = {
            color: language.color,
            backgroundColor: language.backgroundColor
        }
        const isLostLanguage = idx < wrongGuessCount;
        return (
            <span
                key={language.name}
                className={
                    clsx("chip", isLostLanguage && "lost")
                }
                style={styles}
            >
                {language.name}
            </span>
        )
    })

    const letterElements = currentWord.split("").map((char, idx) => {
        const toShow = guessedLetters.includes(char) ? char.toUpperCase() : ""
        return <span key={idx}>{toShow}</span>
    })

    function addGuessedLetter(char) {
        if (guessedLetters.includes(char)) {
            return guessedLetters
        } else {
            setGuessedLetters(prev => {
                return prev.includes(char) ? prev : [...prev, char]
            })
        }
    }

    const keyboardElements = alphabet.split("").map(char => {
        return <button
            onClick={() => addGuessedLetter(char)}
            disabled={isGameOver}
            // aria-disabled={guessedLetters.includes(char)}
            // aria-label = {`letter: ${char}`}
            key={char}
            className={
                clsx({
                    "correct": currentWord.includes(char) && guessedLetters.includes(char),
                    "wrong": !currentWord.includes(char) && guessedLetters.includes(char),
                })
            }
        > {char.toUpperCase()}</button >
    })

    function renderGameStatus() {
        let h2Text = null, pText = null
        if (lostLanguage) {
            let name = languages[wrongGuessCount - 1].name
            pText = getFarewellText(name)
        }
        if (isGameWon) {
            h2Text = "You win!"
            pText = "Well done! 🎉"
        } else if (isGameLost) {
            h2Text = "Game over!"
            pText = "You lose! Better start learning Assembly 😭"
        }
        return (
            <>
                <h2>{h2Text}</h2>
                <p className={clsx(lostLanguage && "farewell-message")}>{pText}</p>
            </>
        )
    }

    return (
        <main>
            <header>
                <h1>Assembly: Endgame</h1>
                <p>Guess the word in under 8 attempts to keep the programming world save from Assembly!</p>
            </header>
            <section aria-live="polite" role="status" className={clsx("game-status", isGameWon && "won", isGameLost && "lost", !isGameLost && lostLanguage && "farewell")}>
                {
                    renderGameStatus()
                }
            </section>
            <section className="language-chips">
                {languaeElements}
            </section>
            <section className="word">
                {letterElements}
            </section>
            <section className="sr-only" aria-live="polite" role="status">
                <p>Current word: {currentWord.split("").map(letter => guessedLetters.includes(letter) ? letter + "." : "blank.").join(" ")}</p>
            </section>

            <section className="keyboard">
                {keyboardElements}
            </section>
            {isGameOver && <button className="new-game">New Game</button>}
        </main>
    )
}

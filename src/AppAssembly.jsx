import { useState } from "react";
import "./index_assembly.css"
import { languages } from "./languages.js"
import { clsx } from 'clsx'

export default function AppAssembly() {
    const [currentWord, setCurrentWord] = useState("react")
    const [guessedLetters, setGuessedLetters] = useState([])

    const availableGuesses = languages.length - 1;

    const wrongGuessCount = guessedLetters.reduce((count, char) => {
        return currentWord.includes(char) ? count : count + 1
    }, 0)

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
            key={char}
            className={
                clsx({
                    "correct": currentWord.includes(char) && guessedLetters.includes(char),
                    "wrong": !currentWord.includes(char) && guessedLetters.includes(char),
                })
            }
        > {char.toUpperCase()}</button >
    })

    return (
        <main>
            <header>
                <h1>Assembly: Endgame</h1>
                <p>Guess the word in under 8 attempts to keep the programming world save from Assembly!</p>
            </header>
            <section className="game-status">
                <h2></h2>
                <p></p>
                {
                    isGameWon &&
                    <>
                        <h2>You win!</h2>
                        <p>Well done! 🎉</p>
                    </>
                }
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
            {isGameOver && <button className="new-game">New Game</button>}
        </main>
    )
}

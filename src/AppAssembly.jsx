import { useState, useRef } from "react";
import { useWindowSize } from "react-use";
import { languages } from "./languages.js"
import { clsx } from 'clsx'
import { getFarewellText, getRandomWord } from "./utils.js";
import Confetti from "react-confetti"
import "./index_assembly.css"

export default function AppAssembly() {
    const [currentWord, setCurrentWord] = useState(() => getRandomWord())
    const [guessedLetters, setGuessedLetters] = useState([])

    const availableGuesses = languages.length - 1;

    const wrongGuessCount = guessedLetters.reduce((count, char) => {
        return currentWord.includes(char) ? count : count + 1
    }, 0)

    const lastGuessedLetter = guessedLetters.at(-1) // either undefined or value
    const lostLanguage = lastGuessedLetter && !currentWord.includes(lastGuessedLetter)
    const remainingGuesses = availableGuesses - wrongGuessCount

    const isGameWon = currentWord.split("").every((char) => (guessedLetters.includes(char)))
    const isGameLost = wrongGuessCount >= availableGuesses
    const isGameOver = isGameWon || isGameLost

    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    const languageElements = languages.map((language, idx) => {
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
        if (!isGameLost) {
            const toShow = guessedLetters.includes(char) ? char.toUpperCase() : ""
            return <span key={idx}>{toShow}</span>
        }
        return <span key={idx} className={clsx(!guessedLetters.includes(char) && "missed-letter")}>{char.toUpperCase()}</span >
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
            aria-disabled={guessedLetters.includes(char)}
            aria-label={`letter: ${char}`}
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

    function resetGame() {
        setCurrentWord(getRandomWord())
        setGuessedLetters([])
    }

    const { width, height } = useWindowSize()

    return (
        <main>
            {isGameWon && <Confetti width={width} height={height} recycle={false} numberOfPieces={1000} />}
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
                {languageElements}
            </section>
            <section className="word">
                {letterElements}
            </section>
            {/* Combined visually-hidden aria-live region for status update */}
            <section className="sr-only" aria-live="polite" role="status">
                <p>{
                    currentWord.includes(lastGuessedLetter) ?
                        `Correct! Letter ${lastGuessedLetter} is in the word.` :
                        `Sorry the letter ${lastGuessedLetter} is not in the word`
                }
                    You have {remainingGuesses} attempts left.
                </p>
                <p>Current word: {currentWord.split("").map(letter => guessedLetters.includes(letter) ? letter + "." : "blank.").join(" ")}</p>
            </section>

            <section className="keyboard">
                {keyboardElements}
            </section>
            {isGameOver && <button onClick={resetGame} className="new-game">New Game</button>}
        </main>
    )
}

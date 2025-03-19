import { useState } from "react";
import "./index_assembly.css"
import { languages } from "./languages.js"

export default function AppAssembly() {
    const [word, setWord] = useState("react")

    const languagesChips = languages.map((language) => {
        const styles = {
            color: language.color,
            backgroundColor: language.backgroundColor
        }
        return <span key={language.name} className="chip" style={styles}>{language.name}</span>
    })

    const wordArray = [];
    for (let char of  word) {
        wordArray.push(char)
    }
    console.log(wordArray)

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
                    {languagesChips}
                </section>
            </main>
        </main>
    )
}

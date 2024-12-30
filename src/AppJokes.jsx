import Joke from "./components/joke.jsx"
import jokesdata from "./jokesdata.js"

export default function AppJokes() {
    const jokesElements = jokesdata.map((joke, idx) => (
        <Joke
            num={idx + 1}
            setup={joke.setup}
            punchline={joke.punchline}
        />
    ))
    return (
        <main>
            {jokesElements}
        </main>
    )
}

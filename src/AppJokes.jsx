import Joke from "./components/joke.jsx"
import jokesdata from "./jokesdata.js"

export default function AppJokes() {
    const jokesElements = jokesdata.map((joke, idx) => (
        <Joke
            // this is kind of okay to create id on the fly but not good practice
            key={idx + 1}
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

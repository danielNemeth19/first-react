import Joke from "./components/joke.jsx"
import jokesdata from "./jokesdata.js"
import "./index_jokes.css"

export default function AppJokes() {

    const jokesElements = jokesdata.map((joke) => (
        <Joke
            key={joke.id}
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

export default function Joke(props) {
    return (
        <div>
            <h2>Joke {props.num}</h2>
            {props.setup && <p>setup: {props.setup}</p>}
            <p>punchline: {props.punchline}</p>
        </div>
    )
}

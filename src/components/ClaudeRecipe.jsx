import ReactMarkDown from "react-markdown"


export default function Reciepe(props) {
    return (
        <section className="suggested-recipe-container" aria-live="polite">
            <h2>Chef AI recommends</h2>
            <ReactMarkDown >{props.resp}</ReactMarkDown>
        </section>
    )
}

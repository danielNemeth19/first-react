import "./index_tenzies.css"
import Die from "./components/Die.jsx"


export default function AppTenzies() {
    return (
        <main>
            <div className="container">
                <Die value={1} />
                <Die value={3} />
                <Die value={1} />
                <Die value={2} />
                <Die value={5} />
                <Die value={6} />
                <Die value={3} />
                <Die value={4} />
                <Die value={2} />
                <Die value={5} />
            </div>
        </main>
    )
}

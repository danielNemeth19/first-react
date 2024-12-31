import Header from "./components/header.jsx"
import Entry from "./components/entry.jsx"
import data from "./data.js"

export default function App() {
    const dataItems = data.map(
        (entry) => (
        <Entry
                // img={{src: entry.img.src, alt: entry.img.alt}}
                // below also works since entry.img is an object itself in the required shape (it has src and alt keys)
                img={entry.img}
                googleMapsLink={entry.googleMapsLink}
                country={entry.country}
                title={entry.title}
                dates={entry.dates}
                text={entry.text}
                key={entry.id}
                // this is a syntax which allows passing in the whole object
                // and make react to create a prop for each property of the entry object
                // {...entry}
            />
        )
    )
    return (
        <>
            <Header />
            <main className="container">
                {dataItems}
            </main >
        </>
    )
}

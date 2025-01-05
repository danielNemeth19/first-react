import React from "react"


export default function App() {
    const [myFavouriteThings, setMyFavouriteThings] = React.useState([])
    const allFavoriteThings = ["💦🌹", "😺", "💡🫖", "🔥🧤", "🟤🎁", "🐴", "🍎🥧", "🚪🔔", "🛷🔔", "🥩🍝"]

    const thingsElements = myFavouriteThings.map(item => <p key={item}>{item}</p>)


    function addFavouriteThing() {
        console.log("clicked")
        setMyFavouriteThings(prevFav => {
            return [...prevFav, allFavoriteThings[prevFav.length]]
        })
    }

    return (
        <main>
            <button onClick={addFavouriteThing}>Add item</button>
            <section aria-live="polite">
                {thingsElements}
            </section>
        </main>
    )
}

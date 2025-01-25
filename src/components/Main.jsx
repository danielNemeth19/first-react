import React from "react"


export default function Main() {
    const [meme, setMeme] = React.useState(
        {
            topText: "One does not simply",
            bottomText: "Walk into Morder",
            imageUrl: "http://i.imgflip.com/1bij.jpg"
        })

    const [memes, setMemes] = React.useState([])

    React.useEffect(()=> {
        fetch("https://api.imgflip.com/get_memes")
            .then(resp => resp.json())
            .then(jsonResp => setMemes(jsonResp.data.memes))
    }, [])

    console.log(memes.length)
    console.log(memes[10])

    function handleChange(event) {
        let {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={handleChange}
                        value={meme.bottomText}
                    />
                </label>
                <button>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imageUrl} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}

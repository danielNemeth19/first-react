import React from "react"


export default function Main() {
    const [meme, setMeme] = React.useState(
        {
            topText: "One does not simply",
            bottomText: "Walk into Morder",
            imageUrl: "http://i.imgflip.com/1bij.jpg"
        })

    const [allMemes, setMemes] = React.useState([])

    React.useEffect(()=> {
        fetch("https://api.imgflip.com/get_memes")
            .then(resp => resp.json())
            .then(jsonResp => setMemes(jsonResp.data.memes))
    }, [])

    function handleChange(event) {
        let {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    function setRandomImage(){
        let randomIdx = Math.floor(Math.random() * (allMemes.length - 0 + 1)) + 0
        let mem = allMemes[randomIdx]
        setMeme(prevMem => ({
            ...prevMem,
            imageUrl: mem.url
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
                <button onClick={setRandomImage}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imageUrl} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}

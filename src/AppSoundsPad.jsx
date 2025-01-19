import { useState } from "react"
import Pad from "./components/pad.jsx"
import padsData from "./pads.js"
import "./index_sounds_pad.css"

export default function App() {
    const [pads, setPads] = useState(padsData)

    function _setOn(pad, id) {
        if (pad.id === id) {
            return {
                ...pad,
                on: !pad.on
            }
        }
        return pad
    }

    function toggle(id) {
        console.log("clicked", id)
        setPads(prevPads => prevPads.map(
            item => (_setOn(item, id))
        ))
    }
    
    function toggle2(id) {
        console.log("clicked", id)
        setPads(prevPads => prevPads.map(
            item =>  {
                if (item.id === id) {
                    return {
                        ...item,
                        on: !item.on
                    }
                }
                return item
            }
        ))
    }

    function toggle3(id){
        setPads(prevPads => prevPads.map(
            item => {
                return item.id === id ? {...item, on:!item.on} : item
            }
        ))
    }

    const buttons = pads.map(item => (
        <Pad key={item.id} id={item.id} color={item.color} on={item.on} toggle={toggle3}/>
    ))
    return (
        <main>
            <div className="pad-container">
                {buttons}
            </div>
        </main>
    )
}

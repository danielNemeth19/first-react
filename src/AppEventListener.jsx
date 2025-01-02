import ReactDom from "react-dom/client"

export default function AppEventListener() {
    function handleClick() {
        console.log("clicked")
    }
    return (
        <main className="container">
            <img 
                onMouseEnter={()=> console.log("onMouseEnter hopefully")}
                onMouseDown={()=> console.log("onMouseDown hopefully")}
                onMouseUp={()=> console.log("onMouseUp hopefully")}
                src="https://picsum.photos/640/360"
                alt="Placeholder image from Picsum"
            />
            <button onClick={handleClick}>Click me</button>
        </main>
    )
}

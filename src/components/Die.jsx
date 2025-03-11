export default function Die(props) {
    console.log(props)

    const render_btn = () => {
        if (props.isHeld) {
            return (
                <button className="held">{props.value}</button>
            )
        } else {
            return (
                <button >{props.value}</button>
            )
        }
    }

    return (
        render_btn()
    )
}

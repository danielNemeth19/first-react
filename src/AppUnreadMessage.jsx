import React from "react"

export default function App() {
    const [unreadMessages, setUnreadMessages] = React.useState([])
    console.log(unreadMessages)

    function setMessage(num_msg) {
        if (num_msg == 0) {
            return "You are all caught up!!"
        } else if (num_msg === 1) {
            return "You have 1 unread message!"
        }
        return `You have ${num_msg} unread message!`
    }

    return (
        <main>
            <div>
                {
                    unreadMessages.length > 0 && <h1>You have {unreadMessages.length} unread messages </h1>
                }
                {
                    unreadMessages.length === 0 && <p>You have 0 unread messages</p>
                }
            </div>

            <div>
                <h1>{setMessage(unreadMessages.length)}</h1>
            </div>

        </main>
    )
}

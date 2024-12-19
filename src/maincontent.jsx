export default function MainContent({ library }) {
    return (
        <main>
            <h1>Fun facts about {library}</h1>
            <ol>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 200k stars on Github</li>
                <li>Is maintained by Meta</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ol>
        </main>
    )
}

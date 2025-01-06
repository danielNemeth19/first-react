import React from "react"
import "./index_form.css"

export default function App() {

    function handleSubmit(event) {
        event.preventDefault()
        const formElem = event.currentTarget
        const formData = new FormData(formElem)
        const email = formData.get("email")
        const password = formData.get("password")
        console.log(email)
        console.log(password)
        formElem.reset()
    }

    function signUp(formData) {
        const email = formData.get("email")
        const password = formData.get("password")
        const description = formData.get("description")
        const employmentStatus = formData.get("employmentStatus")
        console.log(email)
        console.log(password)
        console.log(description)
        console.log(employmentStatus)
    }

    return (
        <section>
            <h1>Signup form</h1>
            <form onSubmit={handleSubmit} method="post">
                <label htmlFor="email">Email:</label>
                <input id="email" type="email" name="email" defaultValue="daniel19@yahoo.com" />
                <br />
                <label htmlFor="password">Password:</label>
                <input id="password" type="password" name="password" defaultValue="password1" />
                <br />
                <label htmlFor="description">Description</label>
                <textarea id="description" name="description"></textarea>
                <button>Submit</button>
            </form>
            <br />
            <h1>React 19 Signup form</h1>
            <form action={signUp}>
                <label htmlFor="email">Email:</label>
                <input id="email" type="email" name="email" placeholder="blaa@hfz.com" />
                <br />
                <label htmlFor="password">Password:</label>
                <input id="password" type="password" name="password" />
                <br />
                <label htmlFor="description">Description</label>
                <textarea id="description" name="description"></textarea>

                <fieldset>
                    <legend>Employment Status</legend>
                    <label>
                        <input type="radio" name="employmentStatus" value="unemployed"/>
                        Unemployed
                    </label>
                    <label>
                        <input type="radio" name="employmentStatus" value="part-time" />
                        Part-time
                    </label>
                    <label>
                        <input type="radio" name="employmentStatus" defaultChecked={true} value="full-time" />
                        Full-time
                    </label>
                </fieldset>

                <button>Submit</button>
            </form>
        </section>
    )
}

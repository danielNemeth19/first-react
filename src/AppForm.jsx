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
        const dietaryRestrictions = formData.getAll("dietaryRestrictions")
        const favColor = formData.get("favColor")
        console.log(email)
        console.log(password)
        console.log(description)
        console.log(employmentStatus)
        console.log(dietaryRestrictions)
        console.log(favColor)

        const data = Object.fromEntries(formData)
        const allData = {
            ...data,
            dietaryRestrictions
        }
        console.log(allData)
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
                <label htmlFor="email2">Email:</label>
                <input id="email2" type="email" name="email" placeholder="blaa@hfz.com" />
                <br />
                <label htmlFor="password2">Password:</label>
                <input id="password2" type="password" name="password" />
                <br />
                <label htmlFor="description2">Description</label>
                <textarea id="description2" name="description"></textarea>

                <fieldset>
                    <legend>Employment Status</legend>
                    <label>
                        <input type="radio" name="employmentStatus" value="unemployed" />
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

                <fieldset>
                    <legend>Dietary Restrictions:</legend>
                    <label>
                        <input type="checkbox" name="dietaryRestrictions" value="kosher" />
                        Kosher
                    </label>
                    <label>
                        <input type="checkbox" name="dietaryRestrictions" defaultChecked={true} value="vegan" />
                        Vegan
                    </label>
                    <label>
                        <input type="checkbox" name="dietaryRestrictions" defaultChecked={true} value="gluten-free" />
                        Gluten-free
                    </label>
                </fieldset>

                <label htmlFor="favColor">What is your favourite color?</label>
                <select id="favColor" name="favColor" defaultValue="" required>
                    <option value="">-- Choose favorite color --</option>
                    <option value="red">Red</option>
                    <option value="yellow">Yellow</option>
                    <option value="blue">Blue</option>
                </select>

                <button>Submit</button>
            </form>
        </section>
    )
}

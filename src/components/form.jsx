import React from "react"

export default function Main() {
    const [ingredients, setIngredients] = React.useState([])
    const ingredientsListItems = ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)

    function handleSubmit(formData) {
        let newItem = formData.get("ingredient")
        setIngredients(ingredients => [...ingredients, newItem])
    }

    return (
        <main>
            <form className="add-ingredient-form" action={handleSubmit}>
                <input
                    type="text"
                    name="ingredient"
                    placeholder="e.g. oregano"
                    aria-label="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            <ul>
                {ingredientsListItems}
            </ul>
        </main >
    )
}

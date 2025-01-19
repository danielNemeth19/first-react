import React from "react"
import IngredientsList from "./IngredientsList.jsx"
import Recipe from "./ClaudeRecipe.jsx"
import { query } from "./ai.js"

export default function Main() {
    const [ingredients, setIngredients] = React.useState([]) 
    const [recipe, setRecipe] = React.useState("")

    function handleSubmit(formData) {
        let newItem = formData.get("ingredient")
        setIngredients(ingredients => [...ingredients, newItem])
    }

    async function handleRecipeButton() {
        try {
            const resp = await query(ingredients)
            console.log(resp[0]["generated_text"])
            setRecipe(resp[0]["generated_text"])
        } catch (error) {
            console.error("error fetching recipe: ", error)
        }
        // setRecipeShown(prev => (!prev))
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
            {
                ingredients.length > 0 && <IngredientsList ingredients={ingredients} handler={handleRecipeButton} />
            }
            {
                recipe && <Recipe resp={recipe} />
            }
        </main >
    )
}

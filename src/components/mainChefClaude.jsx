import React from "react"
import IngredientsList from "./IngredientsList.jsx"
import Recipe from "./ClaudeRecipe.jsx"
import { getRecipeFromMistral } from "./ai.js"

export default function Main() {
    const [ingredients, setIngredients] = React.useState([]) 
    const [recipe, setRecipe] = React.useState("")

    const recipeSection = React.useRef(null)

    function handleSubmit(formData) {
        let newItem = formData.get("ingredient")
        setIngredients(ingredients => [...ingredients, newItem])
    }

    async function handleRecipeButton() {
        try {
            const resp = await getRecipeFromMistral(ingredients)
            setRecipe(resp)
        } catch (error) {
            console.error("error fetching recipe: ", error)
        }
    }

    React.useEffect(() => {
        if (recipe !== "" && recipeSection != null) {
            recipeSection.current.scrollIntoView({behavior: "smooth"});
        }
    }, [recipe])


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
                ingredients.length > 0 && <IngredientsList ref={recipeSection} ingredients={ingredients} handler={handleRecipeButton} />
            }
            {
                recipe && <Recipe resp={recipe} />
            }
        </main >
    )
}

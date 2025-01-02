export default function Main() {
    const ingredients = ["Chicken", "Oregano", "Tomatoes"]
    const ingredientsListItems = ingredients.map((item) => (
        <li key={item}>{item}</li>
    ))

    function handleSubmit(event){
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        ingredients.push(newIngredient)
        console.log(ingredients)
    }

    return (
        <main>
            <form className="add-ingredient-form" onSubmit={handleSubmit}>
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

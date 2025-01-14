import React from "react"
import IngredientsList from "./components/IngredientsList"
import ForahiaRecipe from "./components/ForahiaRecipe"
import { getRecipeFromChefClaude, getRecipeFromMistral } from "./ai"

export default function Main() {
    const [ingredients, setIngredients] = React.useState(
        ["chicken", "all the main spices", "corn", "heavy cream", "pasta"]
    )
    const [recipe, setRecipe] = React.useState("")

    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromChefClaude(ingredients)
        setRecipe(recipeMarkdown)
    }

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>

            {/*  using conditional rendering to display the Ingredient */}
            {ingredients.length > 0 &&
                <IngredientsList
                    ingredients={ingredients}
                    toggleRecipeShown={getRecipe}
                />
            }


            {/*  using conditional rendering to display the recommendations  */}
            {recipe && <ForahiaRecipe />}
        </main>
    )
}
import React from "react";
import Recipe from "./Recipe.jsx"

function RecipeList({Recipes, onFavoriteRecipe}) {
    const RecipeArray = Recipes.map((Recipe) => {
        return <Recipe
        key={Recipe.query}
        Recipe={Recipe}
        onFavoriteRecipe={onFavoriteRecipe}
        />
    })

    return (
        <div className="all_cards">
            <ul className="app_container">{RecipeArray}</ul>
        </div>
    )
}
export default RecipeList;
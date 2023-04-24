import React from "react";

import fruit from "./fruit.png"
import Navbar from "./Nav"

function Favorites({Recipe, onFavoriteRecipe}) {
    const favoriteRecipes = Recipe.filter((Recipe) => (Recipe.favorite))
    const favoriteRecipe = favoriteRecipes.map((Recipe) => (
        <Recipe
        key={Recipe.query}
        Recipe={Recipe}
        onFavoriteRecipe={onFavoriteRecipe}
        />
    ))
    return (
        <div className="App">
              <Navbar />
      <div className="bottom">
        <h2>Recipe Bar</h2>
        <img src={fruit} width="50px" height="50px"></img>
        <div className="headbox">
        <p>Find out how to make delicious meals for you.</p>
        <p>We have hundreds of options to satisfy your dietary needs and preferences.</p>
        <div>
                <ul className="favorite-container">{favoriteRecipe}</ul>
            </div>
        </div>
      </div>
        </div>
    )
}

export default Favorites;

import React, { useState } from 'react';
import "./Recipe.css";
import info from "./info.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Nav from 'react-bootstrap/Nav';
import "./Search.css"

const Recipe = ({ title, image, ingredients,totalNutrients,calories, favorite, onFavoriteRecipe, query }) => {
const [ isFavorited, setIsFavorite ] = useState(false)
const handleFavoriteChange = () => {

  setIsFavorite(!isFavorited);
  
  fetch(`http://localhost:3000/recipes/${query}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({favorite: !favorite})
  })
  .then(response => response.json())
  .then(updateRecipe => onFavoriteRecipe(updateRecipe)) 
}

  return (
<li className="cards_item">
      <div className="card" tabindex="0">
      <div className="card_image">
      <img  src={image} alt="" />
      </div>
      <div className="card2">
      <button className="favorite-button" onClick={handleFavoriteChange}>
      <FontAwesomeIcon icon={faHeart} color={isFavorited ? 'red' : 'grey'} />
    </button>
        <h1 className="card_title">{title}</h1>
        <img className="calorie" src ={info}  width="50px" height="50px"/>
        
        <div className="hide">
        <ul >
            <h2 >Nutrients</h2>
          <li>
          Carbs: {Math.ceil(totalNutrients.CHOCDF.quantity) + totalNutrients.CHOCDF.unit}
          </li>
          <li>
          Protein: {Math.ceil(totalNutrients.PROCNT.quantity) + totalNutrients.PROCNT.unit}
          </li>
          <li>
          Sugar: {Math.ceil(totalNutrients.SUGAR.quantity) + totalNutrients.SUGAR.unit}
          </li>
          <li>
          Fat: {Math.ceil(totalNutrients.FAT.quantity) + totalNutrients.FAT.unit}
          </li>
          <h2>Calories</h2>
          <li>
          Calories: {Math.ceil(calories)}
          </li>
          </ul>
        </div>
      </div>
    </div>
    </li>

  

  );
};
const RecipePage = ({ title, image, ingredients,totalNutrients,calories })=>{
return(
  <div>
    <h2>title: {title}</h2>

    <img src={image}></img>
<ol>Ingredients List:
  {
    ingredients.map(i=>{
      <list>{i}</list>
    })
  }
</ol>

<h2>Calories:{calories}</h2>
</div>
)
}

export default Recipe;
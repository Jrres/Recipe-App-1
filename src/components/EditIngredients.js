import React from "react";
import Navbar from "./Nav";
import {firestore} from "../firebase"
import { update } from "firebase/database";
const EditIngredients = () => {
  
  const [Ingredients, setIngredients] = React.useState([]);
  const [Ingredient, setIngredient] = React.useState("");
  const [APIlist,setAPIlist] = React.useState([]) 
  React.useEffect(()=>{
    const cleanUp = firestore
    .collection('Ingredients')
    .onSnapshot(snapshot=>{
      const items = snapshot.docs
      .map(val=>{
        return {label:val.data().label,...val.data()};
      })
      setIngredients(items)
    })
    return () => cleanUp()
  },[])
 
 
  function handleSubmit(e) {e.preventDefault();
    const newIngredient = {
      label: Ingredient,
      id: new Date()
    };
    firestore
    .collection('Ingredients')
    .add(newIngredient)
    .catch((err)=>{
      throw err;
    })

    setIngredients([...Ingredients].concat(newIngredient));
    setIngredient("");
  }
  function deleteIngredient(id) {
    firestore.collection('Ingredients').onSnapshot(sn=>{
      sn.docs.map(d=>{
        const aid = d.id
        console.log(d.data().id,id)
        if(d.data().id.seconds == id.seconds){
          firestore.collection('Ingredients').doc(aid).delete()
        }
      })
      
    })
  }
  return (
      <div id="todo-list">
        <Navbar/>
        <h1>Ingredients List</h1>
        <form onSubmit={handleSubmit}>
          <input
              type="text"
              onChange={(e) => setIngredient(e.target.value)}
              value={Ingredient}
          />
          <button type="submit">Add Ingredient</button>
        </form>
        {<div>
          {Ingredients.map((val)=>{
              return (
                <div key={val.id}>
                  {val.label}
                  <div>
                    <button onClick={()=>{deleteIngredient(val.id)}}>delete</button>
                  </div>
                </div>
              )
          })}
        </div>}
      </div>
  );
};
export default EditIngredients;
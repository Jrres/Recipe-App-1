import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import Search from './components/RecipeSearch';
import Login  from './components/Login';
import Signup from './components/Signup';
import DietProfile from './DietProfile';
import Recipe from './components/RecipePage';
import EditIngredients from './components/EditIngredients';
import Favorites from './components/Favorites';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element ={<Home />} />
      <Route path="/Home" element ={<Home />} />
      <Route path="/Search" element ={<Search />} />
      <Route path="/Login" element ={<Login />} />
      <Route path="/Signup" element ={<Signup />} />
      <Route path = "/Recipe" element = {<Recipe /> }/>
      <Route path='/DietProfile' element = {<DietProfile/>}/>
      <Route path="/EditIngredients" element ={<EditIngredients />} />
      <Route path="/Favorites" element ={<Favorites />} />

    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


import React from 'react'
import Home from './Home'
import Search from '../components/RecipeSearch'
import Navbar from "../components/Nav"
import Recipe from '../components/Recipe.tsx'
import Login  from '../components/Login'
import { Container } from 'react-bootstrap'
import Signup from '../components/Signup'

//Recipe search is the home page for now
function Pages() {
  return (
    <Container className = "d-flex align-items-center-justify-content-center"
    Style = {{minHeight:"100vh"}}>
      <div className='w-100' style = {{ maxWidth: "400px"}}/>
        <Home/>
        <Search />
        <Login />
        <Signup/>
    </Container>
  )
}

export default Pages
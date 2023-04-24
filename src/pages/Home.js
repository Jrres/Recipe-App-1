import Navbar from "../components/Nav"
import cuttingboard from "../components/cuttingboard.jpg"

import CardComponent from "../components/Cards"
import Footer from "../components/Footer"
import React, { useState } from 'react'
import Container from "react-bootstrap/esm/Container"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Button} from "react-bootstrap"
import { Divider, SvgIcon } from '@mui/material';
import chickimg from "../chickenimg.jpg"
import Card from 'react-bootstrap/Card';
import {Form} from "react-bootstrap"
import scale from "../scale.jpg"
import BrunchDiningIcon from '@mui/icons-material/BrunchDining';
import {Typography} from "@mui/material"
import mainImg from "../foodgather.jpg"

function Home() {
  const [query,setQuery]=useState("")
  const [quiz,setQuiz]=useState(false)
  const onSubmit =()=>{

  }
  return (
    <div class="page__grid" role="grid">
      
        <Navbar />
          
          <Typography variant="h2" component="h2" sx={{fontSize:"30px",fontFamily:"Blinker"}}>
          <SvgIcon component={BrunchDiningIcon} inheritViewBox  color="secondary"/>
              MyRecipe
          </Typography>
          
        <hr>
        </hr>
       
          <img src = {mainImg} 
           style={
          {objectFit:"cover",
          width:"100%",
          height:"300px",
          objectPosition:"50%, 50%"
          }}></img>
        
        <Container fluid="md" 
        style = {{color:"white", fontSize:"20px", textAlign:"center" , fontFamily: 'Almarai',
        fontFamily: 'Blinker'}} >
          <hr>
          </hr>
          <Row >
            <Col>
              <img src={chickimg} style={{width:"100%",height:"400px"}} ></img>
            </Col>
            <Col style={{background:"#554971"}}>
              <h1>Find Your Recipe</h1>
              <p>By using our website you can search for many delicious recipes. From vegan to Keto, we've got many food options to offer. Begin today by using the search bar.</p>
              <Form>
                
               <Col >
               <Form.Control
                type="text"
                placeholder="search"
                name="recipeSearch"
                id="inlineFormInput"
                onChange={(e)=>{
                  setQuery(e.target.value)
                }}
                style = {{width:"50%",margin:"auto  "}}
                />
               <Button type="submit" href="/Search">
                continue
                </Button>
               </Col>
              </Form>
            </Col>
          </Row>
          <hr class="hr" />
          <Row >
          <Col style={{background:"#63768D"}}>
          
          <h2>Use our Pantry</h2>
          <p>Use our ingredients editor to keep track of your ingredients while crafting recipes. </p>

          <Button href="/EditIngredients">Editor</Button>
          </Col>
          <Col>
          <img src={cuttingboard} style={{width:"100%",height:"400px"}} ></img>
          </Col>
          </Row><hr class="hr" />
          <Row  >
            <Col>
              <img src={scale} style={{width:"100%",height:"400px"}}  ></img>
           </Col>
            <Col style={{background:"#8AC6D0",color:"black"}}>
            <h2>Check your Calories</h2>
            <p>The best way to accomplish your fitness goals is With our calorie tracker.It will count the calories you've consumed and burned for you. That's right, just enter the meals or excersizes you did that day and count away!</p>
            <Button href="/DietProfile">Profile</Button>
            </Col>
          </Row>
          <hr></hr>
          <Row>
            <Col>
            </Col>
            <Col>
            <Card style = {{color : "black"}}>
            <h2>
                Goals
            </h2>
            <p>
              complete your calorie tracker quiz for a better suited experience
            </p>
            
            <Button onClick={()=>{
              setQuiz(!quiz)
            }}>
              Begin
            </Button>
            {quiz?<CardComponent/>:null}  
            </Card>
            </Col>
            <Col>
            </Col>
          </Row>
        </Container>
        <hr class="hr" />
        <Card bg="dark">
      <Card.Body >This is some text within a card body.</Card.Body>
      </Card> 
      <br />
        <Footer />
    </div>
  )
}

export default Home
//display 3 cards
//add clickable to card 
//onclick will setstate of each choice
//update the click to the prop of the card 
//click next to go to next set of 3 cards
//LAST section should have a submission button 
import react, { useEffect } from "react";
import {useState} from "react"
import ListItem  from './ListItem';
import "./card.css"

import Typography from "@mui/joy/Typography/Typography";
import { Divider } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';


const CardComponent = ()=>{
    const [weight,setWeight] = useState(0)
    const [diet,setDiet] = useState("")
    const [goal,setGoal] = useState("")
    const [next,setNext]=useState(0)
    const [choice1,setChoice1] = useState(0)
    const [choice3,setChoice3] = useState(0)
    const Title1 = "What's your goal?"
        const Title2 = "How much do you Weigh?"
        const Title3 = "Do you have any diet preferences?"
        const Text1 =["Weight Loss","Eat Healthier","Try any food"]
        const Text3 =["Keto","Vegan","Vegetarian" ,"any"]

    const submit = ()=>{
        setGoal(Text1[choice1])
        setDiet(Text3[choice3])
        //axios.get("http//localhost:3001/SetPreferences:?Goal=${goal}&Diet=${diet}&weight={weight}")
    }
    const currSet=(num)=>{
        switch(num){
            case 0:
            return(
                
                <Box sx={{ flexGrow: 1 }} className="cardarea">
                    
                    <Grid container spacing={2} className="container" >
                     
                       
                        
                        <List
                        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                        component="nav"
                        aria-labelledby="nested-list-subheader"

                        >
                        <h2 className="cardtitle"> {Title1} </h2>
                        <div className = "cardanim1" ><ListItem text={Text1[0]} state = {setChoice1} q ={0} /></div>
                       
                       
                        
                        
                        <div className = "cardanim2"><ListItem  text={Text1[1]} state = {setChoice1} q ={1}/></div>
                       
                    
                       
                        
                        <div className = "cardanim3"><ListItem  text={Text1[2]} state = {setChoice1} q ={2}/></div>
                        
                     
                       
                    <Button variant="contained" onClick={()=>{
                    
                    setGoal(Text1[choice1])
                    setNext(next+1)
                        
                    }} 
                    >next
                    
                    </Button>
                    </List>
                    </Grid>
                </Box>
             
               
            )
            case 1:
            return(
                <div className="cardarea">
                    <div style={{background:"white"}}>
                    <h2>{Title2}</h2>

                    <input type="text" onChange={(e)=>{
                        e.preventDefault();
                        let wt = e.target.value
                        if(!isNaN(wt) && wt>70 && wt<300)
                            setWeight(wt)
                        else 
                            return `please enter a valid weight`
                    }}>

                    </input>
                    <Button variant="contained" onClick={(e)=>{
                    e.preventDefault()
                    setNext(next+1)
                    console.log(weight)
                        
                    }} 
                    >next
                    </Button>

                    </div>
                </div>
            )
            case 2:
            return(
                <Box sx={{ flexGrow: 1 }} className="cardarea">
                    <Grid container spacing={2} className="container" >
                    <List
                    sx={{ width: '100%', bgcolor: 'background.paper' }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"

                    >
                    <h2 className="cardtitle"> {Title3} </h2>                
                    <ListItem  className = "cardanim1" text={Text3[0]} state = {setChoice3} q ={0}/>
                    <ListItem  className = "cardanim2" text={Text3[1]} state = {setChoice3} q ={1}/>
                    <ListItem  className = "cardanim3" text={Text3[2]} state = {setChoice3} q ={2}/>
            
                    <Button variant="contained" onClick={()=>{
                    setDiet(Text3[choice3])
                    setNext(next+1)
                
                    }} 
                    >next
                    </Button>
                    </List>
                </Grid>
                
                </Box>
            )
            case 3:
                return(
                    <Box sx={{ flexGrow: 1 }} className="cardarea">
                        <Grid container spacing={2} className="container" >
                        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                                component="nav"
                                aria-labelledby="nested-list-subheader">
                            <Grid item xs = {12}>
                                    
                                <h2 className="cardtitle"> Good To Go</h2>
                            
                            </Grid>
                            Your Goal:<ListItem text={goal}/>
                           Your Weight: <ListItem text= {weight} />
                            Your Diet:<ListItem text = {diet} />
                            Thank you for completing your goals questions 
                        </List>
                        <Button variant="contained" onClick={()=>{
                        setDiet(Text3[choice3])
                        setNext(next+1)
                    
                        }} 
                        >End
                        </Button>
                        </Grid>
                    </Box>
                    )
            default:
                break;
        }
    }
return(
    <div>

        {   currSet(next) }
        

    </div>
)
}
export default CardComponent
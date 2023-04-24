import { Link,useLocation } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from "./Nav";
import foodpng from "./fruit.png"
import Button from 'react-bootstrap/Button';
import Divider from "@mui/material/Divider"
import { Row,Col
,Container, 
ListGroupItem} from "react-bootstrap";
import Badge from 'react-bootstrap/Badge';
import Footer from "./Footer.js"
import { useEffect,useState } from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { SvgIcon } from "@mui/material";
import GridViewIcon from '@mui/icons-material/GridView';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import AssignmentTwoToneIcon from '@mui/icons-material/AssignmentTwoTone';
import EggAltTwoToneIcon from '@mui/icons-material/EggAltTwoTone';
import { firestore } from "../firebase";
const Pop = (type) =>{return (
<Popover id="popover-basic">
<Popover.Header as="h3">This ingredient is </Popover.Header>
<Popover.Body>
  {type}
</Popover.Body>
</Popover>)}
const RecipePage = (val)=>{
    const [ingredients,setIngredients] = useState([])
    var inpantry = false;
        useEffect(()=>{
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
      })
    let location = useLocation();
   


    //location.state.totalNutrients

    var r= location.state.recipe
    
    return(
    <div>
        <Navbar />
        
      <Container>
        <Row>
          <Col>
          <div style = {{height:"100px"}}></div>
          </Col>  
        </Row>
        <Row>
            <Col xs={2}></Col>
          <Col>
          <header className="title">
        <h2 > {r.label}</h2>
        <p >
            Meal Type: 
            {r.mealType.map(v=>{
            return <>{v}</>               
            })
            }
        </p>
        <p >
            Dish: 
            {r.dishType.map(v=>{
            return <>{v}</>               
            })
            }
        </p>
    
        <img className="imgr" src={r.image} style = {{width:"100%",objectFit:"contain",height:"400px",       /* Opera */
  imageRendering:" -webkit-optimize-contrast",/* Webkit (non-standard naming) */
  msInterpolationMode: "nearest-neighbor"}} ></img>
  <section>tags</section>
  <hr></hr>
  <div style={{width:"50%", margin:"auto"}}>
        {r.dietLabels.map(v=>{
            return (
                <Badge bg="primary">
                    {v}
                </Badge>
            )
        })}
        {r.healthLabels.map(v=>{
            return (
                <Badge bg="warning" text="black">
                    {v}
                </Badge>
            )
        })}
        {r.cautions.map(v=>{
            return (
                <Badge bg="danger" pill text="warning">
                    {v}
                </Badge>
            )
        })}
        </div>
        </header>
          </Col>  
        </Row>
        <hr></hr>
        <Row>
            <Col xs={2}>
            <Nav className="col-md-12 d-none d-md-block bg-light sidebar"
      activeKey="/home"
      onSelect={selectedKey => alert(`selected ${selectedKey}`)}
      >
          <div className="sidebar-sticky"></div>
      <Nav.Item>
          <Nav.Link onClick={async ()=>{
          }}>related searches</Nav.Link>
      </Nav.Item>
      <Nav.Item>
            <Nav.Link eventKey="link-1">Dinner</Nav.Link>
      </Nav.Item>
      <Nav.Item>
          <Nav.Link eventKey="link-2">Desert</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link eventKey="disabled" disabled>
      All meals
      </Nav.Link>
      </Nav.Item>
      </Nav>
      
            </Col>
            <Col xs={6}>
            <section class="section-2 ingredients">
        
        
        
        <h2>Ingredients List:</h2>
        <SvgIcon component={EggAltTwoToneIcon}></SvgIcon>
        <ListGroup as="ol" numbered>
        
        {
            r.ingredients.map(i=>{
                ingredients.map(j=>{
                    
                    if(i.food == j.label)
                    inpantry = true;
                })
                if(inpantry){
                    inpantry = false;
                    return(<ListGroup.Item variant="primary">
                        <div className="ms-2 me-auto">
                    <div className="fw-bold">{i.food}</div>
                    <img src={i.image} width="70px"></img>
                  </div> 
                  <Badge bg="primary" pill>
                    you have it
                    </Badge>
                    <OverlayTrigger trigger="click" placement="right" overlay={Pop(i.foodCategory)}>
                        <Button variant="" style={{top:"0",right:"0",position:"absolute"}}><SvgIcon component={LiveHelpIcon}></SvgIcon></Button>
                    </OverlayTrigger>
        </ListGroup.Item>)
                }else{
                   
                    return (
        <ListGroup.Item variant="">
            <div className="ms-2 me-auto">
                <div className="fw-bold">{i.food}</div>
                <img src={i.image} width="70px"></img>
            </div> 
            <Badge bg="danger" pill>
            missing
            </Badge>
            <OverlayTrigger trigger="click" placement="right" overlay={Pop(i.foodCategory)}>
                <Button variant="" style={{top:"0",right:"0",position:"absolute"}}><SvgIcon component={LiveHelpIcon}></SvgIcon></Button>
            </OverlayTrigger>
        </ListGroup.Item>)
                }
            })
        }
        </ListGroup>
       
           </section>
            </Col>
            <Col style={{backgroundColor:"#B0A1BA", color:"white",fontFamily:"blinker", backgroundBlendMode: "overlay",height:"fit-content"}}>
            <aside class="sidebar">
            <div>

                <hr></hr>
                <span>
               <h2>PREP TIME</h2>
               <SvgIcon component={AccessAlarmIcon}></SvgIcon>
               {r.totalTime==0?<>less than a min</>:<>{r.totalTime} mins </> } 
                </span>
          
            </div>
            <div>
                 
               <span>COOK TIME <br></br>
               {r.totalTime==0?<>less than a min</>:<>{r.totalTime} mins </> } 
               </span>
               
            <hr></hr>
            </div>
            <div>
               <span>
                <SvgIcon component={GridViewIcon}></SvgIcon>
                   Number of servings: {r.yield}
               
               </span>
               <hr></hr>
            </div>

           </aside>
            </Col>
        </Row>
        <hr></hr>
        <Row>
        <Col xs={2} >
        
        </Col>
        <Col xs={6}  class="p-3 mb-2 bg-warning text-dark" style={{backgroundColor:"#ABC8C7"}}>
        <section>
        <ol className="section1">
        <h2>Instructions</h2>
        <SvgIcon component={AssignmentTwoToneIcon}></SvgIcon>
        {
            r.ingredients.map((i,p)=>{
                
            if(p!=0)
            return(
                <div>
                <li>{
                i.text
                }</li>
                
                </div>
            )})
        }
        </ol>
        </section>
        
        </Col>
        <Col className="p-4 mb-1 bg-warning text-dark" style={{fontFamily:"Blinker"}}>
        <div >
        <h2>Nutrional facts:</h2>
        <hr></hr>
        <ul>
        <li>
        <h3>Calories:</h3>
        
        </li>
        <li>
        {Math.ceil(r.calories)}
        </li>
        <li>
        <h3>carbs: </h3>

        {Math.ceil(r.totalNutrients.CHOCDF.quantity) + r.totalNutrients.CHOCDF.unit}
        </li>
        <li>
        <h3>protein: </h3>
        {Math.ceil(r.totalNutrients.PROCNT.quantity) + r.totalNutrients.PROCNT.unit}
        </li>
        <li>
        <h3>sugar: </h3>
        {Math.ceil(r.totalNutrients.SUGAR.quantity) + r.totalNutrients.SUGAR.unit}
        </li>
        <li>
        <h3>fat:</h3>
        {Math.ceil(r.totalNutrients.FAT.quantity) + r.totalNutrients.FAT.unit}
        </li>
        </ul>
        </div>
        
            </Col>
        </Row>
        
        <Divider />
        </Container>
        <Footer />
        </div>
    )
}
export default RecipePage;
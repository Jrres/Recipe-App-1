import {Link} from "react-router-dom"
import { Divider, SvgIcon } from "@mui/material"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Dropdown } from "react-bootstrap";
import FoodBankIcon from '@mui/icons-material/FoodBank';
const Bar = ()=>{
    return(
        <>
            <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
                <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Nav className="me-auto">
                    <Nav.Link><SvgIcon component={FoodBankIcon} color ="primary" fontSize="large"/></Nav.Link>
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/Search">Search</Nav.Link>
                    <Nav.Link href="/EditIngredients">Pantry</Nav.Link>
                    <Nav.Link href="/DietProfile">Profile</Nav.Link>
                    <Nav.Link href="/Login">Login</Nav.Link>
                </Nav>

                <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    Recipes
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="/Search?q=desert">Deserts</Dropdown.Item>
                    <Dropdown.Item href="/Search?q=beef">Meat Lovers</Dropdown.Item>
                    <Dropdown.Item href="/Search?q=dairy">Dairy</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
                </Container>
            </Navbar>
        </>
)
} 
export default Bar;
import React, {useState} from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../firebase';
import { NavLink, useNavigate } from 'react-router-dom'
import Navbar from './Nav';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/Home")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });

    }
 
    return(
   
   <div>
    <Navbar/>
           <h2>Login</h2>
           <Form onSubmit={onLogin} className="mb-3">
            <Form.Group as= {Row} controlId="formGroupEmail" className="mb-3">
               <Form.Label  column sm={2}>Email Address</Form.Label>
               <Col sm={10}>
               <Form.Control
                   value={email} 
                   onChange={(e) => setEmail(e.target.value)} 
                   type="email" placeholder="youremail@gmail.com"
                   id="email" 
                   name = "email"
               />
               </Col>
               </Form.Group>
               <Form.Group as= {Row} controlId="formGroupPassword" className="mb-3">
               <Form.Label column sm={2}>Password</Form.Label>
               <Col sm={10}>
               <Form.Control value={password} onChange={(e) => setPassword(e.target.value)}  type="password" placeholder="*******" id="password" name = "password"/>
               </Col>
               </Form.Group>
               <Button variant = "primary"type="submit"> Log In</Button>
           </Form>
           <p>
            No account yet? {' '}
            <NavLink to="/Signup">
                Sign up
            </NavLink>
            </p>
   </div>
    )
}

export default Login
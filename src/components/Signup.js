import React, {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../firebase';
import Navbar from './Nav';

 
const Signup = () => {
    const navigate = useNavigate();
 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
 
    const onSubmit = async (e) => {
      e.preventDefault()
     
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            navigate("/Login")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
        });
 
   
    }
 
  return (
    <div >      
        <Navbar/>  
        
            <div className="login">
                <div className="auth-form-container">  
                  
                        <h2> Sign up </h2>
                        <h3 className="text-white text-center text-base  tracking-tight text-gray-900">
                         Welcome, New User
                        </h3>   
                               
                                                                                                 
                    <form className="login-form">                                                                                            
                       
                            
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                type="email"
                                label="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}  
                                required
                                placeholder="Email address"                                
                            />
                           
                           
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    label="Create password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} 
                                    required 
                                    placeholder="Password"              
                                />
                                         
                            <button
                                type="submit" 
                                onClick={onSubmit} 
                                                     
                            >Sign up                                
                            </button>
                       
                        
                                                                     
                    </form>
                   
                    <p>
                        Already have an account?{' '}
                        <NavLink to="/login">
                            Sign in
                        </NavLink>
                    </p>                   
                </div>
            </div>
        
    </div>
  )
}
 
export default Signup
import React, { useState, useContext } from 'react';
import {UserContext} from "../context/userContext"
import { useNavigate } from "react-router-dom";
import './login.css';


const Login = () => {
  const {userName, setUserName} = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setUserName(name);
    // Add your login logic here
    // For simplicity, this example just logs the entered email and name to the console
    navigate("/home")
    console.log('Login clicked! Email:', email, 'Name:', name);
  };

  return (
    <div className="app">
      <header className="header">
        TripPlanner
      </header>
      <div className="login-container">
      <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button onClick={(e) => handleLogin(e)}>Login</button>
      </div>
    </div>
  );
};

export default Login;

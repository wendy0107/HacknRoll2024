// Home.jsx

import React, {useState, useContext} from 'react';
import {UserContext} from "../context/userContext";
import CountryCard from "../CountryCard.jsx";
import Navbar from "./navbar.jsx";
import './home.css';

const Home = ({name}) => {
// const name = useContext(UserContext)    
  return (
    <div className='app'>
      <header className="header">
        TripPlanner
      </header>
      <div className="welcome-container">
        <h1>Welcome, {name}!</h1>
        <p>Here's a quick look at your upcoming trips:</p>
        <br />
      </div>
      <div className='trips'>
        <CountryCard
        title="Looking for your next getaway..."
        imageUrl=""
        date="Book the date now!"
        />
        <br />

        <CountryCard
        title="Looking for your next getaway..."
        imageUrl=""
        date="Book the date now!"
        />
        <br />

        <CountryCard
        title="Looking for your next getaway..."
        imageUrl=""
        date="Book the date now!"
        />
        <br />
        
        <CountryCard
        title="Looking for your next getaway..."
        imageUrl=""
        date="Book the date now!"
        />
        <br />
      </div>
    </div>
  );
};

export default Home;
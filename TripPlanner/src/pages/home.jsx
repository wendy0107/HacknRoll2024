// Home.jsx

import React, {useState, useContext} from 'react';
import {UserContext} from "../context/userContext"



const Home = ({name}) => {
// const name = useContext(UserContext)    
  return (
    <div className='app'>
      <header className="header">
        TripPlanner
      </header>
      <div className="welcome-container">
        <h1>Welcome {name}</h1>
      </div>
    </div>
  );
};

export default Home;

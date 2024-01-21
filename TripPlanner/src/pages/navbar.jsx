import React, { useState } from 'react';
import './navbar.css';
import {Link} from "react-router-dom";
import Home from "./home.jsx";

const Navbar = () => {

  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_home">
            <p><Link to="/home">TripPlanner</Link></p>
        </div>
        <div className="navbar-links_container">
          <p><Link to="/flights">Flights</Link></p>
          <p><Link to="/accomodations">Accomodations</Link></p>
          <p><Link to="/destinations">Destinations</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
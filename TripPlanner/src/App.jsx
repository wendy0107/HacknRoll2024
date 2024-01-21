// App.jsx
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useContext } from 'react';
import Login from "./pages/login"
import Home from "./pages/home"
import { UserContext } from "./context/userContext";
import './App.css';
import TripPage from "./pages/tripPage";

const App = () => {

  const [userName, setUserName] = useState("")
  return (
    <UserContext.Provider value={{userName, setUserName}}>
    <Router>
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/planner/:trip_id" element={<Home name={userName} />}></Route>
      <Route path="/trips" element={<TripPage />}></Route>
    </Routes>
    </Router>
    </UserContext.Provider>
    )
};

export default App;

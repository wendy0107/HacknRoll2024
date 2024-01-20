// App.jsx
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useContext } from 'react';
import Login from "./pages/login"
import Home from "./pages/home"
import { UserContext } from "./context/userContext";
import './App.css';

const App = () => {

  const [userName, setUserName] = useState("")
  return (
    <UserContext.Provider value={{userName, setUserName}}>
    <Router>
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/home" element={<Home name={userName} />}></Route>
    </Routes>
    </Router>
    </UserContext.Provider>
    )
};

export default App;

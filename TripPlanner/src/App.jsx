// App.jsx
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useContext } from 'react';
import Login from "./pages/login"
import Home from "./pages/home"
import { UserContext } from "./context/userContext";
import './App.css';
import { createClient } from "@supabase/supabase-js";

const App = () => {
  // const dotenv = require('dotenv');
  // const { createClient } = require('@supabase/supabase-js');
  // dotenv.config();

  const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
  const SUPABASE_API_KEY = import.meta.env.VITE_SUPABASE_API_KEY;
  // const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY);

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

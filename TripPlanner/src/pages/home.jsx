// // Home.jsx

// import React, {useState, useContext, useEffect} from 'react';
// import { useParams } from "react-router";
// import PlaceCard from '../components/PlaceCard';
// import { fetchPlaceDataFromSupabase } from '../supabase';

// const Home = ({name}) => {
//   const trip_id = useParams()
//   const [destination, setDestination] = useState('');
//   const [placeData, setPlaceData] = useState([]);  

//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await fetchPlaceDataFromSupabase();
//       setPlaceData(data);
//     };
//     fetchData();
//   }, []);  

//   const handleAddPlace = async (event) => {
//     event.preventDefault();
//     try {
//         const res = await fetch(`http://localhost:3000/place_details`,
//         {method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({destination, trip_id}),
//     }
//     );
//     const response = await res.json();
//     console.log(response)
//     const newData = await fetchPlaceDataFromSupabase();
//     setPlaceData(newData);

//       // Clear the input field
//     setDestination('');
// } catch (error) {
//     console.error("error with backend", error);
// }
// }

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
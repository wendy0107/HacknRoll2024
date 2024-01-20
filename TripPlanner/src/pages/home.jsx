// Home.jsx

import React, {useState, useContext, useEffect} from 'react';
import {UserContext} from "../context/userContext"
import PlaceCard from '../components/PlaceCard';
import { fetchPlaceDataFromSupabase, addPlace } from '../supabase';

const Home = ({name}) => {
// const name = useContext(UserContext)  
  const [destination, setDestination] = useState('');
  const [placeData, setPlaceData] = useState([]);  
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPlaceDataFromSupabase();
      setPlaceData(data);
    };
    fetchData();
  }, []);  

  const handleAddPlace = async (event) => {
    event.preventDefault();
    try {
        const res = await fetch(`http://localhost:3000/place_details`,
        {method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({placeData}),
    }
    );
    const response = await res.json();
    console.log(response)
} catch (error) {
    console.error("error with backend", error);
}
}

  return (
    <div className='app'>
        <header className="header">
            TripPlanner
        </header>
        <div className="welcome-container">
            <h1>Welcome {name}</h1>
        </div>
        <div className="placePageContainer">
            <input type="text" placeholder="Add a destination" className='searchInput' value-={destination} onChange={(e) => handleAddPlace(e)}/>
            <button className="addButton" onClick={(e) => addPlace(e)}>
                Add
                </button>
                <div className="pageHeader">Destinations</div>
                    {placeData.map((place) => (
                        <PlaceCard key={place.place_id} {...place} />
                    ))}
            </div>
        </div>
  );
};

export default Home;

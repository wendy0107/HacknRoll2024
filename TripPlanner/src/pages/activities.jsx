// activities.jsx

import React, {useState, useContext, useEffect} from 'react';
import {UserContext} from "../context/userContext"
import Cards from '../Cards.jsx';
import { fetchPlaceDataFromSupabase, addPlace } from '../supabase';
import './activities.css'

const Activities = ({name}) => {
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
    <div className='app_'>
        <header className="header">
            TripPlanner
        </header>
        <div className="welcome-container">
            <h1>Welcome {name}</h1>
        </div>
        <div className="HomePlacePageContainer">
            <input type="text" placeholder="Add a destination" className='ActivitySearchInput' value-={destination} onChange={(e) => handleAddPlace(e)}/>
            <button className="addButton" onClick={(e) => addPlace(e)}>
                Add
                </button>
        </div>
                <div className='app_activity'>
                        <div className='Activity'>
                            <h2>Destinations</h2>
                            <br />
                            {placeData.map((place) => (
                                <Cards key={place.place_id} {...place} />
                            ))}
                        </div>
                    
                    <div className='Accomodations'>
                        <h2>Accomodations</h2>
                        <br />
                        <Cards
                        photo_ref="https://www.womansworld.com/wp-content/uploads/2024/08/cute-cats.jpg?w=953"
                        name="Accomodations 1"
                        address=""
                        website=""
                        price_level=""
                        />
                        <br />

                        <Cards
                        photo_ref="https://www.womansworld.com/wp-content/uploads/2024/08/cute-cats.jpg?w=953"
                        name="Accomodations 2"
                        address=""
                        website=""
                        price_level=""
                        />
                        <br />
                    </div>

                    <div className='Flights'>
                        <h2>Flights</h2>
                        <br />
                        <Cards
                        photo_ref="https://www.womansworld.com/wp-content/uploads/2024/08/cute-cats.jpg?w=953"
                        name="Flight 1"
                        address=""
                        website=""
                        price_level=""
                        />
                        <br />
                    </div>

                </div>
        </div>
  );
};

export default Activities;

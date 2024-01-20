// PlacePage.jsx
import React, { useEffect, useState } from 'react';
import PlaceCard from '../components/PlaceCard';
import { fetchPlaceDataFromSupabase } from './supabase';
import './placePage.css'; // Import the CSS file

const PlacePage = () => {
  const [placeData, setPlaceData] = useState([]);
  const [destination, setDestination] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPlaceDataFromSupabase();
      setPlaceData(data);
    };

    fetchData();
  }, []);

  return (
    <div className="placePageContainer">
    <input type="text" placeholder="Add a destination" className='searchInput' value-={destination} onChange={(e) => setDestination(e.target.value)}/>
      <div className="pageHeader">Destinations</div>
      {placeData.map((place) => (
        <PlaceCard key={place.place_id} {...place} />
      ))}
    </div>
  );
};

export default PlacePage;

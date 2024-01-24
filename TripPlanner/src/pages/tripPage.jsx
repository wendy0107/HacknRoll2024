// TripPlanningPage.jsx
import React, { useState, useEffect } from 'react';
import { addTrip, fetchTripDataFromSupabase } from '../supabase';
import DatePicker from 'react-datepicker';
import { useNavigate } from "react-router-dom";
import TripCard from '../components/TripCard';
import 'react-datepicker/dist/react-datepicker.css';
import './tripPage.css';

const TripPage = () => {
  const navigate = useNavigate()
  const [showPopup, setShowPopup] = useState(false);
  const [country, setCountry] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [tripData, setTripData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTripDataFromSupabase();
      setTripData(data);
    };
    fetchData();
  }, []);

  const handleAddTrip = async () => {
    try {
      await addTrip(
        country,
        startDate,
        endDate);

      setShowPopup(false);
      setCountry('');
      setStartDate(new Date());
      setEndDate(new Date());

      const newData = await fetchTripDataFromSupabase();
      console.log("new data")
      console.log(newData)
      setTripData(newData);
    } catch (error) {
      console.error('Error adding trip:', error);
    }
  };

  return (
    <div className="tripPage">
        <header className="header">
            TripPlanner
        </header>
      <header className="pageHeader">Are you ready to plan your next trip?</header>
      <button className="addTripButton" onClick={() => setShowPopup(true)}>
        Add Trip
      </button>

      {showPopup && (
        <div className="popup">
          <label htmlFor="countryInput">Country:</label>
          <input
            type="text"
            id="countryInput"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />

          <label htmlFor="startDatePicker">Start Date:</label>
          <DatePicker
            id="startDatePicker"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />

          <label htmlFor="endDatePicker">End Date:</label>
          <DatePicker
            id="endDatePicker"
            selected={endDate}
            onChange={(date) => setEndDate(date)}
          />

          <button onClick={handleAddTrip}>Confirm</button>
          <button onClick={() => setShowPopup(false)}>Cancel</button>
        </div>
      )}

      <div className="tripCardContainer">
        {tripData.map((trip) => (
          <TripCard
            key={trip.trip_id}
            {...trip} onClick={() => navigate(`/planner/${trip.trip_id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default TripPage;

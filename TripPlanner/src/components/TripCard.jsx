// TripCard.jsx
import React from 'react';
import "./TripCard.css"

const TripCard = ({ country, start_date, end_date }) => {
// const TripCard = ({ country, start_date, end_date, Imagesrc }) => {
  return (
    <div className="tripCard">
      {/* <div className="tripImageContainer"> */}
        {/* <img src={imageSrc} alt={`${country} Trip`} /> */}
      {/* </div> */}
      <div className="tripDetails">
        <div className="country">{country}</div>
        <div className="dates">{`Start: ${start_date} - End: ${end_date}`}</div>
      </div>
    </div>
  );
};

export default TripCard;

import React from "react";
import './CountryCard.css';
import activities from "./pages/activities.jsx"
import { useNavigate } from "react-router-dom";

function CountryCard({title, imageUrl, date}) {
    const navigate = useNavigate();
    return (
        <div className="country-card-container">
            <div className="country-image-container">
                <img src={imageUrl} alt="Insert imagination here" />
            </div>
            <div className="country-card-content">
                <div className="country-card-title">
                    <h2>{title}</h2>
                </div>
                <div className="country-card-date">
                    <p>{date}</p>
                </div>
                <div className="buttonToActivities">
                    <br />
                    <button id="activityButton" onClick={() => navigate("/activities")}>Dive in!</button>
                </div>
            </div>
        </div>
    )
}

export default CountryCard
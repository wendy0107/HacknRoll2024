import React from "react";
import './Cards.css';
import addressPic from './assets/address.png';

function Card({title, imageUrl, price, location, siteUrl}) {
    return (
        <div className="card-container">
            <div className="image-container">
                <img src={imageUrl} alt="No image found" />
            </div>
            <div className="card-content">
                <div className="card-title">
                    <h2>{title}</h2>
                </div>
                <div className="card-price">
                    <p>$ {price}</p>
                </div>
                <div className="card-location">
                    <p><img src={addressPic} alt="Address:" id="addressPic" /> {location}</p>
                </div>
                <div className="card-siteUrl">
                    <p>URL: {siteUrl}</p>
                </div>
            </div>
        </div>
    )
}

export default Card
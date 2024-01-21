import React from "react";
import './Cards.css';
import addressPic from './assets/address.png';

function Card({photo_ref, name, address, website, price_level}) {
    return (
        <div className="card-container">
            <div className="image-container">
                <img src={photo_ref} alt={name} />
            </div>
            <div className="card-content">
                <div className="card-title">
                    <h3>{name}</h3>
                </div>
                <div className="card-price">
                    <p>$ {price_level}</p>
                </div>
                <div className="card-location">
                    <p><img src={addressPic} alt="Address:" id="addressPic" /> {address}</p>
                </div>
                <div className="card-siteUrl">
                    <a className="cardWebsite" href={website} target="_blank" rel="noopener noreferrer">
            {website}
          </a>
                </div>
            </div>
        </div>
    )
}

export default Card
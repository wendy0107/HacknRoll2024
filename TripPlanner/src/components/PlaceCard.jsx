// PlaceCard.jsx
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './PlaceCard.css'; // Import the CSS file

const PlaceCard = ({ photo_ref, name, address, website, price_level }) => {
  return (
    <Card className="card">
      <CardMedia className="cardImage" component="img" height="140" image={photo_ref} alt={name} />
      <CardContent className="cardContent">
        <Typography variant="h6">{name}</Typography>
        <Typography variant="body2" color="textSecondary">{address}</Typography>
        <Typography variant="body2" color="textSecondary">
          <a className="cardWebsite" href={website} target="_blank" rel="noopener noreferrer">
            {website}
          </a>
        </Typography>
        <Typography variant="body2" color="textSecondary">Price: {price_level}</Typography>
      </CardContent>
    </Card>
  );
};

export default PlaceCard;

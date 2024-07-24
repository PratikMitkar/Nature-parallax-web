import React from 'react';
import './CardViewRight.css';

function CardViewRight({ image, title, description }) {
  return (
    <div className="card">
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>

      </div>
      <img src={image} alt="Card" className="card-image" />

    </div>
  );
}

export default CardViewRight;

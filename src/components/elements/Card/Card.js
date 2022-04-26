import React from 'react';
import './Card.css';

const Card = ({ item, index }) => {
  return(
    <div className="containerCard">
      <div className="dish">
        {item.dishName}
      </div>
      <div className="priceContainer">
        {item.price}&nbsp;Rs.
      </div>
    </div>
  );
}

export default Card;
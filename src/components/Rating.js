import React from 'react';
import getRating from '../getRating';

function Rating(props) {
  
  const stars = getRating(props.rating);

  return (
    <span className="rating">
      <h3>Rating</h3>
      <div className="stars">
        {stars}
      </div>
    </span>
  )
}

export default Rating;
import React from 'react'

function RatingForm({ handleChange, ratingValue }) {
  return (
    <div className="rating-form form-element">
      <label htmlFor="rating">Rating</label>
      <input
        onChange={handleChange}
        value={ratingValue}
        type="text"
        name="rating"
        id="rating"
        placeholder="number from 0 to 5"
      />
    </div>
  );
}

export default RatingForm;
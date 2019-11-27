import React from 'react'

function Genres() {
  return (
    <div className="genres-input-container">
      <label htmlFor="genres">Genres</label>
      <input type="text" name="genres" id="genres" placeholder="separate genres with comma and a space" />
    </div>
  )
}

export default Genres;
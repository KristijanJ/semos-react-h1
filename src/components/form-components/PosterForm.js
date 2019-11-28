import React from 'react'

function PosterForm() {
  return (
    <div className="poster-url form-element">
      <label htmlFor="poster">Poster URL</label>
      <input type="text" name="poster" id="poster" placeholder="paste your url" />
    </div>
  )
}

export default PosterForm;
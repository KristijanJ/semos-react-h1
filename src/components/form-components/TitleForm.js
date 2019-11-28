import React, { useState } from 'react'

function TitleForm({ handleChange, titleValue }) {

  return (
    <div className="title-form form-element">
      <label htmlFor="title">Title</label>
      <input
        onChange={handleChange}
        value={titleValue}
        type="text"
        name="title"
        id="title"
        placeholder="enter a movie title"
      />
    </div>
  );
}

export default TitleForm;
import React from 'react'

function GenresForm({ handleGenresInput, genresValue }) {
  return (
    <div className="genres-form form-element">
      <label htmlFor="genres">Genres</label>
      <span className="form-field-info">Hold control to select multiple</span>
      <select name="" id="" multiple onChange={handleGenresInput} value={genresValue}>
        <option value="Absurdist/surreal/whimsical">
          Absurdist/surreal/whimsical
        </option>
        <option value="Action">Action</option>
        <option value="Adventure">Adventure</option>
        <option value="Comedy">Comedy</option>
        <option value="Crime">Crime</option>
        <option value="Drama">Drama</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Historical">Historical</option>
        <option value="Historical fiction">Historical fiction</option>
        <option value="Horror">Horror</option>
        <option value="Magical realism">Magical realism</option>
        <option value="Mystery">Mystery</option>
        <option value="Paranoid fiction">Paranoid fiction</option>
        <option value="Philosophical">Philosophical</option>
        <option value="Political">Political</option>
        <option value="Romance">Romance</option>
        <option value="Saga">Saga</option>
        <option value="Satire">Satire</option>
        <option value="Science fiction">Science fiction</option>
        <option value="Social">Social</option>
        <option value="Speculative">Speculative</option>
        <option value="Thriller">Thriller</option>
        <option value="Urban">Urban</option>
        <option value="Western">Western</option>
      </select>
    </div>
  );
}

export default GenresForm;
import React, { useState } from 'react';
import LengthForm from './form-components/LengthForm';
import GenresForm from './form-components/GenresForm';
import TitleForm from './form-components/TitleForm';
import PosterForm from './form-components/PosterForm';
import RatingForm from './form-components/RatingForm';
import OscarsForm from './form-components/OscarsForm';
import ActorsForm from './form-components/ActorsForm';

function AddMovie() {

  const [titleForm, setTitleForm] = useState('');
  const [genresForm, setGenresForm] = useState([]);
  const [ratingForm, setRatingForm] = useState(0);

  function handleSingleInputChange(e) {
    if (e.target.name === 'title') setTitleForm(e.target.value);
    if (e.target.name === 'rating') setRatingForm(e.target.value);
  }
  
  function handleGenresInput(e) {
    e.persist();
    var options = e.target.options;
    var value = [];

    for (var i = 0; i < options.length; i++) {
      if (options[i].selected) value.push(options[i].value);
    }

    setGenresForm(value);
  }

  return (
    <div className="add-movie-container">
      <h2>Add new movie</h2>
      <form className="add-new-movie">
        <TitleForm handleChange={handleSingleInputChange} titleValue={titleForm} />
        <GenresForm handleGenresInput={handleGenresInput} genresValue={genresForm} />
        <PosterForm handleChange={handleSingleInputChange} />

        <div className="length_rating_oscars">
          <LengthForm />
          <RatingForm handleChange={handleSingleInputChange} ratingValue={ratingForm} />
          <OscarsForm handleChange={handleSingleInputChange} />
        </div>

        <ActorsForm />

        <input type="submit" className="submit-btn" value="Submit" />
      </form>
    </div>
  );
}

export default AddMovie;
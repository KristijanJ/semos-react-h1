import React from 'react';
import Length from './form-components/Length';
import Genres from './form-components/Genres';

function AddMovie() {
  return (
    <div className="add-movie-container">
      <h2>Add new movie</h2>
      <form>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" placeholder="enter a movie title" />

        <Genres />

        <label htmlFor="poster">Poster URL</label>
        <input type="text" name="poster" id="poster" placeholder="paste your url" />

        <Length />

        <div className="rating_oscars">
          <div className="rating">  
            <label htmlFor="rating">Rating</label>
            <input type="number" name="rating" id="rating" placeholder="enter a number between 0 and 5" />
          </div>

          <div className="oscars">
            <label htmlFor="oscars">Oscars</label>
            <input type="number" name="oscars" id="oscars" placeholder="enter the number of oscars" />
          </div>
        </div>

        <label htmlFor="actors">Actors</label>
        <input type="text" name="actors" id="actors" placeholder="separate actors with comma and a space" />

        <input type="submit" value="Submit"/>
      </form>
    </div>
  )
}

export default AddMovie;
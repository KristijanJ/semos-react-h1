import React from 'react';
import Rating from './Rating';
import Info from './Info';
import Actors from './Actors';

import '../styles/global.css';
import Poster from './Poster';

function MovieCard(props) {

  const { title, genres, poster, duration, rating, oscars, actors, id } = props.movie;
  const handleDelete = props.handleDelete;
  
  return (
    <div className="movie-card">
      <div className="poster">
        <Poster poster={poster} />
      </div>
      <div className="details">
        <i className="fas fa-trash-alt trash" onClick={() => handleDelete(id)}></i>
        <Info 
          title={title}
          genres={genres}
          duration={duration}
          oscars={oscars} 
        />
        <Rating rating={rating} />
        <Actors actors={actors} />
      </div>
    </div>
  )
}

export default MovieCard;
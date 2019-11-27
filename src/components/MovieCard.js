import React, { Component } from 'react';
import Rating from './Rating';
import Info from './Info';
import Actors from './Actors';

import '../styles/global.css';
import Poster from './Poster';

class MovieCard extends Component {
  render() {
    const { title, genres, poster, duration, rating, oscars, actors } = this.props.movie;

    return (
      <div className="movie-card">
        <div className="poster">
          <Poster poster={poster} />
        </div>
        <div className="details">
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
}

export default MovieCard;
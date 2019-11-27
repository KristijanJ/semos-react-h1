import React, { Component } from 'react';
import Rating from './Rating';
import Info from './Info';
import Actors from './Actors';

import '../styles/global.css';

class MovieCard extends Component {
  render() {
    const { title, genre, poster, duration, rating, oscars, actors } = this.props.movie;

    return (
      <div className="movie-card">
        <Info 
          title={title}
          genre={genre}
          poster={poster}
          duration={duration}
          oscars={oscars}
        />
        <Rating rating={rating} />
        <Actors actors={actors} />
      </div>
    )
  }
}

export default MovieCard;
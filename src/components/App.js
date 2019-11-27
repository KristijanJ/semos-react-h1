import React, { Component } from 'react';
import MovieCard from './MovieCard';

import movies from '../movies';

class App extends Component {
  render() {
    return (
      <div className="main">
        {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    )
  }
}

export default App;

import React from "react";
import MovieCard from "./MovieCard";
import Header from "./Header";
import movies from "../movies";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="main">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import MovieCard from "./MovieCard";
import Header from "./Header";
import Footer from "./Footer";
import movieList from "../movies";

function App() {

  const [movies, setMovies] = useState(movieList);

  const handleDelete = (id) => {
   const newMovies = movies.filter(movie => movie.id !== id);
   setMovies(newMovies);
  }

  const addNewMovie = (id) => {
    console.log('Adding new movie', id);
  }

  return (
    <div className="container">
      <Header />
      <div className="main">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} handleDelete={handleDelete} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;

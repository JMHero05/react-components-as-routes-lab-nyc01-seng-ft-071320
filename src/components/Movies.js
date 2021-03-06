import React from "react";
import { movies } from "../data";

const Movies = () => {
  function renderMovies() {
    return movies.map((movie) => (
      <div key={movie.title} className="movie">
        {movie.title}
        <br />
        Time: {movie.time}
        <ul>
          {movie.genres.map((genre) => (
            <li key={genre}>{genre}</li>
          ))}
        </ul>
      </div>
    ));
  }

  return (
    <div>
      <h1>Movies Page</h1>
      {renderMovies()}
    </div>
  );
};

export default Movies;


import React from 'react';
import { useNavigate } from 'react-router-dom';

const MovieList = ({ movies }) => {
  const navigate = useNavigate();

  const handleMovieClick = (movieId) => {
    navigate(`/movies/${movieId}`, { state: { movieId } });
  };

  return (
    <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
      {movies.map((movie) => (
        <div
          key={movie.imdbID}
          className="movie-card cursor-pointer border rounded-lg bg-slate-300 "
          onClick={() => handleMovieClick(movie.imdbID)}
        >
          <img src={movie.Poster} alt={movie.Title} className=" h-80 mx-auto mt-4" />
          <h3 className="text-xl font-bold mt-2 text-center">{movie.Title}</h3>
          <p className='text-center'>{movie.Year}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieList;

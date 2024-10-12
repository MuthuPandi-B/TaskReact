
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchMovieDetails } from '../api/omdbApi';

const MovieDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Get movie ID from location state
  const movieId = location.state?.movieId;

  useEffect(() => {
    const loadMovieDetails = async () => {
      try {
        const data = await fetchMovieDetails(movieId);
        setMovie(data);
        setLoading(false);
      } catch (error) {
        setError('Unable to fetch movie details');
        setLoading(false);
      }
    };

    if (movieId) {
      loadMovieDetails();
    } else {
      navigate('/'); // If no movieId found, redirect to home
    }
  }, [movieId, navigate]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container mx-auto pl-8">
      {movie && (
        <div className="movie-detail">
          <h1 className="text-3xl font-bold mb-4">{movie.Title}</h1>
          <img
            src={movie.Poster}
            alt={movie.Title}
            className=" max-w-md  mb-6 h-72 "
          />
          <p className="mb-2">
            <strong>Year:</strong> {movie.Year}
          </p>
          <p className="mb-2">
            <strong>Genre:</strong> {movie.Genre}
          </p>
          <p className="mb-2">
            <strong>Plot:</strong> {movie.Plot}
          </p>
          <p className="mb-2">
            <strong>Director:</strong> {movie.Director}
          </p>
          <p className="mb-2">
            <strong>Actors:</strong> {movie.Actors}
          </p>
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 mt-4 bg-red-600 text-white rounded-md"
          >
            Back to Movies
          </button>
        </div>
      )}
    </div>
  );
};

export default MovieDetail;

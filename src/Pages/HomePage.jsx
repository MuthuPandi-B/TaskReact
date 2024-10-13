
import React, { useState, useEffect } from 'react';
import MovieList from './MovieList';
import { fetchMovies } from '../api/omdbApi';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  // Fetch initial movies on load 
  useEffect(() => {
    const loadInitialMovies = async () => {
      const data = await fetchMovies('avengers', page); 
      setMovies(data.Search || []);
      setTotalResults(data.totalResults || 0);
    };
    loadInitialMovies();
  }, [page]);

  // Function to handle pagination
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center ">Movies</h1>
      <MovieList movies={movies} />
      {/* Pagination controls */}
      {totalResults > 10 && (
        <div className="flex justify-center space-x-4 mt-6">
          {page > 1 && (
            <button
              onClick={() => handlePageChange(page - 1)}
              className="px-4 py-2 bg-blue-600 text-white rounded-md"
            >
              Previous
            </button>
          )}
          {page * 10 < totalResults && (
            <button
              onClick={() => handlePageChange(page + 1)}
              className="px-4 py-2 bg-blue-600 text-white rounded-md"
            >
              Next
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default HomePage;

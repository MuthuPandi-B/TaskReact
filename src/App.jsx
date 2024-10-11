
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { fetchMovies } from './api/omdbApi';
import Navbar from './Components/Navbar';
import MovieList from './Components/MovieList';
import MovieDetail from './Components/MovieDetail';
import SearchBar from './Components/SearchBar';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [category, setCategory] = useState('movie');
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1); // Track current page
  const [totalResults, setTotalResults] = useState(0); // For pagination

  const categories = [ 'All','movie', 'series', 'episode'];

  // Fetch initial movies on load (you can modify the query for specific movies)
  useEffect(() => {
    const loadInitialMovies = async () => {
      const data = await fetchMovies('avengers', 1, category); // Default query like 'avengers'
      setMovies(data.Search || []);
      setTotalResults(data.totalResults || 0); // Total number of results from the API
    };
    loadInitialMovies();
  }, [category]);

  const handleSearch = async (query) => {
    const data = await fetchMovies(query, 1, category);
    setMovies(data.Search || []);
    setQuery(query);
    setPage(1); // Reset to first page on new search
    setTotalResults(data.totalResults || 0); // Set total results for pagination
  };

  const handleCategorySelect = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  // Function to handle pagination
  const handlePageChange = async (newPage) => {
    const data = await fetchMovies(query || 'avengers', newPage, category); // Default query if no search
    setMovies(data.Search || []);
    setPage(newPage); // Update current page
  };

  return (
    <Router>
      <Navbar categories={categories} onCategorySelect={handleCategorySelect} />
      <SearchBar onSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<MovieList movies={movies} />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
      </Routes>
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
    </Router>
  );
};

export default App;

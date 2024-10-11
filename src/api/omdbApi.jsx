
import axios from 'axios';

const API_KEY = 'e0de12a6'; 
const BASE_URL = 'https://www.omdbapi.com/';

export const fetchMovies = async (query, page = 1, type = 'movie') => {
  try {
    const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&s=${query}&type=${type}&page=${page}`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchMovieDetails = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&i=${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

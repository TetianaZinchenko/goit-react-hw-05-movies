import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '559cbcab39764ce535027da10f396384';

export async function getSearchMovie(searchQuery) {
  return await axios.get(
    `search/movie?api_key=${API_KEY}&query=${searchQuery}`
  );
}

export async function getMovieDetails(movieId) {
  return await axios.get(`/movie/${movieId}?api_key=${API_KEY}`);
}

export async function getMovieCredits(movieId) {
  return await axios.get(`/movie/${movieId}/credits?api_key=${API_KEY}`);
}

export async function getMovieReviews(movieId) {
  return await axios.get(`/movie/${movieId}/reviews?api_key=${API_KEY}`);
}

export const getMoviesTrending = async type => {
  const resp = await axios.get(
    `/trending/movie/${type}?api_key=${API_KEY}&language=en-US&include_adult=false`
  );

  return resp.data;
};

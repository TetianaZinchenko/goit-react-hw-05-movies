import { useSearchParams } from 'react-router-dom';
import SearchBox from '../../components/SearchBox';
import { getSearchMovie } from 'services/API';
import { useState, useEffect } from 'react';

import SearchedMoviesList from 'components/SearchedList';

import { toast } from 'react-toastify';

export default function Movies() {
  const [searchedMovies, setSearchedMovies] = useState(null);

  const [searchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';

  useEffect(() => {
    if (movieName === '') {
      return;
    }

    getSearchMovie(movieName)
      .then(response => {
        if (response.data.results.length === 0) {
          toast.error('No data found on your request', {
            duration: 1000,
          });
        }
        setSearchedMovies(response.data.results);
      })
      .catch(function (error) {
        if (error.response) {
          toast.error(error.response.data, {
            duration: 1000,
          });
        } else if (error.request) {
          toast.error('XMLHttpRequest failed', {
            duration: 1000,
          });
        } else {
          toast.error(('Error', error.message), {
            duration: 1000,
          });
        }
      })
      .finally();
  }, [movieName]);

  return (
    <main>
      <SearchBox />
      {searchedMovies && searchedMovies.length !== 0 && (
        <SearchedMoviesList movies={searchedMovies} />
      )}
    </main>
  );
}

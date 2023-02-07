import { useState, useEffect } from 'react';

import * as movieApi from 'services/API';

import { Title, HomeStyles } from './Homepage.styled';

import { toast } from 'react-toastify';
import { Link, useLocation } from 'react-router-dom';
import { Loader } from 'components/Loader';
import MoviesGallery from 'components/MoviesGallery';
import { Card } from 'components/Card';
import { MovieCard } from 'components/MovieCard';

export default function Homepage() {
  const [trends, setTrends] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      try {
        const data = await movieApi.getMoviesTrending('day');

        setTrends(prevTrends => [...prevTrends, ...data.results]);
        setLoading(false);
      } catch (error) {
        toast.error(('Error', error.message), {
          duration: 1000,
        });
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <HomeStyles>
      <Title>Daily Trending</Title>
      {loading && <Loader />}
      {trends.length > 0 && (
        <MoviesGallery>
          {trends.map(item => (
            <Card key={item.id}>
              <Link to={`movies/${item.id}`} state={{ from: location }}>
                <MovieCard details={item} />
              </Link>
            </Card>
          ))}
        </MoviesGallery>
      )}
    </HomeStyles>
  );
}

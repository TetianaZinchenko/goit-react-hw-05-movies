import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { getMovieCredits } from 'services/API';

import CastItem from 'components/CastItem';
import { List, NoCast } from './Cast.styled';

import { toast } from 'react-toastify';

export default function Cast() {
  const [movieCast, setMovieCast] = useState([]);
  const { movieId } = useParams();
  const movieIdTypeNumber = Number(movieId);

  useEffect(() => {
    getMovieCredits(movieIdTypeNumber)
      .then(response => {
        const casts = response.data.cast;
        const castsId = casts.map(cast => cast.id);
        const castSet = Array.from(new Set(castsId));
        let newCast = [];
        castSet.forEach(el => {
          newCast.push(casts.find(cast => cast.id === el));
        });

        setMovieCast(newCast);
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
  }, [movieIdTypeNumber]);

  return (
    <>
      {movieCast.length !== 0 ? (
        <List>
          {movieCast.map(({ id, name, profile_path, character }) => {
            return (
              <CastItem
                key={id}
                name={name}
                profile_path={profile_path}
                character={character}
              />
            );
          })}
        </List>
      ) : (
        <NoCast>There is no information about casts in this movie</NoCast>
      )}
    </>
  );
}

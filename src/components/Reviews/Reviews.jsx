import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieReviews } from 'services/API';

import { toast } from 'react-toastify';

import ReviewsItem from 'components/ReviewsItem';
import { List, NoReviews } from './Reviews.styled';

export default function Reviews() {
  const [movieReviews, setMovieReviews] = useState([]);
  const { movieId } = useParams();
  const movieIdTypeNumber = Number(movieId);

  useEffect(() => {
    getMovieReviews(movieIdTypeNumber)
      .then(response => {
        setMovieReviews([...response.data.results]);
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
      {movieReviews.length !== 0 ? (
        <List>
          {movieReviews.map(({ id, author, content }) => {
            return <ReviewsItem key={id} author={author} content={content} />;
          })}
        </List>
      ) : (
        <NoReviews>We don`t have any reviews for this movie</NoReviews>
      )}
    </>
  );
}

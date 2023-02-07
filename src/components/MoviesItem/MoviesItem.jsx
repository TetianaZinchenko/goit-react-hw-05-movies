import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Item } from './MoviesItem.styled';

export default function MoviesItem({ id, title }) {
  const location = useLocation();

  return (
    <Item>
      <Link to={`movies/${id}`} state={{ from: location }}>
        {title}
      </Link>
    </Item>
  );
}

MoviesItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

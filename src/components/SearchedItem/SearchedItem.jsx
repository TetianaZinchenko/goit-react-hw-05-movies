import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Item } from './SearchedItem.styled';

export default function SearchedItem({ id, title }) {
  const location = useLocation();

  return (
    <Item>
      <Link to={`${id}`} state={{ from: location }}>
        {title}
      </Link>
    </Item>
  );
}

SearchedItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

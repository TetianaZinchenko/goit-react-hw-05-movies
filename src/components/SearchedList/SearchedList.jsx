import PropTypes from 'prop-types';

import { List } from './SearchedList.styled';
import SearchedItem from 'components/SearchedItem';

export default function SearchedList({ movies }) {
  return (
    <List>
      {movies?.map(({ id, title }) => {
        return <SearchedItem key={id} id={id} title={title} />;
      })}
    </List>
  );
}

SearchedList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

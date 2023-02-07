import PropTypes from 'prop-types';

import { Item, Author, Review } from './ReviewsItem.styled';

export default function ReviewsItem({ author, content }) {
  return (
    <Item>
      <Author>Author: {author}</Author>
      <Review>{content}</Review>
    </Item>
  );
}

ReviewsItem.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

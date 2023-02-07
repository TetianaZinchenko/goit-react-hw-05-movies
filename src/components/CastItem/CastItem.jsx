import { Item, Character, Name, Photo } from './CastItem.styled';
import PropTypes from 'prop-types';

import defaultImage from '../../images/no-image.png';

export default function CastItem({ name, profile_path, character }) {
  const photo = profile_path
    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
    : defaultImage;

  return (
    <Item>
      <Photo src={photo} alt="" />
      <Name>{name}</Name>
      <Character>Character: {character}</Character>
    </Item>
  );
}

CastItem.propTypes = {
  name: PropTypes.string.isRequired,
  profile_path: PropTypes.string,
  character: PropTypes.string.isRequired,
};

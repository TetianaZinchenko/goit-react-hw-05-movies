import React from 'react';
import PropTypes from 'prop-types';
import { GalleryStyles } from './MoviesGallery.styled';

export default function MoviesGallery({ children }) {
  return <GalleryStyles>{children}</GalleryStyles>;
}

MoviesGallery.propTypes = {
  children: PropTypes.node,
};

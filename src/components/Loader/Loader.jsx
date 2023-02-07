import React from 'react';
import GridLoader from 'react-spinners/GridLoader';
import { Spinner } from './Loader.styled';

const Loader = () => {
  return (
    <Spinner>
      <GridLoader color="#303f9f" aria-label="Loading Spinner" size={50} />
    </Spinner>
  );
};

export { Loader };

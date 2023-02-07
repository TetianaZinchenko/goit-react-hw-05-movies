import PropTypes from 'prop-types';

import { LinkStyles } from './BackLink.styled';

import { BsFillArrowLeftCircleFill } from 'react-icons/bs';

export default function BackLink({ to, children }) {
  return (
    <LinkStyles to={to}>
      <BsFillArrowLeftCircleFill size="16" />
      {children}
    </LinkStyles>
  );
}

BackLink.propTypes = {
  to: PropTypes.object.isRequired,
  children: PropTypes.node,
};

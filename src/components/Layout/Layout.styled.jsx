import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1280px;
  flex-wrap: wrap;
  margin: 0 auto;
  font-size: 20px;
`;

export const Header = styled.header`
  padding: 20px 0;
  margin-bottom: 20px;
  box-shadow: inset 0 0 3px 1px #303f9f, inset #3f51b5 -5px -5px 8px 5px,
    inset rgba(255, 255, 255, 0.5) 5px 5px 8px 5px, 1px 1px 1px #303f9f,
    -2px -2px 5px #3f51b5;

  > nav {
    display: flex;
  }
`;

export const LinkStyles = styled(NavLink)`
  padding: 8px;
  border-radius: 4px;
  text-decoration: none;
  color: #2a363b;
  font-weight: 500;
  font-size: 20px;

  &.active {
    color: #0000a0;
  }
`;

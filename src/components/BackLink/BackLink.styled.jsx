import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const LinkStyles = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 16px 16px;
  font-size: 16px;
  color: #0000a0;
  text-decoration: none;
  border: 1px solid #0000a0;
  border-radius: 5px;
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 20px;

  :hover {
    color: #ffffff;
    background-color: #3f51b5;
  }
`;

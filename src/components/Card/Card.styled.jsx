import styled from '@emotion/styled';

export const CardContainer = styled.li`
  width: 280px;
    height: auto;
  margin-bottom: 20px;
  border-radius: 5px;
    box-shadow: inset 0 0 3px 1px #303f9f, inset #3f51b5 -5px -5px 8px 5px,
    inset rgba(255, 255, 255, 0.5) 5px 5px 8px 5px, 1px 1px 1px #303f9f,
    -2px -2px 5px #3f51b5;
  cursor: pointer;

  &:active {
       box-shadow: inset 0 0 3px 1px #000073, inset #0000a0 -5px -5px 8px 5px,
      inset rgba(255, 255, 255, 0.5) 5px 5px 8px 5px, 1px 1px 1px #000073,
      -2px -2px 5px #0000a0;
    cursor: pointer;
  }
`;

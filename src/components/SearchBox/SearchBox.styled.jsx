import styled from '@emotion/styled';

export const Form = styled.form`
    display: flex;
    margin-bottom: 16px;
  text-transform: uppercase;
`;

export const Input = styled.input`
  padding: 10px 32px 8px 8px;
    outline: transparent;
    border-radius: 5px;
    border: 1px solid #0000a0;
  margin-right: 10px;
  font-size: 16px;
`;

export const Button = styled.button`
  padding: 8px 16px;
    border-radius: 5px;
    border: 1px solid #0000a0;
  box-shadow: inset 0 0 3px 1px #303f9f, inset #3f51b5 -5px -5px 8px 5px,
    inset rgba(255, 255, 255, 0.5) 5px 5px 8px 5px, 1px 1px 1px #303f9f,
    -2px -2px 5px #3f51b5;
  font-size: 16px;
  cursor: pointer;
`;

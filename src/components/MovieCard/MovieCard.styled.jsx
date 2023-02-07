import styled from '@emotion/styled';

const Thumb = styled.div`
  width: 280px;
  height: 375px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  img {
    width: 100%;
    height: 100%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    object-fit: cover;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  padding: 20px 20px;

  h2 {
    font-size: 16px;
    font-weight: 500;
    color: #303f9f;
  }
`;

export { Thumb, Title };

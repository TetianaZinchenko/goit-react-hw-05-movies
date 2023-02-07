import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MovieInfo = styled.div`
  display: flex;
  justify-content: start;
  gap: 20px;
  padding: 10px 10px 20px 10px;
  border-radius: 5px 5px 0 0;
    border-bottom: 1px solid #0000a0;
    box-shadow: inset 0 0 3px 1px #303f9f, inset #3f51b5 -5px -5px 8px 5px,
    inset rgba(255, 255, 255, 0.5) 5px 5px 8px 5px, 1px 1px 1px #303f9f,
    -2px -2px 5px #3f51b5;
`;

export const PosterWrapper = styled.div`
  display: block;
  min-width: 350px;
`;

export const Poster = styled.img`
  border-radius: 10px;
`;

export const MovieInfoText = styled.div`
  padding: 20px;
    border-radius: 5px;
`;

export const MovieTitle = styled.h2`
  color: #0000a0;
  font-size: 32px;
  font-weight: 700;
  padding-bottom: 30px;
`;

export const InfoTitles = styled.p`
  color: #0000a0;
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 30px;
`;

export const InfoText = styled.p`
  font-size: 16px;
  padding-bottom: 30px;
`;

export const ReviewsTitle = styled.h2`
  text-align: center;
  font-size: 32px;
  padding: 10px;
  margin-top: 50px;
  margin-bottom: 0;
`;

export const ReviewsText = styled.h2`
  text-align: center;
  font-size: 16px;
`;

export const AdditWrapper = styled.div`
    border-bottom: 1px solid #0000a0;
    box-shadow: 0 2px 4px #303f9f;
    padding-top: 20px;
`;

export const AdditInfo = styled.p`
  font-size: 16px;
  padding-bottom: 20px;
  padding-left: 10px;
`;

export const AdditList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
   border-bottom: 1px solid #0000a0;
    box-shadow: 0 2px 4px #303f9f;
    padding-bottom: 20px;
`;

export const AdditListItem = styled.li`
  padding-left: 20px;
  font-size: 16px;
`;

export const LinkItem = styled(Link)`
  font-size: 16px;
`;

import React from 'react';
import styled from "styled-components";

const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  width: 13rem;
  box-shadow: 0 3px 3px 0 #aaa;
  cursor: pointer;
  background-color: white;
  margin: 1rem 0;
  border-radius: 0.4rem;
`;

const CoverImage = styled.img`
  object-fit: cover;
  height: 300px;
`;

const MovieName = styled.span`
  font-size: 0.8rem;
  font-weight: 700;
  color: black;
  margin: 1rem 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const InfoColumn = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: space-between;
`;

const MovieInfo = styled.span`
  font-size: 0.7rem;
  font-weight: 500;
  color: black;
  text-transform: capitalize;
`;   

const MovieComponent = (props) => {
  const { Title, Year, imdbID, Type, Poster } = props.movie;
  return (
    <MovieContainer onClick={() => props.onMovieSelect(imdbID)}>
        <CoverImage src={Poster}/>
        <MovieName>
            {Title}
        </MovieName>
        <InfoColumn>
            <MovieInfo>Year: {Year}</MovieInfo>
            <MovieInfo>Type: {Type}</MovieInfo>
        </InfoColumn>
    </MovieContainer>
  )
}

export default MovieComponent
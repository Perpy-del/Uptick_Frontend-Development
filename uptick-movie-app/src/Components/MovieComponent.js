import React from 'react';
import styled from "styled-components";

const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.75rem;
  width: 13rem;
  box-shadow: 0 3px 3px 0 #aaa;
  cursor: pointer;
  background-color: white;
  margin-top: 1rem;
`;

const CoverImage = styled.img`
  object-fit: cover;
  height: 360px;
`;

const MovieName = styled.span`
  font-size: 1rem;
  font-weight: 700;
  color: black;
  margin: 1rem 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const InfoColumn = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MovieInfo = styled.span`
  font-size: 0.85rem;
  font-weight: 400;
  color: black;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;  

const MovieComponent = (props) => {
  return (
    <MovieContainer>
        <CoverImage src='https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg'/>
        <MovieName>
            Guardians of the Galaxy Vol. 2
        </MovieName>
        <InfoColumn>
            <MovieInfo>05 May 2017</MovieInfo>
            <MovieInfo>Action, Adventure, Comedy</MovieInfo>
        </InfoColumn>

    </MovieContainer>
  )
}

export default MovieComponent
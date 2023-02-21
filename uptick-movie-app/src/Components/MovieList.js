import React from 'react';
import styled from 'styled-components'
import MovieComponent from "./MovieComponent";

const MovieListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 2rem;
`;

const MovieList = () => {
  return (
    <MovieListContainer>
        <MovieComponent />
        <MovieComponent />
        <MovieComponent />
        <MovieComponent />
    </MovieListContainer>
  )
}

export default MovieList
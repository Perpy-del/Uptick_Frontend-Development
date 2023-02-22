import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = "a0262c22";

const Container = styled.div`
  display: flex;
  padding: 2rem 4rem;
  justify-content: flex-start;
  border-bottom: 1px solid #333;
`;

const CoverImage = styled.img`
  object-fit: cover;
  height: 290px;
`;

const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  //   gap: 2rem;
  //   justify-content: space-between;
`;

const MovieName = styled.span`
  font-size: 0.9rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-left: 1rem;
  text-transform: capitalize;
`;

const MovieInfo = styled.span`
  font-size: 0.7rem;
  font-weight: 500;
  color: white;
  text-transform: capitalize;
  margin-left: 1rem;
  margin-bottom: 0.3rem;
  padding-right: 2.5rem;
  & span {
    opacity: 0.5;
    padding-left: 0.5rem;
    line-height: 1rem;
  }
`;

const Close = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
  color: white;
  background: gray;
  height: fit-content;
  padding: 0.5rem 0.8rem;
  border-radius: 50%;
  cursor: pointer;
  opacity: 0.8;
`;

const Loading = styled.h3`
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
`;

const MovieInfoComponent = (props) => {
  const { selectedMovie } = props;
  const [movieInfo, setMovieInfo] = useState();
  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?i=${selectedMovie}&apikey=${API_KEY}`)
      .then((response) => setMovieInfo(response.data));
  }, [selectedMovie]);
  return (
    <Container>
      {movieInfo ? (
        <>
          <CoverImage src={movieInfo?.Poster} />
          <InfoColumn>
            <MovieName>
              {movieInfo?.Type}: {movieInfo?.Title}
            </MovieName>
            <MovieInfo>
              IMDB Rating : <span>{movieInfo?.imdbRating}</span>
            </MovieInfo>
            <MovieInfo>
              Year : <span>{movieInfo?.Year}</span>
            </MovieInfo>
            <MovieInfo>
              Language : <span>{movieInfo?.Language}</span>
            </MovieInfo>
            <MovieInfo>
              Rated : <span>{movieInfo?.Rated}</span>
            </MovieInfo>
            <MovieInfo>
              Released : <span>{movieInfo?.Released}</span>
            </MovieInfo>
            <MovieInfo>
              Runtime : <span>{movieInfo?.Runtime}</span>
            </MovieInfo>
            <MovieInfo>
              Genre : <span>{movieInfo?.Genre}</span>
            </MovieInfo>
            <MovieInfo>
              Director : <span>{movieInfo?.Director}</span>
            </MovieInfo>
            <MovieInfo>
              Actors : <span>{movieInfo?.Actors}</span>
            </MovieInfo>
            <MovieInfo>
              Plot : <span>{movieInfo?.Plot}</span>
            </MovieInfo>
          </InfoColumn>
          <Close onClick={() => props.onMovieSelect()}>X</Close>
        </>
      ) : (
        <Loading>Loading...</Loading>
      )}
    </Container>
  );
};

export default MovieInfoComponent;

import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import uptick from "./images/uptick.png";
import search from "./images/search_icon.svg";
import MovieComponent from "./Components/MovieComponent";
import MovieInfoComponent from "./Components/MovieInfoComponent";

const API_KEY = "a0262c22";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -1.1rem;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #6f59e2;
  color: white;
  padding: 1rem 1.5rem;
  font-size: 1.5rem;
  font-weight: 700;
`;

const AppName = styled.a`
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
`;

const UptickImage = styled.img`
  width: 3rem;
  margin: 1rem;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  border-radius: 0.3rem;
  margin-left: 2rem;
  width: 45%;
  background-color: white;
`;

const SearchIcon = styled.img`
  width: 1.5rem;
  padding-left: 1rem;
`;

const SearchInput = styled.input`
  color: #aba3a3;
  font-size: 0.8rem;
  font-weight: 500;
  font-family: "Montserrat", sans-serif;
  width: 80%;
  height: 2rem;
  border: none;
  outline: none;
`;

const MovieListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 2rem;
  gap: 2rem;
`;

const Placeholder = styled.img`
  width: 5rem;
  height: 3rem;
  margin: 2rem;
`;

const App = () => {
  const [searchQuery, updateSearchQuery] = useState();
  const [timeoutId, updateTimeoutId] = useState();
  const [movieList, updateMovieList] = useState([]);
  const [selectedMovie, onMovieSelect] = useState();

  const fetchData = async (searchString) => {
    const response = await axios.get(
      `https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`
    );
    updateMovieList(response.data.Search);
  };

  const textHandler = (e) => {
    clearTimeout(timeoutId);
    updateSearchQuery(e.target.value);
    const timeout = setTimeout(() => fetchData(e.target.value), 500);
    updateTimeoutId(timeout);
  };

  return (
    <Container>
      <Header>
        <AppName href="./">
          <UptickImage src={uptick} alt="Uptick" />
          UPTICK Movies
        </AppName>
        <SearchBar>
          <SearchIcon src={search} />
          <SearchInput
            type="text"
            placeholder="Search Movie"
            value={searchQuery}
            onChange={textHandler}
          />
        </SearchBar>
      </Header>
      {selectedMovie && (
        <MovieInfoComponent
          selectedMovie={selectedMovie}
          onMovieSelect={onMovieSelect}
        />
      )}
      <MovieListContainer>
        {movieList?.length ? (
          movieList.map((movie, index) => (
            <MovieComponent
              key={index}
              movie={movie}
              onMovieSelect={onMovieSelect}
            />
          ))
        ) : (
          <Placeholder src={uptick} />
        )}
      </MovieListContainer>
    </Container>
  );
};

export default App;

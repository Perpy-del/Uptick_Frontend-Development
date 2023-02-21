import React from 'react'
import styled from 'styled-components';
import uptick from "./images/uptick.png";
import search from "./images/search_icon.svg";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #6f59e2;
  color: white;
  padding: 1rem 1.5rem;
  font-size: 1.5rem;
  font-weight: 700;
`;

const AppName = styled.div`
  display: flex;
  align-items: center;
`;

const UptickImage = styled.img`
  width: 3rem;
  margin: 1rem;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  border-radius: 0.3rem;
  margin-left: 3rem;
  width: 45%;
  height: 2.5rem;
  background-color: white;

`;

const SearchIcon = styled.img`
  width: 1.5rem;
  padding-left: 1rem;
`;

const SearchInput = styled.input`
  color: #ABA3A3;
  font-size: 0.8rem;
  font-weight: 500;
  font-family: 'Montserrat', sans-serif;
  width: 80%;
  height: 2rem;
  border: none;
  outline: none;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <AppName>
        <UptickImage src={uptick} alt="Uptick" />
        UPTICK Movies
      </AppName>
      <SearchBar>
        <SearchIcon src={search} />
        <SearchInput type="text" placeholder="Search Movie"/>
      </SearchBar>
    </HeaderContainer>
  )
}

export default Header

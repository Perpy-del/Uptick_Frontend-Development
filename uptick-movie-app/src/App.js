import styled from "styled-components";
import Header from "./Components/Header";
import MovieComponent from "./Components/MovieComponent";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;


const MovieListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 30px;
`;

function App() {
  return (
    <Container>
      <Header />
      <MovieListContainer>
        <MovieComponent />
        <MovieComponent />
        <MovieComponent />
        <MovieComponent />
      </MovieListContainer>
    </Container>
  );
}

export default App;

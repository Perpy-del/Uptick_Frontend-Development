import styled from "styled-components";
import Header from "./Components/Header";
import MovieList from "./Components/MovieList";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <Container>
      <Header />
      <MovieList />
    </Container>
  );
}

export default App;

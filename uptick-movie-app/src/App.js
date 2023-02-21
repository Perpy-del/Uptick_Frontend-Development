import styled from "styled-components";
import Header from "./Components/Header";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <Container>
      <Header />
    </Container>
  );
}

export default App;

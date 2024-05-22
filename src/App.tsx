import React from "react";
import Form from "./components/Form";
import List from "./components/List";
import styled from "styled-components";
import Timer from "./components/Timer";

const Container = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
`;

const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4em;

  grid-column: 1 / 2;
`

const ContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 2 / 3;
`

function App() {
  return (
    <Container>
      <ContainerLeft>
        <Form />
        <Timer />
      </ContainerLeft>

      <ContainerRight>
        <List />
      </ContainerRight>
    </Container>
  );
}

export default App;

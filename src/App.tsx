import React from "react";
import Form from "./components/Form";
import List from "./components/List";
import styled from "styled-components";
import Timer from "./components/Timer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
  align-items: stretch;
  width: 50%;
  padding: 2em;
`;

function App() {
  return (
    <Container>
      <Form />
      <Timer />
      <List />
    </Container>
  );
}

export default App;

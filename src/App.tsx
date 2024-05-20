import React from "react";
import Form from "./components/Form";
import List from "./components/List";
import styled from "styled-components";

const FormAndList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
  align-items: flex-start;

  padding: 2em;
`

function App() {
  return (
    <FormAndList>
      <Form />
      <List />
    </FormAndList>
  )
}

export default App;

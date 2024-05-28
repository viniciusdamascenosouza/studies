import React, { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import styled from "styled-components";
import Timer from "./components/Timer";
import { TTask } from "./Types/task_type";

const Container = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
`;

const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4em;

  grid-column: 1 / 2;
`;

const ContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 2 / 3;
`;

function App() {
  const [tasks, setTasks] = useState<TTask[]>([]);

  return (
    <Container>
      <ContainerLeft>
        <Form setTasks={setTasks} />
        <Timer />
      </ContainerLeft>

      <ContainerRight>
        <List tasks={tasks}/>
      </ContainerRight>
    </Container>
  );
}

export default App;

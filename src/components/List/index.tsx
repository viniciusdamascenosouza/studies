import React, { useState } from "react";
import styled from "styled-components";
import Task from "./Task";
import { time } from "console";

const TaskList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const List = () => {
  const [tasks, setTasks] = useState([
    {
      task: "React",
      time: "02:00:00",
    },
    {
      task: "Javascript",
      time: "01:00:00",
    },
    {
      task: "Typescript",
      time: "03:00:00",
    },
  ]);

  return (
    <aside>
      <h2
        style={{ fontSize: "28px", color: "#fff", marginBottom: "12px" }}
        onClick={() =>
          setTasks([...tasks, { task: "Styled-components", time: "00:30:00" }])
        }
      >
        Daily Studies
      </h2>
      <TaskList>
        {tasks.map(({ task, time }, index) => (
          <Task key={index} task={task} time={time} />
        ))}
      </TaskList>
    </aside>
  );
};

export default List;

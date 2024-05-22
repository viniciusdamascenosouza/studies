import React from "react";
import styled from "styled-components";
import Task from "./Task";

const TaskList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1em;
`



const List = () => {
  const tarefas = [
    {
      task: "React",
      time: "02:00:00",
    },
    {
      task: "TypeScript",
      time: "01:00:00",
    },
    {
        task: "Styled-components",
        time: "01:00:00",
    },
  ];

  return (
    <aside>
      <h2 style={{fontSize:"28px", color:"#fff", marginBottom:"12px"}}>Daily Studies</h2>
      <TaskList>
        {tarefas.map(({task, time}, index) => (
          <Task 
          task={task}
          time={time}
            />
        ))}
      </TaskList>
    </aside>
  );
};

export default List;

import React from "react";
import styled from "styled-components";

const TaskList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1em;
`

const Task = styled.li`
  border: none;
  border-radius: 5px;
  box-shadow: 2px 2px 6px 0px #000000;
  background-color: #213555;
  padding: .5em 1em;
  text-align: start;
    &:hover {
      box-shadow: 2px 2px 7px -2px #000000;
      cursor: pointer;
    }
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
          <Task key={index}>
            <h3>{task}</h3>
            <span>{time}</span>
          </Task>
        ))}
      </TaskList>
    </aside>
  );
};

export default List;

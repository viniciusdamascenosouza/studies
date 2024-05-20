import React from "react";

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
      <h2>Daily Studies</h2>
      <ul>
        {tarefas.map(({task, time}, index) => (
          <li key={index}>
            <h3>{task}</h3>
            <span>{time}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default List;

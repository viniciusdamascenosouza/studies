import styled from "styled-components";
import Task from "./Task";
import { TTask } from "../../Types/task_type";

const TaskList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const List = ({ tasks }: { tasks: TTask[] }) => {
  return (
    <aside>
      <h2 style={{ fontSize: "28px", color: "#fff", marginBottom: "12px" }}>
        Daily Studies
      </h2>
      <TaskList>
        {tasks.map((item, index) => (
          <Task key={index} {...item} />
        ))}
      </TaskList>
    </aside>
  );
};

export default List;

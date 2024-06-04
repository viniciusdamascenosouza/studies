import styled from "styled-components";
import Task from "./Task";
import { TList } from "../../Types/list_type";

const TaskList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const List = ({ tasks, selectTask}: TList) => {
  return (
    <aside>
      <h2 style={{ fontSize: "28px", color: "#fff", marginBottom: "12px" }}>
        Daily Studies
      </h2>
      <TaskList>
        {tasks.map((item) => (
          <Task selectTask={selectTask} key={item.id} {...item} />
        ))}
      </TaskList>
    </aside>
  );
};

export default List;

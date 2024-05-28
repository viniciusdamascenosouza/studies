import React, { useState } from "react";
import Button from "../Button";
import styled from "styled-components";
import { TForm } from "../../Types/form_type";
import { uuid } from "uuidv4";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1em;
  align-items: center;
  padding: 2em;
  border-radius: 8px;
  background-color: #526d82;
  box-shadow: 5px 5px 20px -6px #000000;
  width: 80%;
`;

const LabelAndInput = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.2em;
  color: white;
  font-size: 1.2em;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px 12px 4px;
  box-sizing: border-box;
  border: unset;
  border-radius: 5px;
  background-color: #9db2bf;
  box-shadow: 0px 2px 4px #0202589f inset;

  &::placeholder {
    color: #fff;
    font-size: 0.7em;
  }
`;

const Form: React.FC<TForm> = ({ setTasks }) => {
  const [task, setTask] = useState<string>("");
  const [time, setTime] = useState<string>("00:00");

  const addTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTasks((oldTasks) => [
      ...oldTasks,
      {
        task,
        time,
        selected: false,
        completed: false,
        id: uuid(),
      },
    ]);
  };

  return (
    <StyledForm action="" onSubmit={addTask}>
      <LabelAndInput>
        <label htmlFor="task">Add a new study</label>
        <Input
          type="text"
          name="task"
          id="task"
          value={task}
          onChange={(event) => setTask(event.target.value)}
          placeholder="What do you want to study?"
          required
        />
      </LabelAndInput>
      <LabelAndInput>
        <label htmlFor="time">Time</label>
        <Input
          type="time"
          step="1"
          name="time"
          value={time}
          onChange={(event) => setTime(event.target.value)}
          id="time"
          min="00:00:00"
          max="02:00:00"
          required
        />
      </LabelAndInput>
      <Button type="submit" text="Add Task" />
    </StyledForm>
  );
};

export default Form;

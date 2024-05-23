import React, { useState, ChangeEvent } from "react";
import Button from "../Button";
import styled from "styled-components";

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

interface TaskState {
  task: string;
  time: string;
}

const Form: React.FC = () => {
  const [state, setState] = useState<TaskState>({ task: "", time: "00:00" });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const addTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log("state :", state)
  }

  return (
    <StyledForm action="" onSubmit={addTask}>
      <LabelAndInput>
        <label htmlFor="task">Add a new study</label>
        <Input
          type="text"
          name="task"
          id="task"
          value={state.task}
          onChange={handleInputChange}
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
          value={state.time}
          onChange={handleInputChange}
          id="time"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </LabelAndInput>
      <Button text="Add" />
    </StyledForm>
  );
};

export default Form;

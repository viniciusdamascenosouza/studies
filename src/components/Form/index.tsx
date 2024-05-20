import React from "react";
import Button from "../Button";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1em;
  align-items: flex-start;

  border-radius: 8px;
  background-color: #7063b4;
  padding: 2em;
`

const LabelAndInput = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: .2em;
  color: white;
  font-size: 1.2em;
`

const Input = styled.input`
      width: 100%;
      padding: 8px 12px 4px;
      box-sizing: border-box;
      border: unset;
      border-radius: 5px;
      background-color: #49597c;
      box-shadow: 0px 2px 4px #12125e9f inset;
      
      &::placeholder {
        color: #BFBFBF;
      }
`

const Form = () => {
  return (
    <StyledForm action="">
      <LabelAndInput>
        <label htmlFor="tarefa">Add a new study</label>
        <Input
          type="text"
          name="task"
          id="task"
          placeholder="What do you want to study?"
          required
        />
      </LabelAndInput>
      <LabelAndInput>
        <label htmlFor="time">Time</label>
        <Input
          type="time"
          step={1}
          name="time"
          min="00:00:00"
          max="03:00:00"
          required
        />
      </LabelAndInput>
      <Button />
    </StyledForm>
  );
};

export default Form;

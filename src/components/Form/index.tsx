import React from "react";
import Button from "../Button";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1em;
  align-items: center;
  padding: 2em;
  border-radius: 8px;
  background-color: #526D82;
  box-shadow: 5px 5px 20px -6px #000000;
`

const LabelAndInput = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: .2em;
  color: white;
  font-size: 1.2em;
  width: 100%;
`

const Input = styled.input`
      width: 100%;
      padding: 8px 12px 4px;
      box-sizing: border-box;
      border: unset;
      border-radius: 5px;
      background-color: #9DB2BF;
      box-shadow: 0px 2px 4px #0202589f inset;
      
      &::placeholder {
        color: #fff;
        font-size: .7em;
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
      <Button text="Add"/>
    </StyledForm>
  );
};

export default Form;

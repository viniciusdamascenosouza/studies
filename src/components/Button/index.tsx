import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border: 2px solid transparent;
  border-radius: 4px;
  background-color: #1f0874;
  color: white;
  font-weight: bold;
  padding: .5em 2em;

    &:hover {
      cursor: pointer;
      border: 2px solid #575757;
    }
`

const Button = () => {
  return <StyledButton>Button</StyledButton>;
};



export default Button;

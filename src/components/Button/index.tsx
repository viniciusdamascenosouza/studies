import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border: 1px solid transparent;
  border-radius: 4px;
  background-color: #213555;
  color: white;
  font-weight: bold;
  padding: .5em 2em;

    &:hover {
      cursor: pointer;
      border: 1px solid #1d1f47;
    }
`

const Button = () => {
  return <StyledButton>Button</StyledButton>;
};



export default Button;

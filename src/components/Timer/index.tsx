import React from "react";
import Button from "../Button";
import Clock from "./Clock";
import styled from "styled-components";

const STimer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  grid-area: timer;
`;

const SContainerTime = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  align-items: center;
  padding: 2em;
  border-radius: 8px;
  background-color: #526D82;
  box-shadow: 5px 5px 20px -6px #000000;
  width: 80%;
`;

const Timer = () => {
  return (
    <STimer>
      <p style={{ fontSize: "28px", color: "#fff", marginBottom: "12px" }}>
        Choose a card and start the timer{" "}
      </p>
      <SContainerTime>
        <Clock />
        <Button text="Começar!" />
      </SContainerTime>
    </STimer>
  );
};

export default Timer;

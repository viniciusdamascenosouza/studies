import React, { useEffect, useState } from "react";
import Button from "../Button";
import Clock from "./Clock";
import styled from "styled-components";
import { TTimer } from "../../Types/timer_type";
import { timeToSeconds } from "../../common/utils/time";

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
  background-color: #526d82;
  box-shadow: 5px 5px 20px -6px #000000;
  width: 80%;
`;

const Timer = ({ selected, finishTask }: TTimer) => {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selected?.time) {
      setTime(timeToSeconds(selected.time));
    }
  }, [selected]);

  function regressive(counter: number = 0) {
    setTimeout(() => {
      if (counter > 0) {
        setTime(counter - 1);
        return regressive(counter - 1);
      }
      finishTask();
    }, 1000);
  }

  return (
    <STimer>
      <p style={{ fontSize: "28px", color: "#fff", marginBottom: "12px" }}>
        Choose a card and start the timer
      </p>
      <SContainerTime>
        <Clock time={time} />
        <Button onClick={() => regressive(time)}>Start</Button>
      </SContainerTime>
    </STimer>
  );
};

export default Timer;

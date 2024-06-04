import React from "react";
import styled from "styled-components";
import { TClock } from "../../../Types/clock_type";

const SClock = styled.div`
    display: flex;
    align-items: center;
`;

const WatchNumber = styled.span`
  background-color: #5d677c;
  box-shadow: 2px 2px 4px #2b2b2b inset;
  height: 3.6rem;
  width: 3rem;
  padding: 8px 4px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Clock = ({time = 0}: TClock) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const [minuteTen, minuteUnit] = String(minutes).padStart(2, '0');
  const [secondTen, secondUnit] = String(seconds).padStart(2, '0');


  return (
    <SClock>
      <WatchNumber>{minuteTen}</WatchNumber>
      <WatchNumber>{minuteUnit}</WatchNumber>
      <span style={{fontSize:"3em"}}>:</span>
      <WatchNumber>{secondTen}</WatchNumber>
      <WatchNumber>{secondUnit}</WatchNumber>
    </SClock>
  );
};

export default Clock;

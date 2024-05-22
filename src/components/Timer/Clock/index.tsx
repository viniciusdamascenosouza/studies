import React from "react";
import styled from "styled-components";

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

const Clock = () => {
  return (
    <SClock>
      <WatchNumber>0</WatchNumber>
      <WatchNumber>0</WatchNumber>
      <span style={{fontSize:"3em"}}>:</span>
      <WatchNumber>0</WatchNumber>
      <WatchNumber>0</WatchNumber>
    </SClock>
  );
};

export default Clock;

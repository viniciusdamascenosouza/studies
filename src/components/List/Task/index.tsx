import React from "react"
import styled from "styled-components"

const STask = styled.li`
  border: none;
  border-radius: 5px;
  box-shadow: 2px 2px 6px 0px #000000;
  background-color: #213555;
  padding: .5em 1em;
  text-align: start;
    &:hover {
      box-shadow: 2px 2px 7px -2px #000000;
      cursor: pointer;
    }
`

const Task = (props: { task: string, time: string}) => {
    return(
        <STask>
            <h3>{props.task}</h3>
            <span>{props.time}</span>
        </STask>
    )
}

export default Task
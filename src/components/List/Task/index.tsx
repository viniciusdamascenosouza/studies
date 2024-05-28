import React from "react"
import styled from "styled-components"
import { TTask } from "../../../Types/task_type"

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

const Task = ( {task, time, selected, completed, id}: TTask ) => {
  console.log("Item atual: ", task, time, selected, completed, id)
    return(
        <STask>
            <h3>{task}</h3>
            <span>{time}</span>
        </STask>
    )
}

export default Task
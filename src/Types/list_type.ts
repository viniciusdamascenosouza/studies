import { TTask } from "./task_type";

export interface TList {
    tasks: TTask[],
    selectTask: (taskSelected: TTask) => void 
  }
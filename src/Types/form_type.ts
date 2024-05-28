import { TTask } from "./task_type";

export interface TForm {
    setTasks: React.Dispatch<React.SetStateAction<TTask[]>>
}
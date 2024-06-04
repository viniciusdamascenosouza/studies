import { TTask } from "./task_type";

export interface TTimer {
  selected: TTask | undefined;
  finishTask: () => void;
}

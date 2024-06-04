export interface TTask {
  task: string;
  time: string;
  selected: boolean;
  completed: boolean;
  id: string;
}

export interface TList extends TTask {
  selectTask: (taskSelected: TTask) => void;
}

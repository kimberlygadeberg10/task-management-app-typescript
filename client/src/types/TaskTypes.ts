export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export interface TaskContextType {
  tasks: Task[];
  addTask: (title: string) => void;
  deleteTask: (id: number) => void;
  toggleTask: (id: number) => void;
  updateTask: (id: number, title: string) => void;
  getTaskById: (id: number) => Task | undefined;
}

import { createContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

export type Task = {
  id: number;
  title: string;
  completed: boolean;
};

type TaskContextType = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  addTask: (title: string) => void;
  deleteTask: (id: number) => void;
  toggleTask: (id: number) => void;
  updateTask: (id: number, title: string) => void;
};

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const storedTasks = window.localStorage.getItem("tasks");

    if (!storedTasks) {
      return [];
    }

    try {
      return JSON.parse(storedTasks) as Task[];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    window.localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title: string) => {
    setTasks((currentTasks) => [
      ...currentTasks,
      { id: Date.now(), title, completed: false },
    ]);
  };

  const deleteTask = (id: number) => {
    setTasks((currentTasks) => currentTasks.filter((t) => t.id !== id));
  };

  const toggleTask = (id: number) => {
    setTasks((currentTasks) =>
      currentTasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t,
      ),
    );
  };

  const updateTask = (id: number, title: string) => {
    setTasks((currentTasks) =>
      currentTasks.map((t) => (t.id === id ? { ...t, title } : t)),
    );
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        addTask,
        deleteTask,
        toggleTask,
        updateTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;

import React, { useState } from "react";

type Task = {
  id: number;
  title: string;
  completed: boolean;
};

const TaskDashboard: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Learn TypeScript", completed: false },
    { id: 2, title: "Build Task App", completed: false },
  ]);

  const [newTask, setNewTask] = useState<string>("");

  // Add task
  const addTask = () => {
    if (!newTask.trim()) return;

    const newTaskObject: Task = {
      id: Date.now(),
      title: newTask,
      completed: false,
    };

    setTasks([...tasks, newTaskObject]);
    setNewTask("");
  };

  // Toggle task completion
  const toggleTask = (id: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task,
    );

    setTasks(updatedTasks);
  };

  // Delete task
  const deleteTask = (id: number) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  return (
    <div>
      <h2>Task Dashboard</h2>

      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter a new task"
      />

      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span
              onClick={() => toggleTask(task.id)}
              style={{
                cursor: "pointer",
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.title}
            </span>

            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskDashboard;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

type Task = {
  id: number;
  title: string;
  completed: boolean;
};

const TaskDashboard = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Sample Task", completed: false },
  ]);

  const [newTask, setNewTask] = useState("");

  const navigate = useNavigate();

  const addTask = () => {
    if (!newTask.trim()) return;

    const newTaskItem: Task = {
      id: Date.now(),
      title: newTask,
      completed: false,
    };

    setTasks([...tasks, newTaskItem]);
    setNewTask("");
  };

  const toggleTask = (id: number) => {
    const updated = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task,
    );

    setTasks(updated);
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <h2>Dashboard</h2>

      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter task"
      />

      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span
              onClick={() => navigate(`/task/${task.id}`)}
              style={{
                cursor: "pointer",
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.title}
            </span>

            <button onClick={() => toggleTask(task.id)}>Toggle</button>

            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskDashboard;

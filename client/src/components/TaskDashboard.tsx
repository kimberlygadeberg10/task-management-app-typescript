import React, { useState } from "react";

// Define TypeScript type
type Task = {
  id: number;
  title: string;
  completed: boolean;
};

const TaskDashboard: React.FC = () => {
  // State for tasks
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Learn TypeScript", completed: false },
    { id: 2, title: "Build Task App", completed: false },
  ]);

  // State for new task input
  const [newTask, setNewTask] = useState<string>("");

  // Add new task
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

  return (
    <div>
      <h2>Task Dashboard</h2>

      {/* Input field */}
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter a new task"
      />

      <button onClick={addTask}>Add Task</button>

      {/* Task list */}
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title} - {task.completed ? "✅ Done" : "❌ Not Done"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskDashboard;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTasks } from "../context/TaskContext";
import type { Task } from "../types/Task";

const TaskDashboard = () => {
  const { tasks, setTasks } = useTasks();
  const [newTask, setNewTask] = useState("");
  const navigate = useNavigate();

  const addTask = () => {
    if (!newTask.trim()) return;

    const task: Task = {
      id: Date.now(),
      title: newTask,
      completed: false,
    };

    setTasks([...tasks, task]);
    setNewTask("");
  };

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((t: Task) =>
        t.id === id ? { ...t, completed: !t.completed } : t,
      ),
    );
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((t: Task) => t.id !== id));
  };

  return (
    <div>
      <h2>Dashboard</h2>

      <div style={{ marginBottom: "10px" }}>
        <input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") addTask();
          }}
          placeholder="Enter task..."
        />
        <button onClick={addTask} style={{ marginLeft: "5px" }}>
          Add Task
        </button>
      </div>

      <ul>
        {tasks.map((task: Task) => (
          <li key={task.id} style={{ marginBottom: "8px" }}>
            <span
              onClick={() => navigate(`/task/${task.id}`)}
              style={{
                cursor: "pointer",
                fontWeight: "bold",
                textDecoration: task.completed ? "line-through" : "none",
                marginRight: "10px",
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

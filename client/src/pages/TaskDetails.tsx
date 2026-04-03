import { useParams, useNavigate } from "react-router-dom";
import { useTasks } from "../context/TaskContext";
import { useState } from "react";
import type { Task } from "../types/Task";

const TaskDetails = () => {
  const { id } = useParams();
  const { tasks, setTasks } = useTasks();
  const navigate = useNavigate();

  const taskId = Number(id);

  const task = tasks.find((t: Task) => t.id === taskId);

  const [editTitle, setEditTitle] = useState(task?.title || "");

  if (!task) {
    return <div>Task not found</div>;
  }

  const saveEdit = () => {
    setTasks(
      tasks.map((t: Task) =>
        t.id === task.id ? { ...t, title: editTitle } : t,
      ),
    );
  };

  const toggleTask = () => {
    setTasks(
      tasks.map((t: Task) =>
        t.id === task.id ? { ...t, completed: !t.completed } : t,
      ),
    );
  };

  const deleteTask = () => {
    setTasks(tasks.filter((t: Task) => t.id !== task.id));
    navigate("/");
  };

  return (
    <div>
      <h2>Task Details</h2>

      <input value={editTitle} onChange={(e) => setEditTitle(e.target.value)} />

      <div style={{ marginTop: "10px" }}>
        <button onClick={saveEdit}>Save</button>
        <button onClick={toggleTask}>
          {task.completed ? "Mark Incomplete" : "Mark Complete"}
        </button>
        <button onClick={deleteTask} style={{ marginLeft: "10px" }}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskDetails;

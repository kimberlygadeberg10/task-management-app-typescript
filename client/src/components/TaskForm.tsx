import { useState } from "react";
import { useTasks } from "../context/useTasks";

const TaskForm = () => {
  const { addTask } = useTasks();
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) return;

    addTask(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: "10px" }}>
      <input
        type="text"
        placeholder="Enter a task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{
          padding: "10px",
          width: "70%",
          borderRadius: "6px",
          border: "1px solid #ccc",
        }}
      />

      <button
        type="submit"
        style={{
          padding: "10px",
          background: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;

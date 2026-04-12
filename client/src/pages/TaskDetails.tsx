import { useParams, useNavigate } from "react-router-dom";
import { useTasks } from "../context/useTasks";
import { useState } from "react";

const TaskDetails = () => {
  const { id } = useParams();
  const { tasks, deleteTask, toggleTask, updateTask } = useTasks();
  const navigate = useNavigate();
  const [saveMessage, setSaveMessage] = useState("");
  const task = tasks.find((t) => t.id === Number(id));
  const [editTitle, setEditTitle] = useState(() => task?.title || "");

  if (!task) {
    return (
      <section className="panel panel--pad details-layout">
        <button className="back-link" onClick={() => navigate("/")}>
          ← Back to dashboard
        </button>
        <div className="empty-state">
          <h3>Task not found</h3>
          <p>This task does not exist.</p>
        </div>
      </section>
    );
  }

  const handleSave = () => {
    const trimmedTitle = editTitle.trim();

    if (!trimmedTitle) {
      setSaveMessage("Task title cannot be empty.");
      return;
    }

    updateTask(task.id, trimmedTitle);
    setEditTitle(trimmedTitle);
    setSaveMessage("Changes saved.");
  };

  return (
    <section className="panel panel--pad details-layout">
      <button className="back-link" onClick={() => navigate("/")}>
        ← Back to dashboard
      </button>

      <div className="details-card__top">
        <div>
          <span className="label">Task details</span>
          <h2>Edit Task</h2>
          <p className="helper-text">You can change the title or update the status.</p>
        </div>
        <span
          className={`badge ${task.completed ? "badge--complete" : "badge--open"}`}
        >
          {task.completed ? "Completed" : "In progress"}
        </span>
      </div>

      <div>
        <label className="label" htmlFor="task-title">
          Task title
        </label>
        <input
          id="task-title"
          className="input"
          value={editTitle}
          onChange={(e) => {
            setEditTitle(e.target.value);
            setSaveMessage("");
          }}
        />
        {saveMessage ? <div className="save-message">{saveMessage}</div> : null}
      </div>

      <div className="button-row">
        <button className="button button--primary" onClick={handleSave}>
          Save changes
        </button>

        <button
          className="button button--secondary"
          onClick={() => toggleTask(task.id)}
        >
          {task.completed ? "Mark incomplete" : "Mark complete"}
        </button>

        <button
          className="button button--danger"
          onClick={() => {
            deleteTask(task.id);
            navigate("/");
          }}
        >
          Delete task
        </button>
      </div>
    </section>
  );
};

export default TaskDetails;

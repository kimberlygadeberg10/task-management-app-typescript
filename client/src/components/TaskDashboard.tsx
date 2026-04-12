import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTasks } from "../context/useTasks";
import type { Task } from "../types/Task";

const TaskDashboard = () => {
  const { tasks, addTask, deleteTask, toggleTask } = useTasks();
  const [newTask, setNewTask] = useState("");
  const navigate = useNavigate();
  const completedTasks = tasks.filter((task) => task.completed).length;
  const openTasks = tasks.length - completedTasks;

  const handleAddTask = () => {
    const trimmedTask = newTask.trim();

    if (!trimmedTask) return;

    addTask(trimmedTask);
    setNewTask("");
  };

  return (
    <div className="dashboard-grid">
      <section className="panel panel--pad">
        <div className="panel__header">
          <div>
            <h2>My Tasks</h2>
            <p>Add a task below. Click a task if you want to edit it.</p>
          </div>
          <span className="stat-pill">{tasks.length}</span>
        </div>

        <div className="task-form">
          <input
            className="input"
            placeholder="Enter a task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAddTask()}
          />

          <button className="button button--primary" onClick={handleAddTask}>
            Add task
          </button>
        </div>

        {tasks.length === 0 ? (
          <div className="empty-state">
            <h3>No tasks yet</h3>
            <p>Add your first task to get started.</p>
          </div>
        ) : (
          <ul className="task-list">
            {tasks.map((task: Task) => (
              <li
                key={task.id}
                className={`task-card${task.completed ? " task-card--completed" : ""}`}
              >
                <span className="task-card__status" aria-hidden="true" />

                <div>
                  <button
                    className="task-card__title-button"
                    onClick={() => navigate(`/task/${task.id}`)}
                  >
                    <p
                      className="task-card__title"
                      style={{
                        textDecoration: task.completed ? "line-through" : "none",
                      }}
                    >
                      {task.title}
                    </p>
                  </button>
                  <span className="task-card__meta">
                    {task.completed ? "Completed" : "Not completed"}
                  </span>
                </div>

                <div className="task-card__actions">
                  <button
                    className="chip-button"
                    onClick={() => toggleTask(task.id)}
                  >
                    {task.completed ? "Reopen" : "Complete"}
                  </button>
                  <button
                    className="chip-button"
                    onClick={() => deleteTask(task.id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>

      <aside className="stats-card">
        <section className="panel panel--pad">
          <div className="panel__header">
            <div>
              <h3>Summary</h3>
              <p>Here is a quick look at your tasks.</p>
            </div>
          </div>

          <div className="stats-card__grid">
            <div className="stats-tile">
              <strong>{openTasks}</strong>
              <span>Tasks left</span>
            </div>
            <div className="stats-tile">
              <strong>{completedTasks}</strong>
              <span>Tasks done</span>
            </div>
            <div className="stats-tile">
              <strong>{tasks.length === 0 ? "0%" : `${Math.round((completedTasks / tasks.length) * 100)}%`}</strong>
              <span>Percent done</span>
            </div>
          </div>
        </section>
      </aside>
    </div>
  );
};

export default TaskDashboard;

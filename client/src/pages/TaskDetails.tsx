import React from "react";
import { useParams } from "react-router-dom";
import type { Task } from "../types/Task";

type Props = {
  tasks: Task[];
};

const TaskDetails = ({ tasks }: Props) => {
  const { id } = useParams();

  const task = tasks.find((t) => t.id === Number(id));

  if (!task) {
    return <h2>Task not found</h2>;
  }

  return (
    <div>
      <h2>Task Details</h2>

      <p>
        <strong>Title:</strong> {task.title}
      </p>

      <p>
        <strong>Status:</strong> {task.completed ? "Completed" : "Incomplete"}
      </p>
    </div>
  );
};

export default TaskDetails;

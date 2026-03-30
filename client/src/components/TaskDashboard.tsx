// TaskDashboard.tsx

import React from "react";

// Define a TypeScript type for a Task
type Task = {
  id: number;
  title: string;
  completed: boolean;
};

const TaskDashboard: React.FC = () => {
  // Temporary sample data
  const tasks: Task[] = [
    { id: 1, title: "Learn TypeScript", completed: false },
    { id: 2, title: "Build Task App", completed: false },
  ];

  return (
    <div>
      <h2>Task Dashboard</h2>

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

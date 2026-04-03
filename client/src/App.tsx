import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import TaskDashboard from "./components/TaskDashboard";
import TaskDetails from "./pages/TaskDetails";
import type { Task } from "./types/Task";

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Sample Task", completed: false },
  ]);

  return (
    <Routes>
      <Route
        path="/"
        element={<TaskDashboard tasks={tasks} setTasks={setTasks} />}
      />
      <Route path="/task/:id" element={<TaskDetails tasks={tasks} />} />
    </Routes>
  );
}

export default App;

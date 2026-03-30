import React from "react";
import { Routes, Route } from "react-router-dom";
import TaskDashboard from "./components/TaskDashboard";
import TaskDetails from "./pages/TaskDetails";

function App() {
  return (
    <div>
      <h1>Task Management App</h1>

      <Routes>
        {/* Dashboard (home page) */}
        <Route path="/" element={<TaskDashboard />} />

        {/* Task details page */}
        <Route path="/task/:id" element={<TaskDetails />} />
      </Routes>
    </div>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import TaskDashboard from "./components/TaskDashboard";
import TaskDetails from "./pages/TaskDetails";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated, isLoading, user } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  if (!isAuthenticated) {
    return (
      <div>
        <h1>Task Manager</h1>
        <LoginButton />
      </div>
    );
  }

  return (
    <div>
      <h1>Task Manager</h1>
      <p>Welcome, {user?.name}</p>
      <LogoutButton />

      <Routes>
        <Route path="/" element={<TaskDashboard />} />
        <Route path="/task/:id" element={<TaskDetails />} />
      </Routes>
    </div>
  );
}

export default App;

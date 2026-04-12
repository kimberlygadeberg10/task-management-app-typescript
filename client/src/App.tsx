import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import { Routes, Route } from "react-router-dom";
import TaskDashboard from "./components/TaskDashboard";
import TaskDetails from "./pages/TaskDetails";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";

function App() {
  const { isAuthenticated, isLoading, user } = useAuth0();

  if (isLoading) {
    return (
      <main className="app-shell">
        <div className="app-shell__inner">
          <section className="panel panel--pad">
            <h1>Task Manager</h1>
            <p>Loading...</p>
          </section>
        </div>
      </main>
    );
  }

  if (!isAuthenticated) {
    return (
      <main className="app-shell">
        <div className="app-shell__inner">
          <header className="app-header">
            <span className="app-header__eyebrow">Simple task app</span>
            <h1>Task Manager</h1>
            <p>This app uses Auth0 for login before you can manage tasks.</p>
          </header>

          <section className="panel panel--pad auth-box">
            <h2>Login</h2>
            <p>Please log in or sign up with Auth0 to continue.</p>
            <LoginButton />
          </section>
        </div>
      </main>
    );
  }

  return (
    <main className="app-shell">
      <div className="app-shell__inner">
        <header className="app-header">
          <span className="app-header__eyebrow">Simple task app</span>
          <h1>Task Manager</h1>
          <p>This is a basic app for adding tasks and marking them complete.</p>
          <div className="auth-bar">
            <span>Logged in as {user?.name || user?.email || "User"}</span>
            <LogoutButton />
          </div>
        </header>

        <section className="app-content">
          <Routes>
            <Route path="/" element={<TaskDashboard />} />
            <Route path="/task/:id" element={<TaskDetails />} />
          </Routes>
        </section>
      </div>
    </main>
  );
}

export default App;

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { TaskProvider } from "./context/TaskContext";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Auth0Provider
      domain="kimberly-gadeberg-2026.us.auth0.com"
      clientId="QGHKCxvuebYQ3d2KUQKqJtMFiG8xusro"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <BrowserRouter>
        <TaskProvider>
          <App />
        </TaskProvider>
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>,
);

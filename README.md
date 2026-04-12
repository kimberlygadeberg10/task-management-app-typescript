# Task Management App with TypeScript

This project is a simple task management application built with React and TypeScript. It was created to practice TypeScript basics, React state management, Context API, routing, and Auth0 authentication.

## Project Features

- Task dashboard page for viewing all tasks
- Create new tasks
- Edit task titles on a task details page
- Delete tasks
- Mark tasks as complete or incomplete
- Auth0 login and logout flow
- Global task state using React Context API
- Task data saved in `localStorage`

## TypeScript Concepts Used

- Type aliases and interfaces for task data and context values
- Typed React props and state
- Typed hooks with `useState`
- Type-safe Context API setup
- Type checking across components and utility logic

## Tech Stack

- React
- TypeScript
- Vite
- React Router
- Auth0 React SDK

## Project Structure

- `client/src/components` contains reusable UI components
- `client/src/pages` contains routed page views
- `client/src/context` contains Context API logic and custom hooks
- `client/src/types` contains shared TypeScript types

## Authentication

This app uses Auth0 for authentication. Users must log in before accessing the task dashboard and task details pages.

The Auth0 provider is configured in `client/src/main.tsx`.

## Setup Instructions

1. Clone the repository.
2. Open the project folder.
3. Install dependencies in the client app:

```bash
cd client
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open the local Vite URL in your browser.

## How to Use the App

1. Log in with Auth0.
2. Add a new task from the dashboard.
3. Click a task to open the details page.
4. Edit the title or change the completion status.
5. Delete a task if needed.

## Implementation Notes

- The dashboard page handles task creation and task list actions.
- The task details page handles editing and updating an individual task.
- Context API is used so task data can be shared across multiple components.
- `localStorage` is used to keep tasks after refreshing the page.
- TypeScript is used throughout the app to improve readability and maintainability.

## Possible Future Improvements

- Add due dates or priorities
- Add task categories
- Add better form validation messages
- Connect the app to a backend database

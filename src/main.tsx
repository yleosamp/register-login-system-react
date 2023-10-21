import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";


// Configurando router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from "./routes/Login.tsx";
import Error from "./routes/Error.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/error",
    element: <Error />
  }
])

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement!);

root.render(
  <React.StrictMode>
    <RouterProvider router={ router }/>
  </React.StrictMode>
);

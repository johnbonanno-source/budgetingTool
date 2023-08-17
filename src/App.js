import "./App.module.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/Home";

const router = createBrowserRouter([{ path: "/", element: <HomePage /> }, {}]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

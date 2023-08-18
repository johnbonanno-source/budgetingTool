import "./App.module.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/Home";
import RootLayout from "./Pages/Root";

const router = createBrowserRouter([{
  path: '/', element: <RootLayout />,
    children:[
      { path: '/', element: <HomePage /> },
      // {path:'/test', element: <Budget />},
    ], 
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

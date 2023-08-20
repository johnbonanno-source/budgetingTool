import "./App.module.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/Home";
import LoginPage from "./Pages/LoginPage";
import PlaceHolder from "./Pages/Placeholder";
import RootLayout from "./Pages/Root";
const router = createBrowserRouter([{
  path: '/', element: <RootLayout />,
    children:[
      { path: '/', element: <PlaceHolder /> },
      { path: '/home', element: <HomePage /> },
      {path:'/login', element: <LoginPage />},
    ], 
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

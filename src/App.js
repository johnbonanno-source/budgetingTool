import "./App.module.css";
import { createBrowserRouter, RouterProvider, useOutletContext } from "react-router-dom";
import HomePage from "./Pages/Home";
import LoginPage from "./Pages/LoginPage";
import PlaceHolder from "./Pages/Placeholder";
import RootLayout from "./Pages/Root";
import RegistrationPage from "./Pages/RegistrationPage";
import ErrorPage from "./Pages/ErrorPage";

const router = createBrowserRouter([{

  path: '/', element: <RootLayout />,
    errorElement: <ErrorPage />,
    children:[
      { path: '/', element: <PlaceHolder /> },
      { path: '/home', element: <HomePage /> },
      { path:'/register', element: <RegistrationPage /> },
      { path:'/login', element: <LoginPage /> },
    ], 
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

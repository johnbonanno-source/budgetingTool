import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './Pages/Login and Registration Pages/LoginPage';
import LandingPage from './Pages/LandingPage';
import RootLayout from './Root';
import RegistrationPage from './Pages/Login and Registration Pages/RegistrationPage';
import ErrorPage from './Pages/ErrorPage';
import BalanceBox from './Components/BalanceBox/BalanceBox';

const router = createBrowserRouter([{

  path: '/', element: <RootLayout />,
    errorElement: <ErrorPage />,
    children:[
      { path: '/', element: <LandingPage /> },
      { path: '/home', element: <BalanceBox /> },
      { path:'/register', element: <RegistrationPage /> },
      { path:'/login', element: <LoginPage /> },
    ], 
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

import React, { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  Login,
  LandingPage,
  RootLayout,
  ErrorPage,
  BudgetPage,
} from './components';
import { validateSessionToken } from './Api/SessionTokenApi';
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    setIsLoggedIn(validateSessionToken());
  }, []);

  let router = null;
  router = createBrowserRouter([
    {
      path: '/',
      element: (
        <RootLayout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      ),
      errorElement: <ErrorPage />,
      children: [
        { path: '/', element: <LandingPage /> },
        { path: '/budget', element: <BudgetPage /> },
        { path: '/login', element: <Login /> },
      ],
    },
  ]);

  return (
    <RouterProvider router={router}>
      <RootLayout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </RouterProvider>
  );
};

export default App;

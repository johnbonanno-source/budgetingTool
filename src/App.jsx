import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login, LandingPage, RootLayout, ErrorPage, BudgetPage } from './components';
import DatePicker from './Components/DatePickerComponent/DatePickerComponent';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const router = createBrowserRouter([
    {
      path: '/', element: <RootLayout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />,
      errorElement: <ErrorPage />,
      children: [
        { path: '/', element: <LandingPage /> },
        { path: '/budget', element: <BudgetPage /> },
        { path: '/login', element: <Login /> },
        { path: '/date', element: <DatePicker /> },
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

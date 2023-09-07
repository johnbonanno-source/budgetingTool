import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { GridComponent,Login,LandingPage, RootLayout, RegistrationPage, ErrorPage, BalanceBox, BudgetPage } from './components';

const router = createBrowserRouter([{

  path: '/', element: <RootLayout />,
    errorElement: <ErrorPage />,
    children:[
      { path: '/', element: <LandingPage /> },
      { path: '/budget', element: <BudgetPage /> },
      // { path:'/register', element: <RegistrationPage /> },
      { path:'/login', element: <Login /> },
      { path:'/grid', element: <GridComponent /> },
    ], 
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

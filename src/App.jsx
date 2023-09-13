import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login,LandingPage, RootLayout, ErrorPage, BudgetPage } from './components';
import DatePicker from './Components/DatePickerComponent/DatePickerComponent'
const router = createBrowserRouter([{

  path: '/', element: <RootLayout />,
    errorElement: <ErrorPage />,
    children:[
      { path: '/', element: <LandingPage /> },
      { path: '/budget', element: <BudgetPage /> },
      { path:'/login', element: <Login /> },
      { path:'/date', element: <DatePicker /> },

    ], 
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

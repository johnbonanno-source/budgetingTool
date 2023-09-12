import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login,LandingPage, RootLayout, RegistrationPage, ErrorPage, BalanceBox, BudgetPage } from './components';
import ExpenseForm from './Components/ExpenseForm/ExpenseForm';
import DatePicker from './Components/DatePickerComponent/DatePickerComponent'
const router = createBrowserRouter([{

  path: '/', element: <RootLayout />,
    errorElement: <ErrorPage />,
    children:[
      { path: '/', element: <LandingPage /> },
      { path: '/budget', element: <BudgetPage /> },
      // { path:'/register', element: <RegistrationPage /> },
      { path:'/login', element: <Login /> },
      { path:'/date', element: <DatePicker /> },

    ], 
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

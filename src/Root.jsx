import { Outlet } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';

const RootLayout = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <>
      <div>
        <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;

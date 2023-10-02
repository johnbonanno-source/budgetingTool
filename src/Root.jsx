import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";

const RootLayout = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <>
      <div>
        <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}  />
        <Outlet />
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default RootLayout;

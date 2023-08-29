import { Outlet } from "react-router-dom";
import { useState } from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

const RootLayout = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <>
      <div>
        <Header isLoggedIn = {isLoggedIn} setLoggedIn={setLoggedIn} />
        <Outlet context={[isLoggedIn, setLoggedIn]} />
        <Footer />
      </div>
    </>
  );
};

export default RootLayout;
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
// import Zoom from './Components/Zoom';
const RootLayout = () => {
  return (
    <>
      <div>
        {/* <Zoom /> */}
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default RootLayout;

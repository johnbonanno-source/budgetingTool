import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';
const RootLayout = () => {
  return (
    <>
      <div>
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default RootLayout;

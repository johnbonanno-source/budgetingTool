import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

const RootLayout = () => {
 
  return (
    <>
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default RootLayout;

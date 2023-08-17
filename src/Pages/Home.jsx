import { link } from "react-router-dom";
import { useState } from 'react';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import AvailableBalance from '../Components/BalanceBox/AvailableBalance';
import classes from './Home.module.css';
import addLoginHandler from "../Utils/LoginHandler";
const HomePage = () => {

  const [loggedIn, setLoggedIn] = useState(false);
  const [balance, setBalance] = useState(10);
  
  return (
    <>
      <Header
        isLoggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
        onLogin={addLoginHandler}
      />
      {loggedIn ? (
        <div className={classes.divStyle}>
          <AvailableBalance balance={balance} setBalance={setBalance} />
          <img
            src="https://gdm-catalog-fmapi-prod.imgix.net/ProductScreenshot/87539ba2-07d6-4642-9788-21a631b6f4c1.png"
            alt="W3Schools.com"
          />
        </div>
      ) : (
        <div>
          <img
            src="https://gdm-catalog-fmapi-prod.imgix.net/ProductScreenshot/87539ba2-07d6-4642-9788-21a631b6f4c1.png"
            alt="W3Schools.com"
          />
          <Footer />
        </div>
      )};
    </>
  );
};

export default HomePage;

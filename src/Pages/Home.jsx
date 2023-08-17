import { useState } from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import BalanceBox from "../Components/BalanceBox/BalanceBox";
import classes from "./Home.module.css";

const HomePage = () => {
  //can we change this to check if a session token exists?
  const [loggedIn, setLoggedIn] = useState(false);
  const [balance, setBalance] = useState(10);

  return (
    <>
      <Header isLoggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      {loggedIn ? (
        <div>
          <div className={classes.divStyle}>
            <BalanceBox balance={balance} setBalance={setBalance} />
            <img
              src="https://gdm-catalog-fmapi-prod.imgix.net/ProductScreenshot/87539ba2-07d6-4642-9788-21a631b6f4c1.png"
              alt="W3Schools.com"
            />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      ) : (
        <div>
          <img
            src="https://gdm-catalog-fmapi-prod.imgix.net/ProductScreenshot/87539ba2-07d6-4642-9788-21a631b6f4c1.png"
            alt="W3Schools.com"
          />
          <Footer />
        </div>
      )}
      ;
    </>
  );
};

export default HomePage;

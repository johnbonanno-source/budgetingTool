import { useState } from "react";
import BalanceBox from "../Components/BalanceBox/BalanceBox";
import classes from "./Home.module.css";

const HomePage = () => {

  const [balance, setBalance] = useState(10);

  return (
    <>
        <div>
          <div className={classes.divStyle}>
            <BalanceBox balance={balance} setBalance={setBalance} />
            <img
              src="https://gdm-catalog-fmapi-prod.imgix.net/ProductScreenshot/87539ba2-07d6-4642-9788-21a631b6f4c1.png"
              alt="W3Schools.com"
            />
          </div>
          
        </div>
    </>
  );
};

export default HomePage;

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
          
        </div>
      </div>
    </>
  );
};

export default HomePage;

import classes from "./BalanceBox.module.css";
import { useState } from "react";
function BalanceBox() {
  
  const [balance, setBalance] = useState(10);
  const handleButtonClick = (event) => {
    const buttonName = event.target.name;
    const inputField = document.getElementById(buttonName === "deposit" ? "incrementBalance" : "decrementBalance");
    const delta = parseInt(inputField.value);
    if (typeof delta === "number" && !isNaN(delta)) {
      setBalance(buttonName === "deposit" ? balance + delta : balance - delta);
    }
  };

  return (
    <>
        <div className={classes.balanceBoxContainer}>
          <h1 className={classes.balanceAmount}>Current Balance: {balance}</h1>
          <div className={classes.balanceBox}>
            <input id={"incrementBalance"} />
            <input id={"decrementBalance"} />
            <button name="deposit" onClick={handleButtonClick}>Deposit</button>
            <button name="withdraw" onClick={handleButtonClick}>Withdraw</button>
          </div>
        </div>

    </>
  );
}

export default BalanceBox;

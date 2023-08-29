import classes from "./BalanceBox.module.css";
import { useState } from "react";
function BalanceBox() {
  const [balance, setBalance] = useState(10);

  const handleAddButtonClick = () => {
    let inputfield = document.getElementById("incrementBalance");
    let delta = parseInt(inputfield.value);
    if (typeof delta === "number" && !isNaN(delta)) {
      setBalance(balance + parseInt(inputfield.value));
    }
  };

  const handleSubtractButtonClick = () => {
    let inputfield = document.getElementById("decrementBalance");
    let delta = parseInt(inputfield.value);
    if (typeof delta === "number" && !isNaN(delta)) {
      setBalance(balance - parseInt(inputfield.value));
    }
  };

  return (
    <>
        <div className={classes.balanceBoxContainer}>
          <h1 className={classes.balanceAmount}>Current Balance: {balance}</h1>
          <div className={classes.balanceBox}>
            <input id={"incrementBalance"} />
            <input id={"decrementBalance"} />
            <button onClick={handleAddButtonClick}>Deposit</button>
            <button onClick={handleSubtractButtonClick}>Withdraw</button>
          </div>
        </div>

    </>
  );
}

export default BalanceBox;

import classes from "./BalanceBox.module.css";
import { Link } from "react-router-dom";
function BalanceBox({ balance, setBalance }) {
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
        <div className={classes.balanceBoxTwoToneContainer}>
          <header className={classes.balanceBackgroundBox}>
            <h1 className={classes.balanceAmount}>
              Current Balance: {balance}
            </h1>
          </header>

          <div className={classes.balanceBox}>
            <input
              className={classes.balanceBoxInput}
              id={"incrementBalance"}
            />
            <input
              className={classes.balanceBoxInput}
              id={"decrementBalance"}
            />
            <button
              className={classes.modifyButton}
              onClick={handleAddButtonClick}
            >
              Deposit
            </button>
            <button
              className={classes.modifyButton}
              onClick={handleSubtractButtonClick}
            >
              Withdraw
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default BalanceBox;

import classes from "./BalanceBox.module.css";

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
      <div>
        <header className={classes.greenBackgroundBox}>
          <h1 className={classes.balanceAmount}>Current Balance: {balance}</h1>
        </header>
      </div>
      <div className={classes.balanceBox}>
        <input id={"incrementBalance"} />
        <input id={"decrementBalance"} />
        <button className={classes.modifyButton} onClick={handleAddButtonClick}>
          Deposit
        </button>
        <button
          className={classes.modifyButton}
          onClick={handleSubtractButtonClick}
        >
          Withdraw
        </button>
      </div>
    </>
  );
}

export default BalanceBox;

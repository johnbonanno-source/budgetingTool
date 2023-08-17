import classes from "./BalanceBox.module.css";

function BalanceBox({ balance }) {
  return (
    <>
      <header className={classes.balanceBox}>
        <h1 className={classes.balanceAmount}>Current Balance: {balance}</h1>
      </header>
    </>
  );
}

export default BalanceBox;

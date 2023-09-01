import classes from './BalanceBox.module.css';

function BalanceBox({ balance, setBalance }) {
  const handleButtonClick = (event) => {
    const buttonName = event.target.name;
    const inputField = document.getElementById(
      buttonName === 'deposit' ? 'incrementBalance' : 'decrementBalance'
    );
    const delta = parseInt(inputField.value);
    if (typeof delta === 'number' && !isNaN(delta)) {
      setBalance(buttonName === 'deposit' ? balance + delta : balance - delta);
    }
  };

  return (
    <>
      <div className={classes.balanceBoxContainer}>
        <h1 className={classes.balanceAmount}>Current Balance: {balance}</h1>
        <div className={classes.balanceBox}>
          <input className={classes.balanceInput} id={'incrementBalance'} />
          <input className={classes.balanceInput} id={'decrementBalance'} />
          <button
            className={classes.balanceButton}
            name='deposit'
            onClick={handleButtonClick}
          >
            Deposit
          </button>
          <button
            className={classes.balanceButton}
            name='withdraw'
            onClick={handleButtonClick}
          >
            Withdraw
          </button>
        </div>
      </div>
    </>
  );
}

export default BalanceBox;

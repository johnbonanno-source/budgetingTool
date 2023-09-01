import classes from "./BalanceBox.module.css";
import { useState } from "react";
import ExpenseItem from "../ExpenseTracker/ExpenseItem";
import Wrapper from "../Wrapper/Wrapper";
function BalanceBox() {
  const [balance, setBalance] = useState(10);
  const handleButtonClick = (event) => {
    const buttonName = event.target.name;
    const inputField = document.getElementById(
      buttonName === "deposit" ? "incrementBalance" : "decrementBalance"
    );
    const delta = parseInt(inputField.value);
    if (typeof delta === "number" && !isNaN(delta)) {
      setBalance(buttonName === "deposit" ? balance + delta : balance - delta);
    }
  };

  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
  ];

  return (
    <>
      <Wrapper>
        <div className={classes.balanceBoxContainer}>
          <h1 className={classes.balanceAmount}>Current Balance: {balance}</h1>
          <div className={classes.balanceBox}>
            <input className={classes.balanceInput} id={"incrementBalance"} />
            <input className={classes.balanceInput} id={"decrementBalance"} />
            <button
              className={classes.balanceButton}
              name="deposit"
              onClick={handleButtonClick}
            >
              Deposit
            </button>
            <button
              className={classes.balanceButton}
              name="withdraw"
              onClick={handleButtonClick}
            >
              Withdraw
            </button>
          </div>
        </div>
  
        {expenses.map((expense) => (
          <ExpenseItem
            key={expense.id} 
            title={expense.title} 
            amount={expense.amount} 
            date={expense.date} 
          />
        ))}
      </Wrapper>
    </>
  );
}

export default BalanceBox;

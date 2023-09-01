import React from "react";
import ExpenseDate from "./ExpenseDate";
import classes from "./ExpenseItem.module.css";

function ExpenseItem(props) {
  return (
    <div className={classes.expenseItemBackground}>
    <div className={classes.container}>
      <ExpenseDate date={props.date} />
      <h3>{props.title}</h3>
      <div>${props.amount}</div>
      <h2>{props.expenseAmount}</h2>
    </div>
    </div>
  );
}

export default ExpenseItem;

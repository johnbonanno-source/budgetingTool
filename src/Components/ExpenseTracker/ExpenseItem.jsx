import React from "react";
import ExpenseDate from "./ExpenseDate";
import classes from "./ExpenseItem.module.css";
import Grid from "@mui/material/Grid";

function ExpenseItem(props) {
  return (
    <div className={classes.expenseItemBackground}>
      <div className={classes.container}>
        <h3 className={classes.item}>{props.title}</h3>
        <div className={classes.item}>${props.amount}</div>
        <ExpenseDate date={props.date} />
      </div>
    </div>
  );
}

export default ExpenseItem;

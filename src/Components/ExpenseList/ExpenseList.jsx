import React from "react";
import ExpenseItem from "../ExpenseTracker/ExpenseItem";
function ExpenseList({ expenses }) {
  return (
    <>
      {expenses.map((expense,index) => (
        <ExpenseItem
          key={index}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </>
  );
}

export default ExpenseList;

import React, { useState } from "react";
import { BalanceBox } from "../../components";
import ExpenseForm from "../../Components/ExpenseForm/ExpenseForm";
import ExpenseList from "../../Components/ExpenseList/ExpenseList";
import Wrapper from "../../Components/Wrapper/Wrapper";
import Grid from "@mui/material/Grid";

function BudgetPage() {
  const [balance, setBalance] = useState(10);
  const [expense, setExpense] = useState({
    title: "",
    amount: "",
    date: new Date(),
  });
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },

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
        <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={11}>
            <BalanceBox balance={balance} setBalance={setBalance} />
            <ExpenseForm expense={expense} setExpense={setExpense} />
            <ExpenseList expenses={expenses} />
          </Grid>
        </Grid>
      </Wrapper>
    </>
  );
}

export default BudgetPage;

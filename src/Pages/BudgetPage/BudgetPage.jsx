import React, { useState } from "react";
import { BalanceBox } from "../../components";
import ExpenseForm from "../../Components/ExpenseForm/ExpenseForm";
import ExpenseList from "../../Components/ExpenseList/ExpenseList";
import Wrapper from "../../Components/Wrapper/Wrapper";
import Grid from "@mui/material/Grid";

function BudgetPage() {
  const [balance, setBalance] = useState(10);
  
  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    }
  ]);


  const handleSetExpense = ( expenseItem ) => {
    console.log(expenseItem);
    
  }

 
  
  return (
    <>
      <Wrapper>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={11}>
            <BalanceBox balance={balance} setBalance={setBalance} />
            <ExpenseForm handleSetExpense={handleSetExpense} />
            <ExpenseList expenses={expenses} />
          </Grid>
        </Grid>
      </Wrapper>
    </>
  );
}

export default BudgetPage;

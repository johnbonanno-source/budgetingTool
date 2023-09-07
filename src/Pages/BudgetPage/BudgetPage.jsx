import React, { useState } from 'react';

import Grid from '@mui/material/Grid';
import { InputComponent, ButtonComponent } from '../../components';
import { Box } from '@mui/material';
import classes from './Box.module.css';
function BudgetPage() {
  const [balance, setBalance] = useState(10);

  const [expenses, setExpenses] = useState([
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
  ]);

  const handleSetExpense = (expenseItem) => {
    console.log(expenseItem);
  };

  const handleButtonClick = (event) => {
    console.log("called");
    const buttonName = event.target.name;
    const InputComponentField = document.getElementById(
      buttonName === 'deposit' ? 'incrementBalance' : 'decrementBalance'
    );
    const delta = parseInt(InputComponentField.value);
    if (typeof delta === 'number' && !isNaN(delta)) {
      setBalance(buttonName === 'deposit' ? balance + delta : balance - delta);
    }
  };

  return (
    <>
      <Box className={classes.box}>
        <div className={classes.card}>
          <h1>Balance: {balance} </h1>
          <Grid container justifyContent='center' spacing={2}>
            <Grid item xs={6}>
              <h6>Deposit</h6>
            </Grid>
            <Grid item xs={6}>
              <h6>Withdraw</h6>
            </Grid>
            <Grid item xs={6}>
              <InputComponent id={'incrementBalance'} />
            </Grid>
            <Grid item xs={6}>
              <InputComponent id={'decrementBalance'} />
            </Grid>
            <Grid item xs={6}>
              <ButtonComponent name='deposit' onClick={handleButtonClick}>
                Deposit
              </ButtonComponent>
            </Grid>
            <Grid item xs={6}>
              <ButtonComponent name='withdraw' onClick={handleButtonClick}>
                Withdraw
              </ButtonComponent>
            </Grid>
          </Grid>
        </div>

      </Box>

      {/* <ExpenseForm handleSetExpense={handleSetExpense} />
            <ExpenseList expenses={expenses} /> */}
    </>
  );
}

export default BudgetPage;

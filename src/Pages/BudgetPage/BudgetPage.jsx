import React, { useState } from 'react';
import { useTheme } from '@emotion/react';
import { Box } from '@mui/material';
import { BalanceBox } from '../../components';
import LCC from '../../Assets/LCC.jpg';
import { BoxComponent } from '../../components';
import ExpenseForm from '../../Components/ExpenseForm/ExpenseForm';
import ExpenseGrid from '../../Components/ExpenseGrid/ExpenseGrid';

function BudgetPage() {
  const [balance, setBalance] = useState(10);
  const [expenses, setExpenses] = useState([
    {
      id: 'e1',
      title: 'Toilet Paper',
      cost: 94.12,
      date: new Date(2020, 7, 14),
      isReoccuring: false,
    },
  ]);

  const theme = useTheme();

  return (
    <>
      <BoxComponent>
        <img src={LCC} alt='pic' />
        <Box
          sx={{
            backgroundColor: `${theme.palette.green.main}`,
            padding: '2% 2%',
            borderRadius: '12px',
            gap: '1rem',
          }}
        >
          <BalanceBox balance={balance} setBalance={setBalance} />
          <ExpenseForm expenses={expenses} setExpenses={setExpenses} />
          <ExpenseGrid expenses={expenses} />
        </Box>
      </BoxComponent>
    </>
  );
}

export default BudgetPage;

import React, { useState } from 'react';
import { useTheme } from '@emotion/react';
import { Box } from '@mui/material';
import { BalanceBox } from '../../components';
import { BoxComponent } from '../../components';
import ExpenseForm from '../../Components/ExpenseForm/ExpenseForm';
import ExpenseGrid from '../../Components/ExpenseGrid/ExpenseGrid';
import ExpensesApi from '../../Api/ExpensesApi';
import { getSessionTokenById } from '../../Api/SessionTokenApi';
import { useEffect } from 'react';

function BudgetPage() {
  const [balance, setBalance] = useState(10);

  const [expenses, setExpenses] = useState([
    {
      cost: 94.122,
      date: new Date(),
      isReoccuring: false,
      title: 'Demo Expense',
      _id: 'e1',
    },
  ]);

  const theme = useTheme();

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await ExpensesApi('getExpenses').get();
        setExpenses(response);
      } catch (error) {
        console.error('Error fetching expenses:', error);
      }
    };
    fetchExpenses();
  }, []);

  return (
    <>
      <BoxComponent>
        <Box
          sx={{
            backgroundColor: `${theme.palette.green.main}`,
            padding: '2% 2%',
            borderRadius: '12px',
            maxWidth: '1000px',
            overflow: 'auto',
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

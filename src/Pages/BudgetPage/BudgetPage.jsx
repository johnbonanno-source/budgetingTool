import React, { useState } from 'react';
import { Box } from '@mui/material';
import { BalanceBox, BoxComponent } from '../../components';
import ExpenseForm from '../../Components/ExpenseForm/ExpenseForm';
import ExpenseGrid from '../../Components/ExpenseGrid/ExpenseGrid';
import ExpensesApi from '../../Api/ExpensesApi';
import { useEffect } from 'react';
import BalanceApi from '../../Api/BalanceApi';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';

const BudgetPage = () => {
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

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const expensesFromApi = await ExpensesApi('getExpenses').get();
        setExpenses(expensesFromApi);
        
      } catch (error) {
        console.error('Error fetching expenses:', error);
      }
      try {
        const balanceFromApi = await BalanceApi('getBalance').get();
        setBalance(balanceFromApi.balance);
      } catch (error) {
        console.error('Error fetching balances:', error);
      }
    };
    fetchExpenses();
  }, [setBalance]);

  return (
    <>
      <BoxComponent>
        <Container component='main' maxWidth='md'>
          <CssBaseline />
          <Box
            sx={{
              backgroundColor: `#FFFF`,
              padding: '2% 2%',
              borderRadius: '4px',
              overflow: 'auto',
              marginTop: '6rem',
              marginBottom: '3rem',
              paddingTop: '0rem',
            }}
          >
            <BalanceBox balance={balance} setBalance={setBalance} />
            <ExpenseForm expenses={expenses} setExpenses={setExpenses} />
            <ExpenseGrid expenses={expenses} />
          </Box>
        </Container>
      </BoxComponent>
    </>
  );
};

export default BudgetPage;

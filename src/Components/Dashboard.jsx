import React from 'react';
import { BoxComponent } from '../components';
import { Container } from '@mui/material';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import ExpensesApi from '../Api/ExpensesApi';
import BalanceApi from '../Api/BalanceApi';
import CssBaseline from '@mui/material/CssBaseline';
import BasicPie from './PieChart';


const DashboardPage = () => {
  // const [expenses, setExpenses] = useState([
  //   {
  //     id: 'e1',
  //     value: 94.122,
  //     label: 'Demo Expense',
  //   }
  // ]);

  const data= [
    { id: 0, value: 10, label: 'series A' },
    { id: 1, value: 15, label: 'series B' },
    { id: 2, value: 20, label: 'series C' },
  ];

  // useEffect(() => {
  //   const fetchExpenses = async () => {
  //     try {
  //       const expensesFromApi = await ExpensesApi('getExpenses').get();
  //       setExpenses(expensesFromApi);
        
  //     } catch (error) {
  //       console.error('Error fetching expenses:', error);
  //     }
  //   };
  //   fetchExpenses();
  // }, []);


console.log(data)
  return (
    <BoxComponent minHeight='100vh'>
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
          <div>Dashboard</div>
          <BasicPie data={[
        
          {data}
        
      ]}/>
        </Box>
      </Container>
    </BoxComponent>
  );
};

export default DashboardPage;

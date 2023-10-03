import React, { useState } from 'react';
import ExpensesApi from '../../Api/ExpensesApi';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import ReactDOM from "react-dom";
import Button from '@mui/material/Button'; // Import Button from MUI
import TextField from '@mui/material/TextField'; // Import TextField from MUI
import { Grid } from '@mui/material';

const ExpenseForm = ({ setExpenses }) => {
  const [expense, setExpense] = useState({
    title: '',
    cost: '',
    date: new Date(),
    id: '',
  });

  const handleChange = (name, value) => {
    if (name === 'date' && value instanceof Date && !isNaN(value)) {
      const newDate = new Date(value);
      setExpense({ ...expense, [name]: newDate });
    } else {
      setExpense({ ...expense, [name]: value });
    }
  };

  const handleSubmit = async () => {
    const newExpense = {
      title: expense.title,
      cost: expense.cost,
      date: expense.date,
      isReoccuring: 'false',
    };
    try {
      const response = await ExpensesApi('createExpense').post(newExpense);
      setExpenses(response);
    } catch (error) {
      console.error('Error fetching expenses:', error);
    }
    setExpense({
      title: '',
      cost: '',
      date: new Date(),
      id: '',
    });
  };

  const formItems = [
    {
      component: (
        <TextField
          margin="normal"
          required
          fullWidth
          name="title"
          type="text"
          inputProps={{
            style: {
              height: '24px',
              padding: 0
            }
          }}
        />
      )
    },
    {
      component: (
        <TextField
          margin="normal"
          padding="0"
          required
          fullWidth
          name="cost"
          type="text"
          inputProps={{
            style: {
              height: '24px',
              padding: 0
            }
          }}
        />
      )
    },
    {
      component: (
        <TextField
          margin="normal"
          required
          fullWidth
          name="date"
          type="date"
          inputProps={{
            style: {
              height: '24px',
              padding: 0
            }
          }}
        />
      )
    },

    {
      component: (
        <Button
          name="submit"
          fullWidth
          style={{ height: '24px', marginTop:'7px' }} // Use style prop for inline styles
          variant='contained'
        >
          submit
        </Button>
      )
    }
  ];
  return (
    <>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={2}
        direction="row"
      >
        
          {formItems.map((item, index) => (
            <Grid item xs={3}>
              {item.component}
            </Grid>
          ))}
      </Grid>
    </>
  );
}

export default ExpenseForm;

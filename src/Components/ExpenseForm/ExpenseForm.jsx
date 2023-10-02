import React, { useState } from 'react';
import { Grid } from '@mui/material';
import ExpensesApi from '../../Api/ExpensesApi';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

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
          margin='normal'
          required
          fullWidth
          name='title'
          type='text'
          value={expense.title}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          inputProps={{
            style: {
              padding: 0,
            },
          }}
        />
      ),
    },
    {
      component: (
        <TextField
          margin='normal'
          padding='0'
          required
          fullWidth
          name='cost'
          type='text'
          value={expense.cost}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          inputProps={{
            style: {
              padding: 0,
            },
          }}
        />
      ),
    },
    {
      component: (
        <TextField
          margin='normal'
          required
          fullWidth
          name='date'
          type='date'
          value={expense.date}
          onChange={(date) => handleChange('date', date)}
          inputProps={{
            style: {
              padding: 0,
            },
          }}
        />
      ),
    },
    {
      label: 'submit',
      component: (
        <Button
          margin='normal'
          type='submit'
          fullWidth
          variant='contained'
          onClick={handleSubmit}
          sx={{ padding:0 }}
        >
          Submit
        </Button>
      ),
    },
  ];

  return (
    <Grid container justifyContent='center' alignItems='center' spacing={2}>
      {formItems.map((item, index) => (
        <React.Fragment key={index}>
          <Grid item xs={3}>
            <p>{item.label}</p>
            {item.component}
          </Grid>
        </React.Fragment>
      ))}
    </Grid>
  );
};

export default ExpenseForm;

import React, { useState } from 'react';
import ExpensesApi from '../../Api/ExpensesApi';
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

  const handleSubmit = async (event) => {
    console.log('called');
    const data = new FormData(event.currentTarget);

    const newExpense = {
      title: data.get('title'),
      cost: data.get('cost'),
      date: data.get('date'),
      isReoccuring: 'false',
    };
    console.log(newExpense);
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
          inputProps={{
            style: {
              height: '24px',
              padding: 0,
              textAlign: 'center',
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
          inputProps={{
            style: {
              height: '24px',
              padding: 0,
              textAlign: 'center',
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
          inputProps={{
            style: {
              height: '24px',
              padding: 0,
              textAlign: 'center',
            },
          }}
        />
      ),
    },

    {
      component: (
        // <Button
        //   type='submit'
        //   fullWidth
        //   flex='1'
        //   style={{
        //     height: '24px',
        //     marginTop: '7px',
        //     flex: '1',
        //     minWidth: 'auto',
        //     maxWidth: '100%',
        //   }}
        //   variant='contained'
        // >
        <Button
          name='submit'
          fullWidth
          variant='contained'
          sx={{
            height: '24px',
            marginTop: '7px',
            minWidth: 'auto',
            maxWidth: '100%',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            // maxWidth: '100px',
          }}
        >
          submit
        </Button>
      ),
    },
  ];
  return (
    <>
      <Grid
        container
        justifyContent='center'
        alignItems='center'
        spacing={2}
        direction='row'
        component='form'
        onSubmit={handleSubmit}
      >
        {formItems.map((item, index) => (
          <Grid item xs={3} key={index}>
            {item.component}
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ExpenseForm;

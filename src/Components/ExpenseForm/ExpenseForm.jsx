import React from 'react';
import ExpensesApi from '../../Api/ExpensesApi';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';

const ExpenseForm = ({ setExpenses }) => {

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
  };

  const formItems = [
    {
      label: 'Title',
      component: (
        <>
          <label htmlFor='title'>Title</label>
          <TextField
            required
            fullWidth
            name='title'
            type='text'
            inputProps={{
              style: {
                height: '24px',
                padding: 0,
                textAlign: 'center',
                marginTop: 0,
              },
            }}
          />
        </>
      ),
    },
    {
      label: 'Cost',
      component: (
        <>
          <label htmlFor='cost'>Cost</label>
          <TextField
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
        </>
      ),
    },
    {
      label: 'Date',
      component: (
        <>
          <label htmlFor='date'>Date</label>
          <TextField
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
        </>
      ),
    },
    {
      label: '',
      component: (
        <>
          <label htmlFor='submit' style={{ display: 'none' }}>
            Submit
          </label>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{
              height: '24px',
              marginTop: '24px',
              minWidth: 'auto',
              maxWidth: '100%',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
            }}
          >
            Submit
          </Button>
        </>
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

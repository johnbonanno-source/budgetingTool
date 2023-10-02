import React from 'react';
import { Grid } from '@mui/material';
import { InputComponent, ButtonComponent } from '../../components';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const BalanceBox = ({ balance, setBalance }) => {
  const handleButtonClick = (event) => {
    const buttonName = event.target.name;
    const InputComponentField = document.getElementById(
      buttonName === 'deposit' ? 'incrementBalance' : 'decrementBalance'
    );
    const delta = parseInt(InputComponentField.value);
    if (typeof delta === 'number' && !isNaN(delta)) {
      setBalance(buttonName === 'deposit' ? balance + delta : balance - delta);
    }
  };


  const gridItems = [
    {
      label: 'Deposit',
      component: (
        <TextField
          margin='normal'
          required
          fullWidth
          id='incrementBalance'
          autoFocus
          inputProps={{
            style: {
              padding: 0
            }
         }}
        />
      ),
    },
    {
      label: 'Withdraw',
      component: (
        <TextField
          margin='normal'
          required
          fullWidth
          id='decrementBalance'
          autoFocus
          inputProps={{
            style: {
              padding: 0
            }
         }}
        />
      ),
    },
    {
      component: (
        <Button
              name='deposit'
              fullWidth
              variant="contained"
              onClick={handleButtonClick}
            >
              Deposit
            </Button>
        
      ),
    },
    {
      component: (
        <Button
              name='deposit'
              fullWidth
              variant="contained"
              onClick={handleButtonClick}
            >
              Withdraw
        </Button>
      ),
    },
  ];

  return (
    <>
      <h1> Balance: {balance} </h1>
      <Grid container justifyContent='center' spacing={2}>
        {gridItems.map((item, index) => (
          <Grid item xs={6} key={index}>
            <h6>{item.label}</h6>
            {item.component}
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default BalanceBox;

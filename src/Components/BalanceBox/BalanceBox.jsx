import React from 'react';
import { Grid } from '@mui/material';
import { InputComponent, ButtonComponent } from '../../components';

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
    { label: 'Deposit', component: <InputComponent id={'incrementBalance'} /> },
    {
      label: 'Withdraw',
      component: <InputComponent id={'decrementBalance'} />,
    },
    {
      component: (
        <ButtonComponent name='deposit' onClick={handleButtonClick}>
          Deposit
        </ButtonComponent>
      ),
    },
    {
      component: (
        <ButtonComponent name='withdraw' onClick={handleButtonClick}>
          Withdraw
        </ButtonComponent>
      ),
    },
  ];

  return (
    <>
      <h1>Balance: {balance} </h1>
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

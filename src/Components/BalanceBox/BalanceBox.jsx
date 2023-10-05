import React from 'react';
import { Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';

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
              padding: 0,
              textAlign: 'center',
            },
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
              padding: 0,
              textAlign: 'center',
            },
          }}
        />
      ),
    },
    {
      component: (
        <Button
          name='deposit'
          fullWidth
          variant='contained'
          onClick={handleButtonClick}
          sx={{
            flex: 1,
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            // maxWidth: '100px', 
          }}
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
          variant='contained'
          onClick={handleButtonClick}
          sx={{
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            // maxWidth: '100px',
          }}
        >
          Withdraw
        </Button>
      ),
    },
  ];

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            backgroundColor: `#FFFF`,
            // width: '60%',
          }}
        >
          <h1> Balance: {balance} </h1>
          <Grid
            container
            justifyContent='center'
            spacing={2}
            sx={{ maxWidth: '6' }}
          >
            {gridItems.map((item, index) => (
              <Grid item xs={5} key={index}>
                {item.component}
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </>
  );
};

export default BalanceBox;

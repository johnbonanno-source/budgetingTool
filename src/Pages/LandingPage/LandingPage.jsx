import { BsCreditCard2Back } from 'react-icons/bs';
import classes from './LandingPage.module.css';
import BoxComponent from '../../Components/BoxComponent/BoxComponent';
import { validateSessionToken } from '../../Api/SessionTokenApi';
import { Box } from '@mui/system';
import { useTheme } from '@emotion/react';
import { Typography } from '@mui/material';



const LandingPage = () => {
  const theme = useTheme();
  

  return (
    <>
      <BoxComponent minHeight='100vh'>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            flex: 0.4, 
            width: '100%',
            borderRadius: '14px',
            bgcolor: `${theme.palette.green.main}`,
          }}
        >
          <Typography
            variant='h3'
            component='div'
            sx={{
              display: 'flex',
              alignItems: 'center',
              flex: '0.6',
              gap: '10px',
              textAlign: 'center', 
            }}
          >
            BudgetHero <BsCreditCard2Back />
          </Typography>

          <h1 className={classes.logo}>Let's Get that budget, balanced.</h1>
        </Box>
      </BoxComponent>
    </>
  );
};

export default LandingPage;

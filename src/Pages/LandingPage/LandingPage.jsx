import BoxComponent from '../../Components/BoxComponent/BoxComponent';
import { Box } from '@mui/system';
import { useTheme } from '@emotion/react';
import budget from '../../Assets/bh.jpg';

const LandingPage = () => {
  const theme = useTheme();

  return (
    <>
      <BoxComponent minHeight='100vh'>
        {/* <Box
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
        </Box> */}
        <Box
          sx={{
            marginTop: '10rem',
            flexDirection: 'column',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 0.4,
            // width: '70%',
            maxHeight: '15rem',
            borderRadius: '14px',
            bgcolor: `${theme.palette.green.main}`,
          }}
        >
          <img
            src={budget}
            alt='Budget'
            style={{
              paddingTop: '3rem',
              paddingBottom: '3rem',

              maxWidth: '350px',
              maxHeight: '350px',
            }}
          />{' '}
        </Box>
      </BoxComponent>
    </>
  );
};

export default LandingPage;

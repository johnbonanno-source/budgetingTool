import BoxComponent from '../../Components/BoxComponent/BoxComponent';
import { Box } from '@mui/system';
import { useTheme } from '@emotion/react';
import budget from '../../Assets/bh.jpg';

const LandingPage = () => {
  const theme = useTheme();

  return (
    <>
      <BoxComponent minHeight='100vh'>

        <Box
          sx={{
            marginTop: '10rem',
            flexDirection: 'column',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 0.4,
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

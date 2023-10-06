import { Link } from 'react-router-dom';
import { BoxComponent } from '../../components';
import { Box } from '@mui/system';
import { useTheme } from '@emotion/react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  const theme = useTheme();

  // Assuming `error` is an object with a `message` property, you can access the message.
  const errorMessage = error?.message || 'An error occurred';

  return (
    <BoxComponent>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 0.6, // Fix the typo here (it should be 0.6, not .6)
          width: '100%',
          borderRadius: '14px',
          bgcolor: `${theme.palette.primary.main}`,
        }}
      >
        <h1>{errorMessage}</h1>
        <h2>
          This page was reached in error. Please make sure you are logged in or
          try again later.
        </h2>
        <Link to='/'>Home</Link>
      </Box>
    </BoxComponent>
  );
};

export default ErrorPage;

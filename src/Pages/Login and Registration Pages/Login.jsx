import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { BoxComponent } from '../../components';
import { addLoginHandler } from '../../Api/SessionTokenApi';

function Copyright(props) {
  return (
    <Typography
      variant='body1'
      color='text.secondary'
      align='center'
      {...props}
    >
      {'Copyright © '}
      <Link color='inherit' href='/'>
        BudgetHero
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Login = () => {
  const navigate = useNavigate();
  const tokenPrecheck = localStorage.getItem('accesstoken');
  useEffect(() => {
    if (tokenPrecheck) {
      navigate('/');
    }
  }, [navigate, tokenPrecheck]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const token = await addLoginHandler(
      data.get('username'),
      data.get('password')
    );
    console.log(data);
    if (token) {
      localStorage.setItem('accesstoken', token);
      navigate('/');
    }
  };

  return (
    <BoxComponent>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            bgcolor: 'white',
            padding: '25px',
            borderRadius: '4px',
          }}
        >
          <Box
            component='form'
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin='normal'
              required
              fullWidth
              id='username'
              label='Username: john'
              name='username'
              autoComplete='Username'
              autoFocus
            />
            <TextField
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password:  floyd'
              type='password'
              id='password'
              autoComplete='current-password'
            />
            <Link
              href='#'
              variant='body2'
              underline='none'
              sx={{ textAlign: 'left', display: 'block' }}
            >
              Forgot your password?
            </Link>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>

            <Link
              href='#'
              variant='body2'
              underline='none'
              sx={{ textAlign: 'left', display: 'block' }}
            >
              {"Don't have an account? Sign Up"}
            </Link>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </BoxComponent>
  );
};

export default Login;

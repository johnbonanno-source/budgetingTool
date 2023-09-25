import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { addLogoutHandler } from '../../Api/SessionTokenApi';
import { BsCreditCard2Back } from 'react-icons/bs';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  ButtonGroup,
} from '@mui/material';

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [forceRender, setForceRender] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('accesstoken');
    setIsLoggedIn(!!token);
  }, [forceRender, setIsLoggedIn]);

  useEffect(() => {
    setForceRender((prev) => !prev);
  }, [location]);

  const handleLogout = async () => {
    localStorage.removeItem('accesstoken');
    try {
      await addLogoutHandler();
      setForceRender((prev) => !prev);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <AppBar sx={{ paddingLeft: 0, paddingRight: 0 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography
          variant='h6'
          component='div'
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            flexGrow: 1,
            '@media screen and (max-width: 400px)': {
              display: 'none',
            },
          }}
        >
          BH <BsCreditCard2Back />
        </Typography>

        <ButtonGroup variant='contained' aria-label='navbar button group'>
          <Button href='./'>Home</Button>
          <Button href='./budget'>Budget</Button>
          <Button
            href={isLoggedIn ? '/' : '/login'}
            onClick={isLoggedIn ? () => handleLogout() : null}
          >
            {isLoggedIn ? 'Logout' : 'Login'}
          </Button>
        </ButtonGroup>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

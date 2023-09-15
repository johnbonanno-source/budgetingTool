import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import addLogoutHandler from '../../Api/LogoutApi';
import { BsCreditCard2Back } from 'react-icons/bs';

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  ButtonGroup,
  Box,
} from '@mui/material';

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [forceRender, setForceRender] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('accesstoken');
    setIsLoggedIn(!!token);
  }, [forceRender]);

  useEffect(() => {
    setForceRender((prev) => !prev);
  }, [location]);

  const handleLogout = async () => {
    localStorage.removeItem('accesstoken');
    await addLogoutHandler();
    setForceRender((prev) => !prev);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='fixed' style={{ top: 0, bottom: 'auto' }}>
        <Toolbar>

          <Typography
            variant='h6'
            component='div'
            style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
            sx={{ flexGrow: 1 }}
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
    </Box>
  );
};

export default NavBar;

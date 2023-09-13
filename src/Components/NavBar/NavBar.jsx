import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import addLogoutHandler from '../../Api/LogoutApi';
import { BsCreditCard2Back } from 'react-icons/bs';
import classes from './NavBar.module.css';
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
    <div className={classes.fullSize}>
        <AppBar position='static' sx={{
        top: 0,
        width: '100%',
      }}>
          <Toolbar>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              BH <BsCreditCard2Back className={classes.logo} />
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
    </div>
  );
};

export default NavBar;

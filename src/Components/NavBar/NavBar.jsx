import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import addLogoutHandler from '../../Api/LogoutApi';

import MenuIcon from '@mui/icons-material/Menu';
import { borders } from '@mui/system';
import { AppBar, Box, Toolbar, Typography, Button, ButtonGroup, IconButton } from '@mui/material';



import { BsCreditCard2Back } from 'react-icons/bs';
import classes from './NavBar.module.css';
const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [forceRender, setForceRender] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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
    setForceRender((prev) => !prev); //is this necessary?
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            BudgetHero <BsCreditCard2Back className={classes.logo} />
          </Typography>
          <ButtonGroup variant='contained' aria-label='navbar button group'>
            <Button href='./' sx={{ '&:hover': { border: '1px solid white' } }}>
              Home
            </Button>
            <Button href='./budget' sx={{ '&:hover': { border: 'none' } }}>
              Budget
            </Button>
            <Button
              href={isLoggedIn ? '/' : '/login'}
              onClick={isLoggedIn ? () => handleLogout() : null}
              sx={{ '&:hover': { border: 'none' } }}
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

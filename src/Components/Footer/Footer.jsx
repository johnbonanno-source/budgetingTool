import React, { useEffect, useRef } from 'react';
import { AppBar, Toolbar, ButtonGroup, Button, Box } from '@mui/material';

function Footer() {
  const appBarRef = useRef(null);

  useEffect(() => {
    const buttonsHeight = appBarRef.current.querySelector('.MuiButton-contained').clientHeight;
    appBarRef.current.style.minHeight = `${buttonsHeight}px`;
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{ top: "auto", bottom: 0 }} ref={appBarRef}>
        <Toolbar>
          <ButtonGroup
            variant="contained"
            aria-label="navbar button group"
            sx={{ justifyContent: "auto" }}
          >
            <Button
              href="./home"
              sx={{ "&:hover": { border: "1px solid white" } }}
            >
              Home
            </Button>
            <Button href="./budget" sx={{ "&:hover": { border: "none" } }}>
              Budget
            </Button>
            <Button
              href="./home"
              sx={{ "&:hover": { border: "1px solid white" } }}
            >
              Home
            </Button>
            <Button href="./budget" sx={{ "&:hover": { border: "none" } }}>
              Budget
            </Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Footer;

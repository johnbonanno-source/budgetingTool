import { AppBar, Toolbar, ButtonGroup, Button, Box } from '@mui/material';

function Footer() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position='fixed'
        style={{ top: 'auto', bottom: 0 }}
      >
        <Toolbar>
          <ButtonGroup
            variant='contained'
            aria-label='navbar button group'
            sx={{ justifyContent: 'auto' }}
          >
            <Button href='./home'>Home</Button>
            <Button href='./budget'>Budget</Button>
            <Button href='./home'>Home</Button>
            <Button href='./budget'>Budget</Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Footer;

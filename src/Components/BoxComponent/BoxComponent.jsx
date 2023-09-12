import React from 'react';
import { Box } from '@mui/material';

const BoxComponent = (props) => {
  return (
    <Box
      {...props}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        ...props.sx,
      }}
    >
      {props.children}
    </Box>
  );
};

export default BoxComponent;

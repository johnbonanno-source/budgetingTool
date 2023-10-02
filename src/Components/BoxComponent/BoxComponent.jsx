import React from 'react';
import { Box } from '@mui/material';

const BoxComponent = (props) => {
  return (
    <Box
      {...props}
      sx={{

        flexDirection: 'column',
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight:  '100vh',
        padding: props.padding,
        ...props.sx,
      }}
    >
      {props.children}
    </Box>
  );
};

export default BoxComponent;

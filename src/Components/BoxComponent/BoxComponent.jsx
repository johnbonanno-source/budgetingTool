import React from 'react';
import { Box } from '@mui/material';

const BoxComponent = (props) => {
  return (
    <Box
      {...props}
      sx={{
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: props.minHeight || '100vh',
        flex: 1,
        ...props.sx,
      }}
    >
      {props.children}
    </Box>
  );
};

export default BoxComponent;

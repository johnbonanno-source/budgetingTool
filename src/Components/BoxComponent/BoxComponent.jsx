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
        paddingTop: props.paddingTop,
        paddingBottom: props.paddingBottom,
        ...props.sx,
      }}
    >
      {props.children}
    </Box>
  );
};

export default BoxComponent;

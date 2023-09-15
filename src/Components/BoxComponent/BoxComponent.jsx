import React from 'react';
import { Box } from '@mui/material';

const BoxComponent = (props) => {
  return (
    <Box
      {...props}
      sx={{
        display: 'flex',
        // flexDirection: 'row',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        flex: 1,
        
        // marginTop: '0px',

        ...props.sx,
      }}
    >
      {props.children}
    </Box>
  );
};

export default BoxComponent;

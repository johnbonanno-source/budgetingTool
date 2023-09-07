import React from 'react';
import classes from './Box.module.css';
import { Box } from '@mui/material';

const BoxComponent = (props) => {
  return (
    <Box {...props} className={classes.box}>
      {props.children}
    </Box>
  );
};

export default BoxComponent;
import React from 'react';
import TextField from '@mui/material/TextField';

const InputComponent = (props) => {
  return (
    <TextField
      InputProps={{
        sx: {
          width: props.width || '100%',
          borderRadius: '4px',
          padding: 0,
        },
      }}
    />
  );
};

export default InputComponent;

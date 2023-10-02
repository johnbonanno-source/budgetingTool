import React from 'react';
import TextField from '@mui/material/TextField';

const InputComponent = (props) => {
  return (
    <TextField
      id={props.id}
      InputProps={{
        sx: {
          minWidth: '100%',
          borderRadius: '4px',
          padding: 0,
        },
      }}
    />
  );
};

export default InputComponent;

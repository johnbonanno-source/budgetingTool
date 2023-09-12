import React from 'react';
import Input from '@mui/material/Input';

const InputComponent = (props) => {
  const inputProps = { ...props, disableUnderline: true };
  return (
    <Input
      {...inputProps}
      sx={{
        bgcolor: 'white',
        borderRadius: '5px',
        '.input': {
          boxSizing: 'border-box',
          fontSize: '10px',
        },
      }}
    />
  );
};

export default InputComponent;

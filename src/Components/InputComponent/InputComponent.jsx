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
          width: '100%',
          flex: 1,
        },
      }}
    />
  );
};

export default InputComponent;

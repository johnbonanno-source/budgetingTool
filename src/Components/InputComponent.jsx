import React from "react";
import Input from "@mui/material/Input";

const InputComponent = (props) => {
  const inputProps = { ...props, disableUnderline: true };
  return <Input {...inputProps} />;
};

export default InputComponent;

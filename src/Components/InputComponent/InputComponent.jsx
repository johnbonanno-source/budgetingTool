import Input from "@mui/material/Input";
import classes from './InputComponent.module.css';
const InputComponent = (props) => {
  const inputProps = { ...props, disableUnderline: true };
  return <Input className={classes.input} {...inputProps} />;
};

export default InputComponent;

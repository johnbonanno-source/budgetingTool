import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

const ButtonComponent = (props) => {
  const theme = useTheme();
  const bgColor = props.bgColor || theme.palette.lightBlue.main;

  return (
    <Button
      type={props.type}
      onClick={props.onClick}
      onSubmit={props.onSubmit}
      name={props.name}
     
      sx={{
        padding: '4px',
        bgcolor: bgColor,
        color: 'black',
        width: props.width || 'auto',
        ':hover': {
          bgcolor: `${theme.palette.secondary.main}`,
          color: 'white',
        },
      }}
    >
      {props.children}
    </Button>
  );
};

export default ButtonComponent;

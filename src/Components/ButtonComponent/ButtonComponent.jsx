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
        bgcolor: bgColor,
        borderRadius: '4px',
        color: 'gray',
        width: props.width || '100%',
        padding: '16.5px',
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

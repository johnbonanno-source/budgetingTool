import Button from "@mui/material/Button";
const ButtonComponent = (props) => {
  const ButtonProps = { ...props };
  return (
    <Button
      type={props.type}
      onClick={props.onClick}
      color="secondary"
      sx={{
        bgcolor: "white",
        ":hover": {
          bgcolor: "#545775",
          color: "white",
        },
      }}
    >
      {props.children}
    </Button>
  );
};

export default ButtonComponent;

import classes from "./BalanceBox.module.css";
import { Button, Box } from "@mui/material/";
import { InputComponent } from "../../components";
import TextField from '@mui/material/TextField';


function BalanceBox({ balance, setBalance }) {
  
  const handleButtonClick = (event) => {
    const buttonName = event.target.name;
    const InputComponentField = document.getElementById(
      buttonName === "deposit" ? "incrementBalance" : "decrementBalance"
    );
    const delta = parseInt(InputComponentField.value);
    if (typeof delta === "number" && !isNaN(delta)) {
      setBalance(buttonName === "deposit" ? balance + delta : balance - delta);
    }
  };

  return (
    <>
      {/* <div className={classes.box}>
        <Box className={classes.BoxColor}>
          <InputComponent
            className={classes.balanceInputComponent}
            id={"incrementBalance"}
          />
          <Button name="deposit" onClick={handleButtonClick}>
            Deposit
          </Button> */}
          <InputComponent
            className={classes.balanceInputComponent}
           
            id={"decrementBalance"}
          />
          
          <Button></Button>
          {/* <Button name="withdraw" onClick={handleButtonClick}>
            Withdraw
          </Button>
        </Box>
      </div> */}
    </>
  );
}

export default BalanceBox;

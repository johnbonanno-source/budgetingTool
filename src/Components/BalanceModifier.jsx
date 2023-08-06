import classes from "./BalanceModifier.module.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useState } from "react";
import App from '../App.js';
import modifyLayout from "./BalanceModifier.module.css";

function BalanceModifier ({ balance, setBalance }){

  const handleAddButtonClick = () => {
    let inputfield = document.getElementById("incrementBalance");
    let delta = parseInt(inputfield.value);
    if(typeof delta === 'number' && !isNaN(delta)){
      setBalance(balance + parseInt(inputfield.value));
    }
  };

  const handleSubtractButtonClick = () => {
    let inputfield = document.getElementById("decrementBalance");
    setBalance(balance - parseInt(inputfield.value));

    // let delta = parseInt(inputfield.value);
    // if(typeof delta === 'number' && !isNaN(delta)){
    //   setBalance(balance + parseInt(inputfield.value));
    // }
  };

  return (
    <div className={classes.modifyLayout}>
      <input id={"incrementBalance"} className={classes.modifyinput}  />
      <input id={"decrementBalance"} className={classes.modifyinput} />

      <button className={classes.modifyButton} onClick={handleAddButtonClick}>Deposit</button>
      <button className={classes.modifyButton} onClick={handleSubtractButtonClick}>Withdraw</button>
    </div>
  );
};

export default BalanceModifier;

import classes from "./BalanceModifier.module.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useState } from "react";
import App from '../App.js';

const BalanceModifier = ({ balance, setBalance }) => {

  const handleAddButtonClick = () => {
    let inputfield = document.getElementById("incrementBalance");
    let delta = parseInt(inputfield.value);
    console.log("DELTA"+delta)
    if(typeof delta === 'number' && !isNaN(delta)){
      setBalance(balance + parseInt(inputfield.value));
    }
  };


  const handleSubtractButtonClick = () => {
    let inputfield = document.getElementById("decrementBalance");
    setBalance(balance - parseInt(inputfield.value));
  };

  return (
    <div className={classes.modifyLayout}>

    
      <input type="number" id={"incrementBalance"} className={classes.modify} />
      <input type="number" id={"decrementBalance"} className={classes.modify} />

      <button onClick={handleSubtractButtonClick}>Withdraw</button>
      <button onClick={handleAddButtonClick}>Deposit</button>
    </div>
  );
};

export default BalanceModifier;

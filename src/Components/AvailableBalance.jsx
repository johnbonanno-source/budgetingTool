import classes from './AvailableBalance.module.css';
import { useState } from 'react';
import BalanceModifier from './BalanceModifier.jsx'
import App from "../App.js";
function AvailableBalance({ balance,setBalance }) {

    return  (
        <>
            <header className={classes.balanceBox}>
                <h1 className={classes.balanceAmount}>
                    Current Balance: {balance}
                </h1>
            </header>
                <BalanceModifier balance={balance} setBalance={setBalance}/>
        </>
    )
}

export default AvailableBalance;


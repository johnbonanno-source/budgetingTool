import classes from './AvailableBalance.module.css';
import { useState,useEffect } from 'react';
import BalanceModifier from './BalanceModifier.jsx'
import App from "../App.js";
import axios from 'axios';

function AvailableBalance({ balance,setBalance }) {

    // useEffect(() => {
    //     axios.get('http://localhost:5134/Users').then(response => {
    //             // Handle the response data
    //             console.log('Response:', response.data);
    //     }).catch(error => {
    //             // Handle errors
    //             console.error('Error:', error);
    //     });
    // });
    
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


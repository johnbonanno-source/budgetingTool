import classes from './AvailableBalance.module.css';
import BalanceModifier from './BalanceModifier.jsx'

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


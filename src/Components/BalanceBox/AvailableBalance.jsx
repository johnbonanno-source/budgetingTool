import BalanceModifier from "./BalanceModifier.jsx";
import BalanceBox from "./BalanceBox.jsx";
function AvailableBalance({ balance, setBalance }) {
  return (
    <>
      <div>
        <BalanceBox balance={balance} />
        <BalanceModifier balance={balance} setBalance={setBalance} />
      </div>
    </>
  );
}

export default AvailableBalance;

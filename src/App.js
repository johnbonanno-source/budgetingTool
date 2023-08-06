
import './App.css';
import { useState } from 'react';
import MainHeader from './Components/MainHeader';
import MessageList from './Components/MessageList';
import PageFooter from './Components/PageFooter';
import AvailableBalance from './Components/AvailableBalance';
import BalanceModifier from './Components/BalanceModifier'

function App() {

  const [modalPosting, setModalPosting] = useState(false);
  const [balance, setBalance] = useState(10);
  console.log("APP.JS"+balance);
  function hideModalHandler(){
    setModalPosting(false)
  };
  function showModalHandler(){
    setModalPosting(true)
  };

  function hideProfileHandler(){
    setModalPosting(false)
  };
  
  return <>
    <MainHeader/>
    <AvailableBalance balance={balance} setBalance={setBalance}/>
    <main>
      <MessageList isPosting={modalPosting}  onStopPosting={hideModalHandler} />
    </main>
      <PageFooter/>
  </>
  
}

export default App;

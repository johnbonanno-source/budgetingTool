
import './App.css';
import { useState } from 'react';
import MainHeader from './Components/MainHeader';
import MessageList from './Components/MessageList';
import PageFooter from './Components/PageFooter';
import AvailableBalance from './Components/AvailableBalance';

function App() {

  const [modalPosting, setModalPosting] = useState(false);
  const [balance, setBalance] = useState(10);
  const [loggedIn, setLoggedIn] = useState(false);


  function hideModalHandler(){
    setModalPosting(false)
  };
  function showModalHandler(){
    setModalPosting(true)
  };

  function hideProfileHandler(){
    setModalPosting(false)
  };
  
  const divStyle = {
    visibility: loggedIn ? 'visible' : 'hidden',
  };

  const loggedoutStyle = {
    visibility: loggedIn ? 'hidden' : 'visible', 
  };

  return <>
    <MainHeader loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
   

    <div style={divStyle}>
      <AvailableBalance balance={balance} setBalance={setBalance}/>
      <MessageList isPosting={modalPosting}  onStopPosting={hideModalHandler} />
    </div>
    <PageFooter/>
  </>
  
}

export default App;

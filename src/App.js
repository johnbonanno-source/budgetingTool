
import './App.css';
import { useState } from 'react';
import MainHeader from './Components/MainHeader';
import MessageList from './Components/MessageList';
import PageFooter from './Components/PageFooter';

function App() {
  const [modalPosting, setModalPosting] = useState(false);
  
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
    <main>
      <MessageList isPosting={modalPosting}  onStopPosting={hideModalHandler} />
    </main>
      <PageFooter/>
  </>
  
}

export default App;

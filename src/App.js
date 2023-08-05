
import './App.css';
import { useState } from 'react';
import MainHeader from './Components/MainHeader';
import MessageList from './Components/MessageList';

function App() {
  const [modalPosting, setModalPosting] = useState(false);
  
  function hideModalHandler(){
    setModalPosting(false)
  };
  function showModalHandler(){
    setModalPosting(true)
  };

  function showProfileMdalHandler(){
    setProfileModalOpen(true)
  };
  function hideProfileHandler(){
    setModalPosting(false)
  };
  
  return <>
    <MainHeader onCreatePost={showModalHandler} OnOpenProfile={ShowProfileMdalHandler}/>
    <main>
      <MessageList isPosting={modalPosting}  onStopPosting={hideModalHandler} />
    </main>
  </>
  
}

export default App;

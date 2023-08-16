
import './App.css';
import { useState } from 'react';
import MainHeader from './Components/MainHeader';
import PageFooter from './Components/PageFooter';
import AvailableBalance from './Components/AvailableBalance';

function App() {
  const [setLoggedIn,loggedIn] = useState(false);
  const [balance, setBalance] = useState(10);
  const [setPassword, password] = useState("");
  const [setUsername, username] = useState("");

  const divStyle = {
    visibility: loggedIn ? 'visible' : 'hidden',
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap:"1rem"
  };

  const imgStyle = {
    maxWidth: "100%",
    marginBottom:"1rem",

  };

  const loggedoutStyle = {
    visibility: loggedIn ? 'hidden' : 'visible', 
  };

  const addLoginHandler = async(username)=>{
    const credentials = {
      username: username,
    };
    const response = await fetch('http://localhost:3000/login', {
      method: 'GET',
      body: JSON.stringify(credentials),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }



  return <>
    <MainHeader loggedIn={loggedIn} setUsername={setUsername} onLogin={addLoginHandler}/>
    <div style={divStyle}>
      <AvailableBalance balance={balance} setBalance={setBalance}/>
      <img
                src="https://gdm-catalog-fmapi-prod.imgix.net/ProductScreenshot/87539ba2-07d6-4642-9788-21a631b6f4c1.png"
                alt="W3Schools.com"
                style={imgStyle} // Adjust the image width as needed
            />
    </div>
    <PageFooter/>
  </>
  
}

export default App;

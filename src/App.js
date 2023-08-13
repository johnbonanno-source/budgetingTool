
import './App.css';
import { useState } from 'react';
import MainHeader from './Components/MainHeader';
import PageFooter from './Components/PageFooter';
import AvailableBalance from './Components/AvailableBalance';

function App() {

  const [balance, setBalance] = useState(10);
  const [loggedIn, setLoggedIn] = useState(false);


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

  return <>
    <MainHeader loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
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

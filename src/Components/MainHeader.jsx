import { MdPostAdd, MdMessage, MdAccountCircle } from 'react-icons/md';
import App from '../App';
import classes from './MainHeader.module.css';
import { BsFillEmojiSmileUpsideDownFill, BsCreditCard2Back } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import LoginButton from './LoginButton';
import Login from './LogIn'

function MainHeader({ loggedIn,setLoggedIn }) {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        BudgetHero <BsCreditCard2Back/>
      </h1>

     
        <div className={classes.navComponentBox}>

          <button className={classes.navButton}>Home</button>
          <button className={classes.navButton}>Budget</button>
          <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
         <button className={classes.navButton}><AiOutlineMenu className={classes.menuIcon}/></button>
        </div>
      
    </header>
  );
}

export default MainHeader;
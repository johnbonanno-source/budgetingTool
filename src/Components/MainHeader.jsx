import { MdPostAdd, MdMessage, MdAccountCircle } from 'react-icons/md';
import App from '../App';
import classes from './MainHeader.module.css';
import { BsFillEmojiSmileUpsideDownFill, BsCreditCard2Back } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import LoginButton from './LoginButton';

function MainHeader({ onCreatePost }) {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        BudgetHero <BsCreditCard2Back/>
      </h1>

      <p>
        <div className={classes.navComponentBox}>

          <button className={classes.viewProfile}>Home</button>
          <button className={classes.viewProfile}>Budget</button>
          {/* <LoginButton buttonText={"pp"}/> */}
         <button className={classes.viewProfile}><AiOutlineMenu className={classes.menuIcon}/></button>
        </div>
      </p>
    </header>
  );
}

export default MainHeader;
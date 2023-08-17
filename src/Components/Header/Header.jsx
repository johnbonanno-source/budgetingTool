import classes from "./Header.module.css";
import {BsFillEmojiSmileUpsideDownFill, BsCreditCard2Back} from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import Login from "../Login/Login";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        BudgetHero <BsCreditCard2Back />
      </h1>
      <div className={classes.navComponentBox}>
        <button className={classes.navButton}>Home</button>
        <button className={classes.navButton}>Budget</button>
        <Login isLoggedIn={props.isLoggedIn} setLoggedIn={props.setLoggedIn} onLogin={props.onLogin} />
        <button className={classes.navButton}>
          <AiOutlineMenu className={classes.menuIcon} />
        </button>
      </div>
    </header>
  );
}

export default Header;

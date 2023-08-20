import classes from "./Header.module.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  BsFillEmojiSmileUpsideDownFill,
  BsCreditCard2Back,
} from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import Login from "../Login/Login";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setLoggedIn] = useOutletContext();

  const handleLogout = () => {
    setLoggedIn(false);
  };

  const renderLoginButton = () => (
    <Link
      to="/login"
      onClick={isLoggedIn ? handleLogout() : () => navigate('/')}
      className={classes.navButton}
    >
      {isLoggedIn ? "Logout" : "Login"}
    </Link>
  );

  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        BudgetHero <BsCreditCard2Back />
      </h1>
      <div className={classes.navComponentBox}>
        <Link to="/" className={classes.navButton}>
          Home
        </Link>
        <Link to="/" className={classes.navButton}>
          Budget
        </Link>
        {renderLoginButton()}
        {/* <Link className={classes.navButton}>
          <AiOutlineMenu className={classes.menuIcon} />
        </Link> */}
        {/* maybe conditionally render this^ based on screen width */}
      </div>
    </header>
  );
};

export default Header;

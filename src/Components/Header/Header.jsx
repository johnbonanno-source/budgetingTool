import classes from "./Header.module.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { BsCreditCard2Back } from "react-icons/bs";

const Header = () => {
  const tokenPrecheck = localStorage.getItem("accesstoken");
  let isLoggedIn = tokenPrecheck != null;
  const currentUrl = window.location.href;
  const navigate = useNavigate();
  const renderLoginButton = () => {
    return (
      <Link
        to={isLoggedIn ? "/" : "/login"}
        onClick={isLoggedIn ? () => localStorage.removeItem("accesstoken") : null}
        className={classes.loginButton}
      >
        {isLoggedIn ? "Logout" : "Login"}
      </Link>
    );
  };

  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        BH <BsCreditCard2Back />
      </h1>
      <div className={classes.navComponentBox}>
        <Link to="/" className={classes.navButton}>
          Home
        </Link>
        <Link to="/" className={classes.navButton}>
          Budget
        </Link>
        {currentUrl != "http://localhost:3000/login" && renderLoginButton()}
      </div>
    </header>
  );
};

export default Header;

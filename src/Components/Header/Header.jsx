import classes from "./Header.module.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { BsCreditCard2Back } from "react-icons/bs";

const Header = ({ isLoggedIn, setLoggedIn,handleLogout }) => {
  const navigate = useNavigate();



  const currentUrl = window.location.href;
  console.log(currentUrl);
  console.log(isLoggedIn);
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

        <Link
          to={isLoggedIn ? '/': '/login'}
          onClick={isLoggedIn ? () => setLoggedIn(false) : ""}
          className={classes.loginButton}
          >
          {!isLoggedIn ? "Login" : "Logout"}
        </Link>
      </div>
    </header>
  );
};

export default Header;

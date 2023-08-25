import classes from "./Header.module.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { BsCreditCard2Back } from "react-icons/bs";

const Header = ({ isLoggedIn, setLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setLoggedIn(false);
  };

  const renderLoginButton = () => (
    <Link
      to="/login"
      onClick={!isLoggedIn ? navigate("/") : () => handleLogout()}
      className={classes.loginButton}
    >
      {!isLoggedIn ? "Login" : "Logout"}
    </Link>
  );

  const currentUrl = window.location.href;
  console.log(currentUrl);
  console.log(isLoggedIn);
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

        {currentUrl != "http://localhost:3000/login" && renderLoginButton()}
        {/* <Link className={classes.navButton}>
          <AiOutlineMenu className={classes.menuIcon} />
        </Link> */}
        {/* maybe conditionally render this^ based on screen width */}
      </div>
    </header>
  );
};

export default Header;

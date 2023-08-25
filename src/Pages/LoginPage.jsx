import Login from "../Components/Login/Login";
import classes from "./LoginPage.module.css";

const loginPage = () => {
  return (
    <div className={classes.loginBoxContainer}>
        <div className={classes.loginBoxStyles}>
      <Login />

        </div>
    </div>
  );
};

export default loginPage;

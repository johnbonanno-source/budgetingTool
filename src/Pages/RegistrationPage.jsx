import Login from "../Components/Login/Login";
import Register from "../Components/Login/RegisterPage";
import classes from "./LoginPage.module.css";

const registrationPage = () => {
  

  return (
    <>
      <div>
        <h1>Let's get that budget, balanced.</h1>
      </div>
      <div className={classes.loginBoxContainer}>
        <div className={classes.loginBoxStyles}>
          <Register/>
        </div>
      </div>
    </>
  );
};

export default registrationPage;

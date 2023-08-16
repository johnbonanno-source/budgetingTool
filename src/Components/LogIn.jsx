import React, { useState } from "react";
import LoginButton from "./LoginButton.jsx";
import classes from "./LoginButton.module.css";
// import inputStyle from './LogIn.module.css';
import axios from "axios";

// can we change logged in and hook to 'props'?
const Login = (props ) => {
  

  const handleLogout = () => {
    // setLoggedIn(false);
  }

  const handleLogin = event => {
    const passwordInput = document.getElementById("password");
    const usernameInput = document.getElementById("username");
    //setPassword(passwordInput);
    props.setUsername(usernameInput);
    if (passwordInput && usernameInput) {
      const passwordValue = passwordInput.value;
      const usernameValue = usernameInput.value;
      // setLoggedIn(true);
    }
  }

  return (
    <>
      <div>
        {!props.loggedIn ? (
          <>
          <form onSubmit={handleLogin}>
            <input
              className={classes.inputStyle}
              id={"username"}
              type="text"
              value={props.username}
              placeholder="Username"

            />

            <input
              className={classes.inputStyle}
              id={"password"}
              type="password"
              value={props.password}
              placeholder="Password"
            />
            <LoginButton
              className={classes.logOut}
              buttonText={"Login"}
            >
              Login
            </LoginButton>
          </form>
          </>
        ) : (
          <>
            <LoginButton
              className={classes.logOut}
              buttonText={"Logout"}
              onClick={handleLogout}
            >
              Logout
            </LoginButton>
          </>
        )}
      </div>
    </>
  );
}

export default Login;

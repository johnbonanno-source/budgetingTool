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
    console.log(e);
    const passwordInput = document.getElementById("password");
    const usernameInput = document.getElementById("username");
    //setPassword(passwordInput);
    setUsername(usernameInput);
    if (passwordInput && usernameInput) {
      const passwordValue = passwordInput.value;
      const usernameValue = usernameInput.value;
      // setLoggedIn(true);
    }
  }

  return (
    <>
      <div>
        {!loggedIn ? (
          <>
          <form onSubmit={handleLogin}>
            <input
              className={classes.inputStyle}
              id={"username"}
              type="text"
              value={username}
              placeholder="Username"

            />

            <input
              className={classes.inputStyle}
              id={"password"}
              type="password"
              value={password}
              placeholder="Password"
            />
            <LoginButton
              className={classes.logOut}
              buttonText={"Login"}
              onClick={handleLogin}

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

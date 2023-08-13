import React, { useState } from "react";
import LoginButton from "./LoginButton.jsx";
import classes from "./LoginButton.module.css";
// import inputStyle from './LogIn.module.css';
import axios from "axios";

function Login({ loggedIn, setLoggedIn }) {
  function handleLogout() {
    setLoggedIn(false);
  }

  function handleLogin() {
    const passwordInput = document.getElementById("password");
    const usernameInput = document.getElementById("username");

    if (passwordInput && usernameInput) {
      const passwordValue = passwordInput.value;
      const usernameValue = usernameInput.value;

      let url = `http://localhost:5134/Users/username/${usernameValue}`;
      axios
        .get(url)
        .then((response) => {
          if (
            response.data.username === usernameValue &&
            response.data.password === passwordValue
          ) {
            setLoggedIn(true);
          } else {
          }
        })
        .catch((error) => {
          const mockUserData = require("../Mocks/mockUserData.json"); // Load mock data from JSON file
          console.error("Backend not reachable:", error);
          const mockUser = mockUserData.find(
            (user) => user.username === usernameValue
          );
          if (mockUser && mockUser.password === passwordValue) {
            setLoggedIn(true);
          }
        });
    }
  }

  return (
    <>
      <div>
        {!loggedIn ? (
          <>
            <input
              className={classes.inputStyle}
              id={"username"}
              type="text"
              placeholder="Username"
            />

            <input
              className={classes.inputStyle}
              id={"password"}
              type="password"
              placeholder="Password"
            />
            <LoginButton
              className={classes.logOut}
              buttonText={"Login"}
              onClick={handleLogin}
            >
              Login
            </LoginButton>
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

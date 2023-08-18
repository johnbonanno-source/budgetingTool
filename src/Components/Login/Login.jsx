import React, { useState } from "react";
import classes from "./Login.module.css";
import addLoginHandler from "../../Api/LoginHandler.js";
import { Link } from "react-router-dom";

const Login = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleLoginAndLogout = async (event) => {
    event.preventDefault();
    const token = await addLoginHandler(
      credentials.username,
      credentials.password
    );
    if (token) {
      setLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  const renderLoginButton = () => (
    <Link
      className={classes.logOut}
      onClick={isLoggedIn ? handleLogout : handleLoginAndLogout}
    >
      {isLoggedIn ? "Logout" : "Login"}
    </Link>
  );

  return (
    <div>
      {isLoggedIn ? (
        <>{renderLoginButton()} </>
      ) : (
        <form onSubmit={handleLoginAndLogout}>
          <input
            className={classes.inputStyle}
            id="username"
            type="text"
            value={credentials.username}
            placeholder="Username"
            name="username"
            onChange={handleChange}
          />
          <input
            className={classes.inputStyle}
            id="password"
            type="password"
            value={credentials.password}
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
          {renderLoginButton()}
        </form>
      )}
    </div>
  );
};

export default Login;

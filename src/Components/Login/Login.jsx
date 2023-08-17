import React, { useState } from "react";
import classes from "./Login.module.css";
import addLoginHandler from "../../Api/LoginHandler.js";

const Login = ({ isLoggedIn, setLoggedIn }) => {
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
    const success = await addLoginHandler(
      credentials.username,
      credentials.password
    );
    if (success) {
      setLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  const renderLoginButton = () => (
    <button
      className={classes.logOut}
      onClick={isLoggedIn ? handleLogout : handleLoginAndLogout}
    >
      {isLoggedIn ? "Logout" : "Login"}
    </button>
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

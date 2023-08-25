import React, { useState } from "react";
import classes from "./Login.module.css";
import addLoginHandler from "../../Api/LoginHandler.js";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setLoggedIn] = useOutletContext();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleLogin = async (event) => {
    console.log("HandleLoginCalled");
    event.preventDefault();
    const token = await addLoginHandler(
      credentials.username,
      credentials.password
    );
    if (token) {
      setLoggedIn(true);
      navigate("/home");
    }
  };

  // const renderLoginButton = () => (
  //   <>
  //   <Link
  //     className={classes.logOut}
  //     onClick={isLoggedIn ? handleLogout : handleLoginAndLogout}
  //   >
  //     {isLoggedIn ? "Logout" : "Login"}
  //   </Link>
  //   </>
  // );

  return (
    <>
      <form onSubmit={handleLogin}>
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
        <Link type="submit" className={classes.logOut} onClick={handleLogin}>
          Login
        </Link>
      </form>
    </>
  );
};

export default Login;

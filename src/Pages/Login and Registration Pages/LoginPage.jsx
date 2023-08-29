import React, { useState, useEffect } from "react";
import classes from "./LoginPage.module.css";
import addLoginHandler from "../../Api/LoginApi";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LCC from "../../Assets/LCC.jpg";

import Wrapper from "../../Components/Wrapper/Wrapper";

const LoginPage = () => {
  const navigate = useNavigate();
  const tokenPrecheck = localStorage.getItem("accesstoken");

  useEffect(() => {
    if (tokenPrecheck) {
      console.log("already logged in!");
      navigate("/home");
    }
  }, []);

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    const token = await addLoginHandler(
      credentials.username,
      credentials.password
    );
    if (token) {
      localStorage.setItem("accesstoken", token);
      navigate("/home");
    }
  };

  return (
    <>
      <Wrapper>
        <img src={LCC} alt="pic" />
        <div className={classes.loginBoxStyles}>
          <h4>Login</h4>
          <form onSubmit={handleLogin}>
            <input
              className={classes.logininput}
              id="username"
              type="text"
              value={credentials.username}
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
            <input
              className={classes.logininput}
              id="password"
              type="password"
              value={credentials.password}
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            <button
              type="submit"
              className={classes.loginBtn}
              onClick={handleLogin}
            >
              Login
            </button>
          </form>
          <Link to="/register" className={classes.linkStyle}>
            Sign Up
          </Link>
        </div>
      </Wrapper>
    </>
  );
};

export default LoginPage;

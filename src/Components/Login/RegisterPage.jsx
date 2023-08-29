import React, { useState } from "react";
import classes from "./Login.module.css";
import { Link } from "react-router-dom";

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  return (
    <>
      <div>
        <h4>Register</h4>
        <form>
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
            onClick={console.log("click")}
          >
            Login
          </button>
          <Link to="/login">Login</Link>
        </form>
      </div>
    </>
  );
};

export default Register;

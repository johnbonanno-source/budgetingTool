import React, { useState } from "react";
import LoginButton from "./LoginButton.jsx";
import classes from "./LoginButton.module.css";
// import inputStyle from './LogIn.module.css';

// can we change logged in and hook to 'props'?
const Login = (props ) => {

  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const handleLogout = () => {
    props.setLoggedIn(false);
  }

  const handleLogin = async event => {
    event.preventDefault();
    const success = await props.onLogin(username,password)
    if(success){
      props.setLoggedIn(true);
    }
  };
  
    const passwordChangeHandler = event => {
      setPassword(event.target.value);
    };

    const usernameChangeHandler = event => {
      setUsername(event.target.value);
    };

  return (
    <>
      <div>
        {!props.isLoggedIn ? (
          <>
          <form onSubmit={handleLogin}>
            <input
              className={classes.inputStyle}
              id={"username"}
              type="text"
              value={username}
              placeholder="Username"
              onChange={usernameChangeHandler}
            />

            <input
              className={classes.inputStyle}
              id={"password"}
              type="password"
              value={password}
              placeholder="Password"
              onChange={passwordChangeHandler}
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

import React, { useState } from 'react';
import App from '../App.js'
import LoginButton from './LoginButton.jsx';
import classes from './LoginButton.module.css';
// import inputStyle from './LogIn.module.css';

function Login({loggedIn,setLoggedIn}) {

    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");


    function handleLogout() {
        setLoggedIn(false);
        console.log(loggedIn)
    };
    function handleLogin() {
        setLoggedIn(true);
        console.log(loggedIn)

    };

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
                <LoginButton className={classes.logOut} buttonText={"Login"} onClick={handleLogin}>Login</LoginButton>
            </>
            )
            :
            (
            <>
                <LoginButton className={classes.logOut} buttonText={"Logout"} onClick={handleLogout}>Logout</LoginButton>
            </>
            )
            
        }
        </div>
        </>
    );     
}

export default Login;
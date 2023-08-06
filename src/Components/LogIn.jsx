import React, { useState } from 'react';
import App from '../App.js'
import LoginButton from './LoginButton.jsx';

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
                id={"username"} 
                type="text" 
                placeholder="Username"
                />

                <input 
                id={"password"}  
                type="password" 
                placeholder="Password"/>

                <LoginButton buttonText={"Login"} onClick={handleLogin}>Login</LoginButton>
            </>
            
            )
            :
            (
            <>
                <LoginButton buttonText={"Logout"} onClick={handleLogout}>Logout</LoginButton>
            </>
            )
            
        }
        </div>
        </>
    );     
}

export default Login;
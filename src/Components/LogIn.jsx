import React, { useState } from 'react';
import App from '../App.js'
import LoginButton from './LoginButton.jsx';
import classes from './LoginButton.module.css';
// import inputStyle from './LogIn.module.css';
import axios from 'axios';

function Login({loggedIn,setLoggedIn}) {


    // const [password, setPassword] = useState("");
    // const [username, setUsername] = useState("");

    function handleLogout() {
        setLoggedIn(false);
    };
 
    function handleLogin(){

        const passwordInput = document.getElementById('password');
        const usernameInput = document.getElementById('username');
      
        if (passwordInput && usernameInput) {
          const passwordValue = passwordInput.value;
          const usernameValue = usernameInput.value;
      
            // setPassword(passwordValue);
            // setUsername(usernameValue);
            // console.log(usernameValue)

            let url = `http://localhost:5134/Users/username/${usernameValue}`;
                
            axios.get(url).then(response => {
                  
                    console.log(response.data.username === usernameValue);
                    console.log(response.data.password===passwordValue)
                    if (response.data.username === usernameValue && response.data.password===passwordValue)
                    {
                        setLoggedIn(true);
                    }
                    else{

                    }

            }).catch(error => {
                    console.error('Error:', error);
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
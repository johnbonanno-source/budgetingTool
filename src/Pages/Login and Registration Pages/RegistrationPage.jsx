import React, { useState } from 'react';
import classes from './LoginPage.module.css';
import { Link } from 'react-router-dom';
import LCC from '../../Assets/LCC.jpg';
import Wrapper from '../../Components/Wrapper/Wrapper';

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  return (
    <>
      <Wrapper>
        <img src={LCC} alt='pic' />
        <div className={classes.loginBoxStyles}>
          <h4 className={classes.white}>Register</h4>
          <form>
            <input
              className={classes.logininput}
              id='username'
              type='text'
              value={credentials.username}
              placeholder='Username'
              name='username'
              onChange={handleChange}
            />
            <input
              className={classes.logininput}
              id='password'
              type='password'
              value={credentials.password}
              placeholder='Password'
              name='password'
              onChange={handleChange}
            />
            <button type='submit' className={classes.loginBtn}>
              Login
            </button>
            <Link to='/login' className={classes.linkStyle}>
              Login
            </Link>
          </form>
        </div>
      </Wrapper>
    </>
  );
};

export default Register;

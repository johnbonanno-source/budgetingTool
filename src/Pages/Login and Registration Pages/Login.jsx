import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import addLoginHandler from '../../Api/LoginApi';
import {
  InputComponent,
  ButtonComponent,
  BoxComponent,
} from '../../components';
import './Login.css';

const schema = Yup.object().shape({
  username: Yup.string().required('Email is a required field'),
  password: Yup.string()
    .required('Password is a required field')
    .min(6, 'Password must be at least 6 characters'),
});

const Login = () => {
  const navigate = useNavigate();
  const tokenPrecheck = localStorage.getItem('accesstoken');
  useEffect(() => {
    if (tokenPrecheck) {
      console.log('already logged in');
      navigate('/home');
    }
  }, [navigate, tokenPrecheck]);

  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const credentialUpdate = (event) => {
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
      localStorage.setItem('accesstoken', token);
      navigate('/');
    }
  };

  return (
    <>
      <BoxComponent>
        <Formik
          validationSchema={schema}
          initialValues={{ username: '', password: '' }}
          onSubmit={(values) => {
            alert(JSON.stringify(values));
          }}
        >
          {({ values, errors, touched, handleChange, handleBlur }) => (
            <div className='login'>
              <div className='form'>
                <form noValidate onSubmit={handleLogin}>
                  <span>Login</span>
                  <InputComponent
                    type='username'
                    name='username'
                    onChange={(e) => {
                      handleChange(e);
                      credentialUpdate(e);
                    }}
                    onBlur={handleBlur}
                    value={values.username}
                    placeholder='Enter username'
                    id='username'
                  />
                  <p className='error'>
                    {errors.username && touched.username && errors.username}
                  </p>
                  <InputComponent
                    type='password'
                    name='password'
                    onChange={(e) => {
                      handleChange(e);
                      credentialUpdate(e);
                    }}
                    onBlur={handleBlur}
                    value={values.password}
                    placeholder='Enter password'
                    id='password'
                  />
                  <p className='error'>
                    {errors.password && touched.password && errors.password}
                  </p>
                  <ButtonComponent type='button' onClick={handleLogin}>
                    Login
                  </ButtonComponent>
                </form>
              </div>
            </div>
          )}
        </Formik>
      </BoxComponent>
    </>
  );
};

export default Login;

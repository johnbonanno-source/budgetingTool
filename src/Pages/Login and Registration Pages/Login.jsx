import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { addLoginHandler } from '../../Api/SessionTokenApi';
import { ButtonComponent, BoxComponent } from '../../components';
import './Login.css';
import { TextField } from '@mui/material';
import { Link } from 'react-router-dom';

const schema = Yup.object().shape({
  username: Yup.string().required('Username is a required field'),
  password: Yup.string()
    .required('Password is a required field')
    .min(6, 'Password must be at least 6 characters'),
});

const Login = () => {
  const navigate = useNavigate();
  const tokenPrecheck = localStorage.getItem('accesstoken');
  useEffect(() => {
    if (tokenPrecheck) {
      navigate('/home');
    }
  }, [navigate, tokenPrecheck]);

  const handleLogin = async (values) => {
    console.log('login called');
    const token = await addLoginHandler(values.username, values.password);
    console.log(token);
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
          onSubmit={handleLogin}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <div className='login'>
              <div className='form'>
                <form noValidate onSubmit={handleSubmit}>
                  <TextField
                    type='text'
                    name='username'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.username}
                    placeholder='Enter username'
                    id='username'
                    label='Username'
                    variant='outlined'
                    fullWidth
                    error={touched.username && !!errors.username}
                    helperText={touched.username && errors.username}
                    style={{ marginBottom: '16px' }}
                  />
                  <TextField
                    type='password'
                    name='password'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    placeholder='Enter password'
                    id='password'
                    label='Password'
                    variant='outlined'
                    fullWidth
                    error={touched.password && !!errors.password}
                    helperText={touched.password && errors.password}
                    style={{ marginBottom: '8px' }}

                  />

                  <p style={{ marginBottom: '8px' }}>
                    <Link to='/forgot-password'> Forgot your password? </Link>
                  </p>
                  <ButtonComponent  type='submit'>Login</ButtonComponent>
                  <p style={{ marginBottom: '8px' , marginTop: '8px' }}>
                    Don't have an account? 
                    <Link to='/forgot-password'> Register </Link>
                  </p>
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

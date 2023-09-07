import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import addLoginHandler from "../../Api/LoginApi";
import { Formik } from "formik";
import * as Yup from "yup";
import "./Login.css";
import { Button, Box } from "@mui/material/";
import { InputComponent } from "../../components";
import LCC from "../../Assets/LCC.jpg";

const schema = Yup.object().shape({
  username: Yup.string()
    .required("Email is a required field"),
  password: Yup.string()
    .required("Password is a required field")
    .min(6, "Password must be at least 6 characters"),
});

const Login = () => {
  const navigate = useNavigate();
  const tokenPrecheck = localStorage.getItem("accesstoken");
  useEffect(() => {
    if (tokenPrecheck) {
      console.log("already logged in");
      navigate("/home");
    }
  }, []);

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    console.log("called");
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
      console.log(token);
      localStorage.setItem("accesstoken", token);
      navigate("/");
    }
  };

  return (
    <>
      <img src={LCC} alt="pic" />
      <Box className="box">
        <Formik
          validationSchema={schema}
          initialValues={{ username: "", password: "" }}
          onSubmit={(values) => {
            alert(JSON.stringify(values));
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleLogin,
          }) => (
            <div className="login">
              <div className="form">
                <form noValidate onSubmit={handleLogin}>
                  <span>Login</span>
                  <InputComponent
                    type="username"
                    name="username"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.username}
                    placeholder="Enter username"
                    id="username"
                  />
                  <p className="error">
                    {errors.username && touched.username && errors.username}
                  </p>
                  <InputComponent
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    placeholder="Enter password"
                    id="password"
                  />
                  <p className="error">
                    {errors.password && touched.password && errors.password}
                  </p>
                  <Button
                    type="submit"
                    color="secondary"
                    onSubmit={handleLogin}
                    sx={{
                      ":hover": {
                        bgcolor: "#545775",
                        color: "white",
                      },
                    }}
                  >
                    Login
                  </Button>
                </form>
              </div>
            </div>
          )}
        </Formik>
      </Box>
    </>
  );
};

export default Login;

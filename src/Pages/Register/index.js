import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "@mui/material/Container";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Grid from "@mui/material/Grid";
import AuthContext from "../../Components/Context/AuthContext";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import validationSchema from "../../Utils/validations/login";
import validationRegister from "../../Utils/validations/register";

import "./style.css";

function Login() {
  const { isAuth, setIsAuth, login, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  
  const validationErrors = {};
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  // const handleSignup = (event) => {
  //   navigate("/register");
  // };

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await validationSchema.validate(
        { name, password },
        { abortEarly: false }
      );
      const response = await fetch(
        "https://my-json-server.typicode.com/urfavmai/mockread-api/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, password }),
        }
      );
      if (response.ok) {
        setOpen(true);
        login({ name, password }, { accessToken: name, refreshToken: name });
        setIsAuth(true);
        navigate("/");
      } else {
      }
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        error.inner.forEach((err) => {
          validationErrors[err.path] = err.message;
        });
      }
      setError(validationErrors);
    }
  };
  // function Register() {
  //   const navigate = useNavigate();

  //   const handleSignin = (event) => {
  //     navigate("/login");
  //   };
  const toggleForm = () => {
    setIsSignUp((prevState) => !prevState);
  };
  const handleAddUser = async (event) => {
    event.preventDefault();
    try {
      await validationRegister.validate({username, password,confirmPassword, mobile}, { abortEarly: false });

      const userData = {
        username,
        password,
        mobile,
      };
      const response = await fetch(
        "https://my-json-server.typicode.com/SajaRa20/newapi/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );
      if (response.ok) {
        const data = await response.json();
        clear();
        setOpen(true);
        handleClose();
        navigate("/login");
      } 
    }  catch (error) {
      if (error instanceof yup.ValidationError) {
        error.inner.forEach(err => {
          validationErrors[err.path] = err.message;
        });
      }
      setError(validationErrors);
      console.log(validationErrors);
    }
   }

  return (
    <Container maxWidth="lg" className="divregister">
      <Grid container justify="center" alignItems="center">
        <div className="section">
          <div className="container">
            <div className="row full-height justify-content-center">
              <div className="col-12 text-center align-self-center py-5">
                <div className="section pb-5 pt-5 pt-sm-2 text-center">
                  <h6>
                    <span onClick={toggleForm}>Log In</span>
                    <span onClick={toggleForm}>Sign Up</span>
                  </h6>
                  <input
                    className="checkbox"
                    type="checkbox"
                    id="reg-log"
                    name="reg-log"
                  />
                  <label htmlFor="reg-log"></label>
                  <div className="card-3d-wrap mx-auto">
                    <div className="card-3d-wrapper">
                      <div className="card-front">
                        <div className="center-wrap">
                          <div className="section text-center">
                            <h4 className="mb-4 pb-3">Log In</h4>
                            <div className="form-group">
                              <PersonIcon />
                              <input
                                type="text"
                                name="logname"
                                className="form-style"
                                placeholder="Your Full Name"
                                id="logname"
                                autoComplete="off"
                                onChange={handleName}
                                value={name}
                              />
                              {error && (
                                <p variant="p" className="error">
                                  {error.name}
                                </p>
                              )}
                            </div>
                            <div className="form-group mt-2">
                              <LockIcon />
                              <input
                                type="password"
                                name="logpass"
                                className="form-style"
                                placeholder="Your Password"
                                id="logpass"
                                autoComplete="off"
                                onChange={handlePassword}
                                value={password}
                              />
                                  {error && (
                                <p variant="p" className="error">
                                  {error.password}
                                </p>
                              )}
                            </div>
                            <Snackbar
                              open={open}
                              autoHideDuration={8000}
                              onClose={handleClose}
                            >
                              <Alert onClose={handleClose} severity="success">
                                Login Successfully!
                              </Alert>
                            </Snackbar>
                            <a
                              onClick={handleSubmit}
                              href="#"
                              className="btn mt-4"
                            >
                             Log In
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="card-back">
                        <div className="center-wrap">
                          <div className="section text-center">
                            <h4 className="mb-4 pb-3">Sign Up</h4>
                            <div className="form-group">
                              <PersonIcon />
                              <input
                                type="text"
                                name="logname"
                                className="form-style"
                                placeholder="Your Full Name"
                                value={username}
                                onChange={handleusername}
                                id="logname"
                                autoComplete="off"
                              />
                            </div>
                            <div className="form-group mt-2">
                              <EmailIcon />
                              <input
                                type="email"
                                name="logemail"
                                className="form-style"
                                placeholder="Your Mobile"
                                id="logemail"
                                autoComplete="off"
                                value={mobile}
                                onChange={handlemobile}
                              />
                            </div>
                            <div className="form-group mt-2">
                              <LockIcon />
                              <input
                                type="password"
                                name="logpass"
                                className="form-style"
                                placeholder="Your Password"
                                id="logpass"
                                autoComplete="off"
                                value={password}
                                onChange={handlepassword}
                              />
                            </div>
                            <a  onClick={handleSubmitR} href="#" className="btn mt-4">
                              Sign Up
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Grid>
    </Container>
  );
}

export default Login;

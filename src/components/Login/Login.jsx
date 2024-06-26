import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../store/authSlice";

import InputField from "../../components/UI/InputField";
import Button from "../../components/UI/Button";
import useFetchData from "../../hooks/useFetchData";
import { authLoginURL } from "../../api/api";

import classes from "./Login.module.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(authLoginURL, {
        username: "mor_2314",
        password: "83r5^_",
      });
      navigate("/products");
      dispatch(login());

      console.log("User authenticated successfully:", response.data);

      console.log("Login Successfully");
    } catch (error) {
      console.log("Faled to login", error);
    }
  };

  return (
    <main className={classes.auth}>
      <form onSubmit={loginHandler}>
        <div className={classes.control}>
          <InputField
            label="Email"
            type="email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <span>hint email: test@test.com</span>
        </div>
        <div className={classes.control}>
          <InputField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span>hint password: 1234</span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Button type="submit" label="Login" />
          <Link to="/new-user" className="link">
            New User
          </Link>
        </div>
      </form>
    </main>
  );
};

export default Login;

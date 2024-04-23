import React, { useState } from "react";
import classes from "./Login.module.css";
import InputField from "../../components/UI/InputField";
import Button from "../../components/UI/Button";
import useFetchData from "../../hooks/useFetchData";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const loginHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          username: "mor_2314",
          password: "83r5^_",
        }),
      });

      if (!response.ok) {
        throw new Error("Login Failed");
      }

      navigate("/products");
      console.log("Login Successfully", username, password);
    } catch (error) {
      console.log("Faled to login", error);
    }
  };

  return (
    <main className={classes.auth}>
      <form>
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
        <Button label="Login" onClick={loginHandler} />
      </form>
    </main>
  );
};

export default Login;

import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import InputField from "../../components/UI/InputField";
import Button from "../../components/UI/Button";
import useFetchData from "../../hooks/useFetchData";
import { authLoginURL } from "../../api/api";

import classes from "./Login.module.css";

const NewUser = () => {
  const navigate = useNavigate();

  /*   const loginHandler = async (event) => {
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
 */
  return (
    <main className={classes.auth}>
      <form>
        <div className={classes.control}>
          <InputField
            label="First Name"
            type="text"
            /*  value={username}
            onChange={(e) => setUsername(e.target.value)} */
          />
        </div>
        <div className={classes.control}>
          <InputField
            label="Last Name"
            type="text"
            /* value={password}
            onChange={(e) => setPassword(e.target.value)} */
          />
        </div>
        <div className={classes.control}>
          <InputField label="Email" type="email" />
        </div>
        <div className={classes.control}>
          <InputField label="Address" type="text" />
        </div>
        <div className={classes.control}>
          <InputField label="Phone" type="text" />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Button type="submit" label="Add User" />
          <Link to="/" className="link">
            Already User
          </Link>
        </div>
      </form>
    </main>
  );
};

export default NewUser;

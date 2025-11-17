import style from "../styles/loginStyle.module.css";
import Header from "../components/header";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { TextField } from "@mui/material";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  async function handelLogin(e) {
    e.preventDefault();
    const password = document.getElementById("loginPassword").value;
    const email = document.getElementById("loginEmail").value;
    let res = await axios.post("http://localhost/php/no-ai/login.php", {
      password: password,
      email: email,
    });
    if (res.data) {
      navigate("/");
      localStorage.setItem("loged", true);
      localStorage.setItem("user", res.data.user_name);
    } else {
      setError(true);
    }
  }

  return (
    <div>
      <Header />
      <div className={style.container}>
        {error && <p>No such email where find!</p>}
        <form onSubmit={handelLogin}>
          <h2>Welcome</h2>
          <TextField
            required
            id="loginEmail"
            label="Email "
            className={style.textfield}
          />
          <br />
          <br />
          <TextField
            required
            id="loginPassword"
            label="Password "
            className={style.textfield}
          />
          <br />
          <button>Login</button>
          <br />
          Don't have an account?{" "}
          <Link className={style.link} to="/register">
            Create one
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;

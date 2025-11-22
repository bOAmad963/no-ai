import Header from "../components/header";
import style from "../styles/loginStyle.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";

function Register() {
  const navigate = useNavigate();

  async function handelRegister(e) {
    e.preventDefault();
    let name = document.getElementById("registerName").value;
    let email = document.getElementById("registerEmail").value;
    let password = document.getElementById("registerPassword").value;
    let confirmedPassword = document.getElementById("confirmedPassword").value;
    if (password === confirmedPassword) {
      let res = await axios.post("https://no-ai.infinityfree.me/register.php", {
        name: name,
        email: email,
        password: password,
      });
      navigate("/login");
    } else {
      document.getElementById("confirmedPassword").value = "";
      document.getElementById("confirmedPassword").label =
        "Password not identical";
      console.log("not correct");
    }
  }

  return (
    <div>
      <Header />
      <div className={style.container}>
        <form onSubmit={handelRegister}>
          <h2>Create new account</h2>
          <TextField
            id="registerName"
            className={style.textfield}
            label="Name *"
          />
          <br />
          <br />
          <TextField
            id="registerEmail"
            className={style.textfield}
            label="Email *"
          />
          <br />
          <br />
          <TextField
            id="registerPassword"
            className={style.textfield}
            label="Password *"
          />
          <br />
          <br />
          <TextField
            id="confirmedPassword"
            className={style.textfield}
            label="Confirm password *"
          />
          <br />
          <button>Create account</button>
        </form>
      </div>
    </div>
  );
}

export default Register;

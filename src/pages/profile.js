import Header from "../components/header";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navegate = useNavigate();

  function handelLogeout() {
    localStorage.clear();
    navegate("/");
  }

  return (
    <div>
      <Header />
      <center>
        <h2>{localStorage.getItem("user")}</h2>
        <Button>History</Button> <br />
        <Button>Them</Button> <br />
        <Button onClick={handelLogeout}>Log out</Button>
      </center>
    </div>
  );
}

export default Profile;

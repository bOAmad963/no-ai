import style from "../styles/homeStyle.module.css";
import Header from "../components/header";
import GameCard from "../components/gameCard";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { CircularProgress, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Home() {
  const [games, setGames] = useState([]);
  const [loding, setLoding] = useState(false);
  const [search, setSearch] = useState("");
  const [error, setError] = useState();
  const navigate = useNavigate();

  function selectGame(img, name) {
    navigate("/gamedetails", {
      state: {
        img: img,
        name: name,
      },
    });
  }
  function handelSearchChange(e) {
    setSearch(e.target.value);
    fetchGames(e.target.value);
  }

  function nav(adrress) {
    setTimeout(() => navigate(adrress), 200);
  }

  useEffect(() => fetchGames, []);

  return (
    <>
      {localStorage?.getItem("loged") && (
        <div>
          <Header />
          <div className={style.searchSection}>
            <h2>Search For Game</h2>
            <input
              onChange={handelSearchChange}
              id="search"
              className={style.searchBar}
              type="text"
              placeholder="Search..."
            />
          </div>
        </div>
      )}
      {!localStorage?.getItem("loged") && (
        <div>
          <Header />
          <div className={style.top}>
            <br />
            <center>Charge any game with a singel button click!</center>
          </div>
          <br />
          <center>
            <Button
              onClick={() => nav("/login")}
              sx={{
                backgroundColor: "white",
                padding: "10px",
              }}
            >
              Login now
            </Button>
          </center>
        </div>
      )}
    </>
  );
}

export default Home;

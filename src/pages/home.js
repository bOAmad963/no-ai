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
  async function fetchGames(search = "") {
    try {
      setLoding(true);
      const res = await axios.get(
        `http://localhost/php/no-ai/index.php?search=${search}`
      );
      const data = res.data;
      setGames(data);
      setLoding(false);
    } catch (e) {
      setError(e.message);
      setLoding(false);
    }
  }
  function nav(adrress) {
    setTimeout(() => navigate(adrress), 200);
  }

  useEffect(() => fetchGames, []);

  return (
    <>
      {localStorage.getItem("loged") && (
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
          {loding ? (
            <div style={{ margin: 30 }}>
              <CircularProgress color="white" />
            </div>
          ) : error ? (
            <h2 style={{ margin: 30 }}>{error}</h2>
          ) : (
            <div>
              {games.map((game, i) => (
                <GameCard
                  handelSelect={() => selectGame(game.img, game.name)}
                  key={i}
                  gameName={game.name}
                  gameImg={game.img}
                />
              ))}
            </div>
          )}
        </div>
      )}
      {!localStorage.getItem("loged") && (
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

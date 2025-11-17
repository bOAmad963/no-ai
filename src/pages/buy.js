import Header from "../components/header";
import GameCard from "../components/gameCard";
import { useLocation } from "react-router-dom";

function Buy() {
  const location = useLocation();

  return (
    <div>
      <Header />
      <div>
        <center>
          <GameCard gameImg={location.state?.img} />
        </center>
        <p>-Game: {location.state.name}</p>
        <p>Amout: {location.state.amouot}</p>
        <p>Price(USD): {location.state.price}</p>
      </div>
    </div>
  );
}

export default Buy;

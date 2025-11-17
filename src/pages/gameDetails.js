import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/header";
import GameCard from "../components/gameCard";

function Gamedetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const pubg = [1, 2, 5, 10, 20];
  console.log(location.state);

  function navBuy() {
    navigate("/buy", {
      state: {
        amout: "",
        price: "",
      },
    });
  }

  return (
    <div>
      <Header />
      {pubg.map((element, index) => (
        <GameCard
          handelSelect={navBuy}
          gameImg={location.state?.img}
          key={index}
          price={`${element}$ Dimonds`}
        />
      ))}
    </div>
  );
}

export default Gamedetails;

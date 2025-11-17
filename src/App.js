import Home from "./pages/home";
import Gamedetails from "./pages/gameDetails";
import Login from "./pages/login";
import Register from "./pages/register";
import Contact from "./pages/contact";
import Profile from "./pages/profile";
import Buy from "./pages/buy";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/gamedetails" element={<Gamedetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/buy" element={<Buy />} />
      </Routes>
    </Router>
  );
}

export default App;

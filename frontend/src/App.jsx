import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import LoginSignUp from "./pages/LoginSignUp";
import Cart from "./pages/Cart";
import { useState } from "react";
import PlaceOrder from "./pages/PlaceOrder";
import Verify from "./pages/Verify";

function App() {
  const [togglepopup, setTogglePopup] = useState(false);
  return (
    <>
      {togglepopup ? <LoginSignUp setTogglePopup={setTogglePopup} /> : <></>}
      <Navbar setTogglePopup={setTogglePopup} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
        <Route path="/verify" element={<Verify />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

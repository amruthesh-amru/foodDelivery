import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import LoginSignUp from "./pages/LoginSignUp";
import Cart from "./pages/Cart";
import { useState } from "react";
import PlaceOrder from "./pages/PlaceOrder";

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
      </Routes>
      <Footer />
    </>
  );
}

export default App;

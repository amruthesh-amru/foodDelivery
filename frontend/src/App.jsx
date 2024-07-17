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
import MyOrders from "./pages/MyOrders";

function App() {
  const [togglepopup, setTogglePopup] = useState(false);
  return (
    <>
      {togglepopup ? <LoginSignUp setTogglePopup={setTogglePopup} /> : <></>}
      <Navbar setTogglePopup={setTogglePopup} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/cart"
          element={<Cart setTogglePopup={setTogglePopup} />}
        />
        <Route path="/order" element={<PlaceOrder />} />
        <Route path="/myorders" element={<MyOrders />} />
        <Route path="/verify" element={<Verify />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

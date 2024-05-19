import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import LoginSignUp from "./pages/LoginSignUp";
import { useState } from "react";

function App() {
  const [togglepopup, setTogglePopup] = useState(false);

  return (
    <>
      {togglepopup ? <LoginSignUp setTogglePopup={setTogglePopup} /> : <></>}
      <Navbar setTogglePopup={setTogglePopup} />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

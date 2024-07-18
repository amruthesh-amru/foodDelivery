import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Orders from "./pages/Orders";
import List from "./pages/List";
import Add from "./pages/Add";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  // const url = "http://localhost:4000";
  const url = "https://fooddelivery-backend-6gpa.onrender.com";
  return (
    <div>
      <div className=" max-h-screen w-full">
        <Navbar />
        <hr className="border-0 w-full h-[1px]  bg-[#a9a9a9]" />
        <div className=" flex w-[100%]">
          <div className="flex">
            <Sidebar />
          </div>
          <Routes>
            <Route path="/order" element={<Orders url={url} />} />
            <Route path="/list" element={<List url={url} />} />
            <Route path="/add" element={<Add url={url} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;

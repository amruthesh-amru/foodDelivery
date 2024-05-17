import React from "react";
import { assets } from "../assets/assets.js";
const Navbar = () => {
  return (
    <>
      <div className="w-full flex justify-center gap-[20rem] items-center pt-6">
        <div>
          <img src={assets.logo} alt="" />
        </div>
        <div>
          <ul className="flex justify-center items-center gap-5 ">
            <li>Home</li>
            <li>Menu</li>
            <li>Mobile-App</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="flex justify-center items-center gap-5 ">
          <img src={assets.search_icon} alt="" />
          <div className="relative ">
            <img src={assets.basket_icon} alt="" />
            <div className="dot min-h-[10px] min-w-[10px] absolute top-[-8px] right-[-8px] bg-[tomato] rounded-full"></div>
          </div>
          <button className="pt-2 pb-2 pl-4 pr-4 border-[1px] border-[grey] rounded-2xl hover:bg-[#ff4c24] hover:text-white transition-colors">
            sign in
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;

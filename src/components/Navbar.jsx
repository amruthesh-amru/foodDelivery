import React from "react";
import { assets } from "../assets/assets.js";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="w-full flex justify-evenly md:justify-center xl:gap-[20rem] lg:gap-[7rem] gap-[2rem] items-center pt-6 ">
        <div>
          <img src={assets.logo} alt="" className="md:w-full w-[8rem]" />
        </div>
        <div className="hidden  md:contents">
          <ul className="flex justify-center items-center md:gap-5  gap-2">
            <Link to="/">Home</Link>
            <a href="#menu">Menu</a>
            <a href="#footer">Contact Us</a>
          </ul>
        </div>
        <div className="flex justify-center items-center gap-5  ">
          <img
            src={assets.search_icon}
            alt=""
            className="text-[0.9rem] md:w-[30px] w-[20px]"
          />
          <div className="relative ">
            <img
              src={assets.basket_icon}
              alt=""
              className="text-[0.9rem] md:w-[30px] w-[20px]"
            />
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

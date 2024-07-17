import React, { useContext, useEffect } from "react";
import { assets } from "../assets/assets.js";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { StoreContext } from "./context/StoreContext.jsx";
const Navbar = ({ setTogglePopup }) => {
  const { getTotalCartItem, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };
  return (
    <>
      <div className="w-full flex justify-evenly md:justify-center xl:gap-[20rem] lg:gap-[7rem] gap-[2rem] items-center pt-6 pb-6 sticky top-0 z-20 bg-white ">
        <div>
          <img src={assets.logo} alt="" className="md:w-full w-[8rem]" />
        </div>
        <div className="hidden  md:contents">
          <ul className="flex justify-center items-center md:gap-5  gap-2">
            <NavLink to="/">Home</NavLink>
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
          <NavLink to="/cart">
            <div className="relative ">
              <img
                src={assets.basket_icon}
                alt=""
                className="text-[0.9rem] md:w-[30px] w-[20px]"
              />
              {getTotalCartItem() ? (
                <div className="dot min-h-[10px] min-w-[10px] absolute top-[-8px] right-[-8px] bg-[tomato] rounded-full"></div>
              ) : (
                <></>
              )}
            </div>
          </NavLink>
          {!token ? (
            <button
              className="pt-2 pb-2 pl-4 pr-4 border-[1px] border-[grey] rounded-2xl hover:bg-[#ff4c24] hover:text-white transition-colors"
              onClick={() => {
                setTogglePopup(true);
              }}
            >
              sign in
            </button>
          ) : (
            <div className="relative group">
              <img
                src={assets.profile_icon}
                alt=""
                className="md:w-[26px] w-[20px]"
              />
              <ul className="absolute hidden right-0 z-[1] group-hover:flex flex-col justify-center items-center p-2 pt-3 pb-3 w-[8rem] outline-[2px] outline-white bg-[#fff2ef] gap-[10px] rounded-[4px] border-[1px] border-[tomato] ">
                <NavLink to="/myorders">
                  <li className="flex items-center gap-[10px] cursor-pointer hover:text-[tomato]">
                    <img src={assets.bag_icon} alt="" className="w-[20px]" />
                    <p>Orders</p>
                  </li>
                </NavLink>
                <hr />
                <li
                  className="flex items-center gap-[10px] cursor-pointer hover:text-[tomato]"
                  onClick={logout}
                >
                  <img src={assets.logout_icon} alt="" className="w-[20px]" />
                  <p>Logout</p>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;

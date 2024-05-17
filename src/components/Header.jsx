import React from "react";
import { assets } from "../assets/assets";
const Header = () => {
  return (
    <>
      <div className="w-full flex items-center justify-center pt-12">
        <div className="w-[80%] relative ">
          <img src={assets.header_img} alt="" className="" />
          <div className="absolute top-[20%] right-[45%] w-[50%] text-white fadeInUp fadeInUp-animation">
            <h1 className="text-[3rem] text-bold ">
              Order Your <br /> Favorite Food Here
            </h1>
            <p className="text-justify mt-3 mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
              ducimus? Deleniti soluta aut sint laboriosam aliquid cumque ab
              necessitatibus eos. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Commodi qui impedit culpa minus quibusdam
              consectetur tenetur a possimus porro reprehenderit?
            </p>
            <button className="pl-4 pr-4 p-2 bg-white text-gray-500 rounded-3xl text-bold">
              View Menu
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

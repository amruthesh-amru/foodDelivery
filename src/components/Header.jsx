import React from "react";
import { assets } from "../assets/assets";
const Header = () => {
  return (
    <>
      <div className="w-full flex items-center justify-center pt-12">
        <div className="md:w-[80%] w-[90%] relative ">
          <img src={assets.header_img} alt="" className="" />
          <div className="absolute xl:top-[20%] xl:right-[45%] top-[10%] md:right-[45%] right-[25%] md:w-[50%] w-[70%]  text-white fadeInUp fadeInUp-animation">
            <h1 className="lg:text-[3rem] md:text-[2.4rem] text-[1.5rem] w-full mb-4 lg:mb-0  text-bold ">
              Order Your Favorite Food Here
            </h1>
            <p className="text-justify mt-3 mb-5 text-[0.8rem] xl:text[1rem] hidden lg:block">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
              ducimus? Deleniti soluta aut sint laboriosam aliquid cumque ab
              necessitatibus eos. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Commodi qui impedit culpa minus quibusdam
              consectetur tenetur a possimus porro reprehenderit?
            </p>
            <button className="md:pl-4 md:pr-4 md:p-2 p-1 text-[0.8rem] bg-white text-gray-500 rounded-3xl text-bold">
              View Menu
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

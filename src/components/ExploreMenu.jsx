import React from "react";
import { menu_list } from "../assets/assets";
const ExploreMenu = ({ category, setCategory }) => {
  return (
    <>
      <div className="w-[80%] mx-auto my-0 flex flex-col mt-8">
        <div className="flex flex-col gap-[20px]">
          <h1 className="text-[2rem] font-semibold">Explore Our Menu</h1>
          <p className="text-[1rem] w-[60%] ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit quod
            harum omnis voluptatem pariatur unde dolore ratione dignissimos!
            Illo, corrupti.
          </p>
          <div className="flex justify-between items-center gap-[30px] text-center overflow-x-scroll mt-[20px] mb-[20px] no-scrollbar">
            {menu_list.map((item, index) => {
              return (
                <div
                  key={index}
                  onClick={() =>
                    setCategory((prev) =>
                      prev === item.menu_name ? "All" : item.menu_name
                    )
                  }
                >
                  <img
                    src={item.menu_image}
                    alt=""
                    className={`${
                      category === item.menu_name ? "active" : ""
                    } w-[15rem] object-cover rounded-full`}
                  />
                  <p className="text-gray-500 mt-3">{item.menu_name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ExploreMenu;

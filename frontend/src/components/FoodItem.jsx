import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { StoreContext } from "./context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart, url } =
    useContext(StoreContext);
  return (
    <>
      <div className="w-full m-auto rounded-[15px] shadow-lg  fadeInUp-animation">
        <div className="w-full rounded-[15px] relative">
          <img
            src={url + "/images/" + image}
            alt=""
            className="rounded-t-[15px]"
          />
          {!cartItems[id] ? (
            <img
              className="w-[35px] absolute bottom-[15px] right-[15px] cursor-pointer rounded-[50%]"
              src={assets.add_icon_white}
              alt=""
              onClick={() => addToCart(id)}
            />
          ) : (
            <div className="absolute bottom-[15px] right-[15px] flex items-center gap-[10px] rounded-[50px] bg-white p-1">
              <img
                src={assets.remove_icon_red}
                alt=""
                onClick={() => removeFromCart(id)}
                className="w-[30px] cursor-pointer"
              />
              <p>{cartItems[id]}</p>
              <img
                src={assets.add_icon_green}
                alt=""
                onClick={() => addToCart(id)}
                className="w-[30px] cursor-pointer"
              />
            </div>
          )}
        </div>
        <div className=" p-[20px]">
          <div className="flex items-center justify-between mb-[10px]">
            <p className="text-[20px] font-[500]">{name}</p>
            <img src={assets.rating_starts} alt="" className="w-[70px]" />
          </div>

          <p className="text-[12px] text-[#676767]">{description}</p>
          <p className="text-[tomato] text-[22px] font-[500] m-[10px]">
            ${price}
          </p>
        </div>
      </div>
    </>
  );
};

export default FoodItem;

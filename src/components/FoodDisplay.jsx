import React, { useContext } from "react";
import { StoreContext } from "./context/StoreContext";
import FoodItem from "./FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <>
      <div className="w-[80%] mx-auto my-0 ">
        <h2 className="text-[24px] font-[600]">Top dishes near you</h2>

        <div className="mt-6 customGrid">
          {food_list.map((item, index) => {
            if (category === "All" || category === item.category) {
              return (
                <FoodItem
                  key={index}
                  id={item._id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                />
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default FoodDisplay;

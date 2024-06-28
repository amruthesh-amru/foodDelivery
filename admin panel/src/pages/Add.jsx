import React from "react";
import { assets } from "../assets/assets";

const Add = () => {
  return (
    <>
      <div className="pt-[4rem] p-[6rem] w-[100%]">
        <div>
          <h2>Upload Image</h2>
          <img src={assets.upload_area} alt="" />
        </div>
        <div>
          <h2>Product Name</h2>
          <input type="text" />
        </div>
        <div>
          <h2>Product Description</h2>
          <textarea
            name=""
            placeholder="Write content here"
            id=""
            rows={8}
            cols={50}
            className=""
          ></textarea>
        </div>
        <div>
          <div>
            <h2>Product Category</h2>
            <select name="Category" id="">
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Desert">Desert</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div>
            <h2>Product price</h2>
            <input type="number" name="" id="" />
          </div>
        </div>
        <button>Add</button>
      </div>
    </>
  );
};

export default Add;

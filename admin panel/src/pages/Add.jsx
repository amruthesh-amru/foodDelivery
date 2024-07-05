import React, { useEffect, useRef, useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";
const Add = () => {
  const [image, setImage] = useState("");
  const [foodDetails, setFoodDetails] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });

  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log("Selected file:", file);
    if (file) {
      setImage(file);
    }
  };
  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFoodDetails((foodDetails) => ({ ...foodDetails, [name]: value }));
  };
  const handleImageClick = () => {
    fileInputRef.current.click();
  };
  const OnSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", foodDetails.name);
    formData.append("description", foodDetails.description);
    formData.append("price", foodDetails.price);
    formData.append("category", foodDetails.category);
    formData.append("image", image);

    const response = await axios.post(
      "http://localhost:4000/api/food/add",
      formData
    );
    if (response.data.success) {
      setFoodDetails({
        name: "",
        description: "",
        price: "",
        category: "Salad",
      });
      setImage(false);
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
    console.log(response);
  };
  // useEffect(() => {
  //   console.log(foodDetails);
  // }, [foodDetails]);
  return (
    <>
      <div className="pt-[2rem] pl-[6rem]  flex flex-col gap-4 items-start w-[40%]">
        <form name="upload" className="flex flex-col gap-[1rem]">
          <div className="flex flex-col gap-2">
            <h2>Upload Image</h2>
            <label htmlFor="image">
              <img
                src={image ? URL.createObjectURL(image) : assets.upload_area}
                alt="Upload Area"
                onClick={handleImageClick}
                className="w-[9rem] h-[6rem] object-cover"
              />
            </label>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              hidden
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <h2>Product Name</h2>
            <input
              className="border-[1px] border-gray-400 rounded-sm p-1 bg-white w-full"
              type="text"
              name="name"
              value={foodDetails.name}
              placeholder="Type here"
              onChange={(e) => onChangeHandler(e)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <h2>Product Description</h2>
            <textarea
              name="description"
              placeholder="Write content here"
              id=""
              rows={6}
              cols={50}
              className="border-[1px] border-gray-400 rounded-sm p-2 bg-white"
              value={foodDetails.description}
              onChange={(e) => onChangeHandler(e)}
            ></textarea>
          </div>
          <div className="flex justify-between   gap-6 ">
            <div className="flex flex-col gap-2 justify-between w-full">
              <h2>Product Category</h2>
              <select
                name="category"
                id=""
                className="border-[1px] border-gray-400 rounded-sm p-1 bg-white w-[8rem]"
                value={foodDetails.category}
                onChange={(e) => onChangeHandler(e)}
              >
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
            <div className="flex flex-col  justify-between w-full gap-2">
              <h2>Product price</h2>
              <input
                className="border-[1px] border-gray-400 rounded-sm p-1 bg-white w-[8rem]"
                type="number"
                name="price"
                value={foodDetails.price}
                placeholder="$20"
                onChange={(e) => onChangeHandler(e)}
              />
            </div>
          </div>
          <button
            className="p-2 bg-black text-white text-center w-[7rem]  "
            type="submit"
            onClick={OnSubmitHandler}
          >
            Add
          </button>
        </form>
      </div>
    </>
  );
};

export default Add;

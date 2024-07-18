import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";

const List = ({ url }) => {
  const [image, setImage] = useState("");
  const [foodList, setFoodList] = useState([]);
  const [editMenu, setEditMenu] = useState(false);
  const [foodToEdit, setFoodToEdit] = useState();
  const [foodDetails, setFoodDetails] = useState({
    id: "",
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });
  const getFoodItems = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    if (response.data.success) {
      setFoodList(response.data.data);
    } else {
      toast.error(response.data.message);
    }
  };

  useEffect(() => {
    getFoodItems();
  }, []);
  const openMenu = (food) => {
    setEditMenu(!editMenu);
    setFoodToEdit(food);
  };
  const handleEdit = async (e) => {
    // setIsSubmit(true);
    e.preventDefault();
    const formData = new FormData();
    formData.append("id", foodToEdit._id);
    formData.append("name", foodDetails.name);
    formData.append("description", foodDetails.description);
    formData.append("price", foodDetails.price);
    formData.append("category", foodDetails.category);
    formData.append("image", image);

    const response = await axios.post(`${url}/api/food/edit`, formData);
    if (response.data.success) {
      setEditMenu(!editMenu);
      getFoodItems();
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  };

  const handleDelete = async (id) => {
    const response = await axios.post(`${url}/api/food/remove`, { id: id });
    if (response.data.success) {
      toast.success(response.data.message);
      await getFoodItems();
    } else {
      toast.error(response.data.message);
    }
  };

  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(null);
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
  return (
    <>
      <div className="w-full">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead className="bg-gray-200 border-b">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Image
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Category
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Price
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {foodList.map((food, index) => (
                      <tr
                        key={index}
                        className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          <img
                            src={`${url}/images/` + food.image}
                            alt=""
                            className="w-[60px] h-[50px] object-cover"
                          />
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {food.name}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {food.category}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          ${food.price}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <div className="inline-flex items-center rounded-md shadow-sm">
                            <button
                              className="text-slate-800 hover:text-[tomato] text-sm bg-white hover:bg-slate-100 border border-slate-200 rounded-l-lg font-medium px-2 py-1 inline-flex space-x-1 items-center"
                              onClick={() => openMenu(food)}
                            >
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  className="w-6 h-6"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                  />
                                </svg>
                              </span>
                              <span className="hidden md:inline-block">
                                Edit
                              </span>
                            </button>
                            <button
                              className="text-slate-800 hover:text-[tomato] text-sm bg-white hover:bg-slate-100 border border-slate-200 rounded-r-lg font-medium px-2 py-1 inline-flex space-x-1 items-center"
                              onClick={() => handleDelete(food._id)}
                            >
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  className="w-6 h-6"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                  />
                                </svg>
                              </span>
                              <span className="hidden md:inline-block">
                                Delete
                              </span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {editMenu && (
        <div className="absolute flex justify-center bg-opacity-25 z-10 w-full p-4 ">
          <div className="flex flex-col gap-4 items-start ">
            <form
              name="upload"
              className="flex flex-col justify-center gap-[1rem] p-4"
            >
              <div className="flex justify-between">
                <div className="flex flex-col gap-2">
                  <h2>Upload Image</h2>
                  <label htmlFor="image">
                    <img
                      src={
                        // image ? URL.createObjectURL(image) : assets.upload_area
                        image
                          ? URL.createObjectURL(image)
                          : `${URL}/images/` + foodToEdit.image
                      }
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
                <div
                  className="text-[1.3rem] cursor-pointer"
                  onClick={() => setEditMenu(!editMenu)}
                >
                  <i className="fa-solid fa-xmark"></i>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h2>Product Name</h2>
                <input
                  className="border-[1px] border-gray-400 rounded-sm p-1 bg-white w-full"
                  type="text"
                  name="name"
                  placeholder="Type product name"
                  defaultValue={foodToEdit.name}
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
                  defaultValue={foodToEdit.description}
                  onChange={(e) => onChangeHandler(e)}
                ></textarea>
              </div>
              <div className="flex justify-between gap-6">
                <div className="flex flex-col gap-2 justify-between w-full">
                  <h2>Product Category</h2>
                  <select
                    name="category"
                    id=""
                    className="border-[1px] border-gray-400 rounded-sm p-1 bg-white w-[8rem]"
                    defaultValue={foodToEdit.category}
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
                <div className="flex flex-col justify-between w-full gap-2">
                  <h2>Product Price</h2>
                  <input
                    className="border-[1px] border-gray-400 rounded-sm p-1 bg-white w-[8rem]"
                    type="number"
                    name="price"
                    defaultValue={foodToEdit.price}
                    placeholder="$20"
                    onChange={(e) => onChangeHandler(e)}
                  />
                </div>
              </div>
              <button
                className="p-2 bg-black text-white text-center w-[10rem]"
                type="submit"
                onClick={handleEdit}
              >
                Submit Change
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default List;

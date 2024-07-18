import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../components/context/StoreContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const PlaceOrder = () => {
  const {
    food_list,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartItem,
    token,
    url,
  } = useContext(StoreContext);
  const navigate = useNavigate();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const placeOrder = async (e) => {
    e.preventDefault();
    let orderItems = [];
    food_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });
    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartItem() + 2,
    };
    let response = await axios.post(url + "/api/order/place", orderData, {
      headers: { token },
    });
    if (response.data.success) {
      const { session_url } = response.data;
      window.location.replace(session_url);
    } else {
      alert("error");
    }
  };

  return (
    <form onSubmit={placeOrder}>
      <div className="md:w-[80%] w-full mx-auto flex-col md:flex-row gap-[2rem] justify-between my-0 flex  p-[1rem] sm:p-[3rem]">
        <div className="w-full">
          <h1 className="text-[1.6rem] font-semibold  mb-[2rem]">
            Delivery Information
          </h1>
          <div className="flex flex-col gap-4 w-[100%]">
            <div className="flex items-center  flex-col md:flex-row justify-between gap-2">
              <input
                className="outline-none border-[1px] p-[5px] border-gray-300 rounded-sm w-full"
                type="text"
                placeholder="First Name"
                name="firstName"
                onChange={onChangeHandler}
                value={data.firstName}
                required
              />
              <input
                required
                className="outline-none border-[1px] p-[5px] border-gray-300 rounded-sm w-full"
                type="text"
                placeholder="last Name"
                name="lastName"
                onChange={onChangeHandler}
                value={data.lastName}
              />
            </div>
            <div className="">
              <input
                required
                className="outline-none border-[1px] p-[5px] border-gray-300 rounded-sm w-full"
                type="email"
                placeholder="Email address"
                name="email"
                onChange={onChangeHandler}
                value={data.email}
              />
            </div>
            <div>
              <input
                required
                className="outline-none border-[1px] p-[5px] border-gray-300 rounded-sm w-full"
                type="text"
                placeholder="Street"
                name="street"
                onChange={onChangeHandler}
                value={data.street}
              />
            </div>
            <div className="flex  flex-col md:flex-row items-center justify-between gap-2">
              <input
                required
                className="outline-none border-[1px] p-[5px] border-gray-300 rounded-sm w-full"
                type="text"
                placeholder="City"
                name="city"
                onChange={onChangeHandler}
                value={data.city}
              />
              <input
                required
                className="outline-none border-[1px] p-[5px] border-gray-300 rounded-sm w-full"
                type="text"
                placeholder="State"
                name="state"
                onChange={onChangeHandler}
                value={data.state}
              />
            </div>
            <div className="flex flex-col md:flex-row  items-center justify-between gap-2">
              <input
                required
                className="outline-none border-[1px] p-[5px] border-gray-300 rounded-sm w-full "
                type="number"
                placeholder="Zip code"
                name="zipcode"
                onChange={onChangeHandler}
                value={data.zipcode}
              />
              <input
                required
                className="outline-none border-[1px] p-[5px] border-gray-300 rounded-sm w-full"
                type="text"
                placeholder="Country"
                name="country"
                onChange={onChangeHandler}
                value={data.country}
              />
            </div>
            <div>
              <input
                required
                className="outline-none border-[1px] p-[5px] border-gray-300 rounded-sm w-full"
                type="number"
                placeholder="Phone"
                name="phone"
                onChange={onChangeHandler}
                value={data.phone}
              />
            </div>
          </div>
        </div>
        <div className="sm:w-[60%] w-full">
          <h1 className="text-[1.5rem] font-semibold mb-2">Cart Totals</h1>
          <div className="flex p-2 justify-between">
            <h2>Subtotal</h2>
            <h2> ${getTotalCartItem()}</h2>
          </div>
          <hr />
          <div className="flex p-2 justify-between">
            <h2>Delivery Fee</h2>
            <h2> $2</h2>
          </div>
          <div>
            <hr />
            <div className="flex p-2 justify-between font-semibold">
              <h2>Total</h2>
              <h2> ${2 + getTotalCartItem()}</h2>
            </div>
            <button
              onClick={() => navigate("/order")}
              className="bg-[tomato] p-2 text-white rounded-md mt-2 outline-none flex items-center justify-center"
              type="submit"
            >
              Proceed To payment
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;

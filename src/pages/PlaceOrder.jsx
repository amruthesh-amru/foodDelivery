import { useContext } from "react";
import { StoreContext } from "../components/context/StoreContext";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const { food_list, cartItems, addToCart, removeFromCart, getTotalCartItem } =
    useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div>
      <div className="w-[80%] mx-auto justify-between my-0 flex p-[3rem]">
        <form action="#" className="">
          <h1 className="text-[1.6rem] font-semibold  mb-[2rem]">
            Delivery Information
          </h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between gap-2">
              <input
                className="outline-none border-[1px] p-[5px] border-gray-300 rounded-sm"
                type="text"
                placeholder="First Name"
              />
              <input
                className="outline-none border-[1px] p-[5px] border-gray-300 rounded-sm"
                type="text"
                placeholder="last Name"
              />
            </div>
            <div className="">
              <input
                className="outline-none border-[1px] p-[5px] border-gray-300 rounded-sm w-full"
                type="email"
                placeholder="Email address"
              />
            </div>
            <div>
              <input
                className="outline-none border-[1px] p-[5px] border-gray-300 rounded-sm w-full"
                type="text"
                placeholder="Street"
              />
            </div>
            <div className="flex items-center justify-between gap-2">
              <input
                className="outline-none border-[1px] p-[5px] border-gray-300 rounded-sm"
                type="text"
                placeholder="City"
              />
              <input
                className="outline-none border-[1px] p-[5px] border-gray-300 rounded-sm"
                type="text"
                placeholder="State"
              />
            </div>
            <div className="flex items-center justify-between gap-2">
              <input
                className="outline-none border-[1px] p-[5px] border-gray-300 rounded-sm "
                type="number"
                placeholder="Zip code"
              />
              <input
                className="outline-none border-[1px] p-[5px] border-gray-300 rounded-sm"
                type="text"
                placeholder="Country"
              />
            </div>
            <div>
              <input
                className="outline-none border-[1px] p-[5px] border-gray-300 rounded-sm w-full"
                type="number"
                placeholder="Phone"
              />
            </div>
          </div>
        </form>
        <div className="w-[50%] ">
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
            >
              Proceed To payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;

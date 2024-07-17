import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../components/context/StoreContext";
import { assets } from "../assets/assets";

const MyOrders = () => {
  const [data, setData] = useState([]);
  const { url, token } = useContext(StoreContext);
  const fetchMyOrders = async () => {
    const response = await axios.post(
      url + "/api/order/userorder",
      {},
      { headers: { token } }
    );
    setData(response.data.orders);
    console.log(response.data.orders);
  };
  useEffect(() => {
    if (token) {
      fetchMyOrders();
    }
  }, [token]);
  return (
    <>
      <div className="md:w-[70%] h-full mx-auto my-0 p-4 flex flex-col gap-4 mt-[4rem]">
        <div className="flex justify-between items-center">
          <h1 className="text-[1.2rem] font-semibold">My Orders</h1>
          <button
            className="p-2 text-[0.9rem] bg-[tomato] bg-opacity-15 border-[1px] border-[tomato] outline-none"
            onClick={() => fetchMyOrders()}
          >
            Track Order
          </button>
        </div>
        <div className="   w-full p-2 flex flex-col">
          <div className="flex flex-col min-w-full items-center gap-4 justify-evenly">
            {data.map((order, index) => {
              return (
                <div
                  key={index}
                  className="flex sm:flex-row flex-col items-center  w-full border-[1px] border-black"
                >
                  <div className="flex w-[60px] h-[60px]">
                    {" "}
                    <img src={assets.parcel_icon} alt="" />
                  </div>
                  <div className="flex sm:flex-row flex-col items-center justify-evenly w-full">
                    <p className="p-1 text-[0.9rem] sm:w-[20rem] w-[90%] text-center text-gray-600">
                      {order.items.map((item, index) => {
                        if (index === order.items.length - 1) {
                          return item.name + " x " + item.quantity;
                        } else {
                          return item.name + " x " + item.quantity + ", ";
                        }
                      })}
                    </p>
                    <p className="p-1  text-gray-600">${order.amount}.00</p>
                    <p className="p-1  text-gray-600">
                      Items: {order.items.length}
                    </p>
                    <p className="p-1 text-[0.9rem]">
                      <span className="text-[tomato]">&#x25cf;</span> <b></b>
                      {order.status}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyOrders;

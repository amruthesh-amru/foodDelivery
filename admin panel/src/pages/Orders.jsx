import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { assets } from "../../../frontend/src/assets/assets";
const Orders = ({ url }) => {
  const [data, setData] = useState([]);
  const fetchAllOrders = async () => {
    const response = await axios.get(url + "/api/order/list");
    console.log(response.data.data);
    if (response.data.success) {
      setData(response.data.data);
    } else {
      toast.error("Error");
    }
  };
  const statusOnChangeHandler = async (event, orderId) => {
    const response = await axios.post(url + "/api/order/status", {
      status: event.target.value,
      orderId: orderId,
    });
    console.log(response);
    if (response.data.success) {
      fetchAllOrders();
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  };
  useEffect(() => {
    fetchAllOrders();
  }, []);
  return (
    <>
      <div className="md:w-[70%] h-full mx-auto my-0 p-4 flex flex-col gap-4 mt-[4rem]">
        <h1 className="text-[1.2rem] font-semibold">My Orders</h1>
        <div className="   w-full p-2 flex flex-col">
          <div className="flex flex-col min-w-full items-center gap-4 justify-evenly">
            {data.map((order, index) => {
              return (
                <div
                  key={index}
                  className="flex sm:flex-row flex-col items-center  w-full border-[1px] border-black p-4"
                >
                  <div className="flex w-[60px] h-[60px]">
                    {" "}
                    <img src={assets.parcel_icon} alt="" />
                  </div>
                  <div className="flex sm:flex-row flex-col items-center justify-evenly w-full">
                    <div className="flex flex-col items-center justify-center">
                      <p className="p-1 text-[0.9rem] sm:w-[20rem] w-[90%] sm:text-left text-center text-black">
                        {order.items.map((item, index) => {
                          if (index === order.items.length - 1) {
                            return item.name + " x " + item.quantity;
                          } else {
                            return item.name + " x " + item.quantity + ", ";
                          }
                        })}
                      </p>
                      <p className="text-[0.8rem] text-gray-500 sm:w-[20rem] sm:text-left text-center w-[90%]">
                        <span className="text-black">
                          {order.address.firstName}
                        </span>
                        , {order.address.street},{order.address.zipcode},{" "}
                        {order.address.state}, {order.address.phone}
                      </p>
                    </div>
                    <p className="p-1  text-gray-600">${order.amount}.00</p>
                    <p className="p-1  text-gray-600">
                      Items: {order.items.length}
                    </p>
                    <p className="p-1 ">
                      <select
                        className="p-3 bg-[tomato] bg-opacity-15 border-[1px] border-[tomato] outline-none"
                        onChange={(event) => {
                          statusOnChangeHandler(event, order._id);
                        }}
                        value={order.status}
                      >
                        <option value="Food Processing">Food Processing</option>
                        <option value="Out For Delivery">
                          Out For Delivery
                        </option>
                        <option value="Delivered">Delivered</option>
                      </select>
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

export default Orders;

import React, { useContext, useState } from "react";
import { StoreContext } from "../components/context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const {
    food_list,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartItem,
    url,
  } = useContext(StoreContext);
  const navigate = useNavigate();
  const [proceedToCheckOut, setProceedToCheckOut] = useState(false);
  const handleProceedToCheckput = () => {
    if (getTotalCartItem() <= 0) {
      alert("cart empty");
    } else {
      navigate("/order");
    }
  };
  return (
    <>
      <div className="w-[80%] mx-auto my-0 mt-[5rem]">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-16 py-3">
                  <span className="sr-only">Item</span>
                </th>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Add/Remove
                </th>

                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              {food_list.map((item, index) => {
                if (cartItems[item._id] > 0)
                  return (
                    <tr
                      key={index}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                      <td className="p-4">
                        <img
                          src={url + "/images/" + item.image}
                          className="w-8 md:w-16 max-w-full max-h-full  transform transition-transform duration-300 hover:scale-150  "
                        />
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        {item.name}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <button
                            className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                            type="button"
                            onClick={() => {
                              removeFromCart(item._id);
                            }}
                          >
                            <svg
                              className="w-3 h-3"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 18 2"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h16"
                              />
                            </svg>
                          </button>
                          <div>
                            <input
                              type="number"
                              id="first_product"
                              className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="1"
                              value={cartItems[item._id]}
                              required
                            />
                          </div>
                          <button
                            className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                            type="button"
                            onClick={() => {
                              addToCart(item._id);
                            }}
                          >
                            <span className="sr-only">Quantity button</span>
                            <svg
                              className="w-3 h-3"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 18 18"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 1v16M1 9h16"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                      <td className="px-6 py-4">${item.price}</td>
                      <td className="px-6 py-4  font-medium text-red-600 dark:text-red-500 ">
                        ${cartItems[item._id] * item.price}
                      </td>
                    </tr>
                  );
              })}
            </tbody>
          </table>
          {getTotalCartItem() <= 0 ? (
            <div className="p-6 text-center w-full flex items-center justify-center font-semibold text-[1.2rem]">
              Cart Is Empty
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="w-[50%] mt-[5rem]">
          <h1 className="text-[1.5rem] font-semibold mb-2">Cart Totals</h1>
          <div className="flex p-2 justify-between">
            <h2>Subtotal</h2>
            <h2> ${getTotalCartItem()}</h2>
          </div>
          <hr />
          <div className="flex p-2 justify-between">
            <h2>Delivery Fee</h2>
            <h2> ${getTotalCartItem() == 0 ? 0 : 2}</h2>
          </div>
          <div>
            <hr />
            <div className="flex p-2 justify-between font-semibold">
              <h2>Total</h2>
              <h2> ${getTotalCartItem() == 0 ? 0 : getTotalCartItem() + 2}</h2>
            </div>
            <button
              onClick={() => {
                handleProceedToCheckput();
              }}
              className="bg-[tomato] p-2 text-white rounded-md mt-2 outline-none flex items-center justify-center"
            >
              Proceed To Check out
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;

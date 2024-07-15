import React, { useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { StoreContext } from "../components/context/StoreContext";
import axios from "axios";
const Verify = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");
  const navigate = useNavigate();
  const { url } = useContext(StoreContext);
  const verifyPayment = async () => {
    const response = await axios.post(url + "/api/order/verify", {
      success,
      orderId,
    });
    if (response.data.sucess) {
      navigate("/myOrders");
    } else {
      navigate("/");
    }
  };
  useEffect(() => {
    verifyPayment();
  }, []);
  return (
    <>
      <div className="min-h-[60vh] grid main">
        <div className="w-[50px] h-[50px] place-self-center border-[5px] border-[#bdbdbd] border-t-[tomato] rounded-[50%] spinAnimation "></div>
      </div>
    </>
  );
};

export default Verify;

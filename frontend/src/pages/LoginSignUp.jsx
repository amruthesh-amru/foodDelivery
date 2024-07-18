import { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { StoreContext } from "../components/context/StoreContext";
import axios from "axios";

const LoginSignUp = ({ setTogglePopup }) => {
  const { url, setToken } = useContext(StoreContext);
  const [curState, setCurState] = useState("SignUp");
  const [data, setData] = useState({
    name: "",
    email: "root@gmail.com",
    password: "root1234",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  const handleCurrentState = (e) => {
    e.preventDefault();
    if (curState === "SignUp") {
      setCurState("");
      setCurState("Login");
    } else {
      setCurState("");
      setCurState("SignUp");
    }
  };
  const onLogin = async (e) => {
    e.preventDefault();
    let newUrl = url;
    if (curState === "Login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }
    const response = await axios.post(newUrl, data);
    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setTogglePopup(false);
    }
  };
  return (
    <>
      <div className="w-full h-[100vh] flex items-center justify-center absolute z-10 transition-[1] bg-[#00000090] ">
        <div className="w-[25rem] bg-white  mx-auto my-0 pl-6 pr-6 p-8 rounded-lg flex flex-col items-start justify-center fadeInUp-animation ">
          <div className="flex justify-between items-center w-full ">
            <h1 className="text-[1.8rem] font-semibold">{curState}</h1>
            <img
              src={assets.cross_icon}
              alt=""
              onClick={() => setTogglePopup(false)}
              className="cursor-pointer"
            />
          </div>
          <form onSubmit={onLogin} className="flex flex-col gap-8 mt-6 w-full">
            {curState === "SignUp" ? (
              <input
                type="text"
                className="outline-none rounded-md border-2 border-gray-400 p-2"
                placeholder="your name"
                required
                name="name"
                onChange={onChangeHandler}
                value={data.name}
              />
            ) : (
              <></>
            )}
            <input
              type="email"
              className="outline-none rounded-md border-2 border-gray-400 p-2"
              placeholder="your email"
              required
              name="email"
              onChange={onChangeHandler}
              value={data.email}
            />
            <input
              type="password"
              className="outline-none rounded-md border-2 border-gray-400 p-2"
              placeholder="your password"
              required
              name="password"
              onChange={onChangeHandler}
              value={data.password}
            />
            <button className="bg-[tomato] p-2 rounded-md text-white text-[1.2rem] active:opacity-[0.8] transition-[1]">
              {curState}
            </button>
            {curState === "Login" ? (
              <p className="text-gray-500">
                Create new account ?{" "}
                <button
                  type="submit"
                  onClick={handleCurrentState}
                  className="text-[tomato]"
                >
                  Click here!
                </button>
              </p>
            ) : (
              <p className="text-gray-500">
                Already have an account ?{" "}
                <button
                  type="submit"
                  onClick={handleCurrentState}
                  className="text-[tomato]"
                >
                  Click here!
                </button>
              </p>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginSignUp;

import { useState } from "react";
import { assets } from "../assets/assets";

const LoginSignUp = ({ setTogglePopup }) => {
  const [curState, setCurState] = useState("SignUp");
  const handleCurrentState = () => {
    if (curState === "SignUp") {
      setCurState("");
      setCurState("Login");
    } else {
      setCurState("");
      setCurState("SignUp");
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
          <form action="#" id="" className="flex flex-col gap-8 mt-6 w-full">
            {curState === "SignUp" ? (
              <input
                type="text"
                className="outline-none rounded-md border-2 border-gray-400 p-2"
                placeholder="your name"
                required
              />
            ) : (
              <></>
            )}
            <input
              type="email"
              className="outline-none rounded-md border-2 border-gray-400 p-2"
              placeholder="your email"
              required
            />
            <input
              type="password"
              name=""
              id=""
              className="outline-none rounded-md border-2 border-gray-400 p-2"
              placeholder="your password"
              required
            />
            <button className="bg-[tomato] p-2 rounded-md text-white text-[1.2rem] active:opacity-[0.8] transition-[1]">
              Login
            </button>
            {curState === "Login" ? (
              <p className="text-gray-500">
                Create new account ?{" "}
                <button
                  onClick={() => handleCurrentState()}
                  className="text-[tomato]"
                >
                  Click here!
                </button>
              </p>
            ) : (
              <p className="text-gray-500">
                Already have an account ?{" "}
                <button
                  onClick={() => handleCurrentState()}
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

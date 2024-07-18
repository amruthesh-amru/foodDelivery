import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const Sidebar = () => {
  return (
    <>
      <div className="w-[100%]  min-h-[100vh] border-[1px] border-r-[gray] flex flex-col gap-6  md:pl-[3rem] pl-[1rem] ">
        <div className="flex flex-col mt-[5rem] gap-6">
          <NavLink to="/add">
            <div className="  p-3 gap-3 flex justify-start items-center border-[1px] border-[gray] border-r-0 cursor-pointer   ">
              <img
                src={assets.add_icon}
                alt=""
                className="min-w-[25px] min-h-[25px]"
              />
              <h1 className="hidden md:contents">Add Items</h1>
            </div>
          </NavLink>
          <NavLink to="/list">
            <div className="  p-3 gap-3 flex justify-start items-center border-[1px] border-[gray] border-r-0 cursor-pointer">
              <img
                src={assets.order_icon}
                alt=""
                className="min-w-[25px] min-h-[25px]"
              />
              <h1 className="hidden md:contents">List Items</h1>
            </div>
          </NavLink>

          <NavLink to="/order">
            <div className="  p-3 gap-3 flex justify-start items-center border-[1px] border-[gray] border-r-0 cursor-pointer">
              <img
                src={assets.order_icon}
                alt=""
                className="min-w-[25px] min-h-[25px]"
              />
              <h1 className="hidden md:contents">Orders</h1>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

import { assets } from "../assets/assets";
const Navbar = () => {
  return (
    <>
      <div className="flex justify-between p-5 pl-10 pr-10">
        <img src={assets.logo} alt="" />
        <img src={assets.profile_image} alt="" className="w-[5rem] h-[5rem]" />
      </div>
    </>
  );
};

export default Navbar;

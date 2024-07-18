import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="w-full bg-[#2e2e2e] text-[#8b8b8b] mt-[5rem]" id="footer ">
      <div className="w-[80%] mx-auto my-0 flex lg:flex-row flex-col gap-4 justify-between  items-start p-10">
        <div className="flex flex-col justify-center gap-4">
          <div>
            <img src={assets.logo} alt="" />
          </div>
          <div className=" md:w-[30rem]">
            <p className="text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
              esse nulla numquam nihil perspiciatis perferendis? Fugiat nemo ea
              impedit? Dolor ut eius excepturi praesentium optio rem commodi
              illo, voluptates sunt.
            </p>
          </div>
          <div className="flex gap-2 ">
            <img src={assets.facebook_icon} alt="" className="w-[30px]" />
            <img src={assets.twitter_icon} alt="" className="w-[30px]" />
            <img src={assets.linkedin_icon} alt="" className="w-[30px]" />
          </div>
        </div>
        <div className="flex flex-col gap-4 ">
          <h1 className="text-[1.6rem] font-semibold text-white md:mt-0 mt-4">
            COMPANY
          </h1>
          <ul className="text-[0.9rem] flex flex-col gap-2">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-[1.6rem] font-semibold text-white md:mt-0 mt-4">
            GET IN TOUCH
          </h1>
          <ul className="text-[0.9rem] flex flex-col gap-2">
            <li>+91 123567890</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto my-0 flex items-center justify-center text-[0.8rem] pb-1 p-2 text-center">
        Copyright 2024 © Amruthesh Gowda - All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;

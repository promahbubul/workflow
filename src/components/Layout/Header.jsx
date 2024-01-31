import React from "react";
import { avatar, logo } from "../../assets/Images/Images";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="h-10 px-2 my-2 flex flex-row justify-between items-center">
      {/* Left */}
      <div className="flex flex-row  gap-2">
        <Link to={"/"}>
          <img src={logo} alt="logo" className="w-8" />
        </Link>
        <h3 className="text-gray-dark text-xl font-semibold">
          CT Corporation{" "}
          <span className="text-gray-400">Beneficial Ownership</span>{" "}
        </h3>
      </div>
      {/* right */}
      <div className="flex flex-row h-full ">
        <div className="flex flex-col text-right ">
          <p className="text-gray-400 text-sm font-medium">Jhon Smit</p>
          <p className="text-gray-400 text-xs">CT Advanchers</p>
        </div>
        <div className="flex flex-row  items-center cursor-pointer">
          <img src={avatar} alt="" className="w-10 relative hover:z-10" />
          <div className="bg-primary text-white relative hover:z-10 w-8 h-8 -ml-4 border-2 border-white rounded-full flex justify-center items-center text-sm font-bold">
            CT
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

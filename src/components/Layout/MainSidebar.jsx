import React from "react";
import {
  IoHomeSharp,
  HiOutlineMailOpen,
  GoPeople,
  HiOutlineNewspaper,
  IoSettingsOutline,
} from "../../assets/Icons/Icons";
import { NavLink } from "react-router-dom";

const MainSidebar = () => {
  const links = [
    { path: "/", icon: IoHomeSharp },
    { path: "/mail", icon: HiOutlineMailOpen },
    { path: "/news", icon: HiOutlineNewspaper },
    { path: "/group", icon: GoPeople },
    { path: "/setting", icon: IoSettingsOutline },
  ];
  return (
    <div className=" bg w-10  bg-gray-dark py-5">
      {links.map((item, index) => (
        <NavLink
          key={index}
          className="text-white text-2xl active:bg-primary focus:bg-primary hover:bg-primary  flex justify-center items-center   p-2 "
          to={item.path}
        >
          {item.icon()}
        </NavLink>
      ))}
    </div>
  );
};

export default MainSidebar;

import React from "react";
import camraIcon from "../../../public/image/camra-icon.png";
import menuIcon from "../../../public/image/menu-icon.png";
import { FaCamera, FaEllipsisV } from "react-icons/fa"; // Using react-icons for icons

const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center bg-gray-200 p-4">
        {/* WhatsApp Text */}
        <h1 className="text-green-500 text-3xl font-bold">WhatsApp</h1>

        {/* Icons */}
        <div className="flex space-x-4">
          <FaCamera className="text-black text-xl cursor-pointer" />
          <FaEllipsisV className="text-black text-xl cursor-pointer" />
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex-grow mx-4">
        <input
          type="text"
          placeholder="Search"
          className="w-full p-2 rounded-full bg-gray-100 text-gray-600"
        />
      </div>
    </>
  );
};

export default Header;

import React from "react";
import { Link, NavLink } from "react-router-dom";
import chatsIcon from "../../../public/icons/chats.png";
import updatesIcon from "../../../public/icons/updates.png";
import callsIcon from "../../../public/icons/calls.png";
import communitiesIcon from "../../../public/icons/communities.png";

const Footer = () => {
  return (
    <div className="flex justify-between p-5 items-center fixed bottom-0 w-full bg-white text-black pt-4">
    <NavLink className="m-auto flex flex-col items-center" to="/">
      {({ isActive }) => (
        <>
          <span
            className={`flex justify-center items-center w-14 h-7 rounded-xl transition-all duration-200 ${
              isActive ? "bg-[#b8faad]" : ""
            }`}
          >
            <img className="w-6 h-6" src={chatsIcon} />
          </span>
          <span className="mt-1 font-bold">Chats</span>
        </>
      )}
    </NavLink>
  
    <NavLink className="m-auto flex flex-col items-center" to="/updates">
      {({ isActive }) => (
        <>
          <span
            className={`flex justify-center items-center w-14 h-7 rounded-xl transition-all duration-200 ${
              isActive ? "bg-[#b8faad]" : ""
            }`}
          >
            <img className="w-6 h-6" src={updatesIcon} />
          </span>
          <span className="mt-1 font-bold">Updates</span>
        </>
      )}
    </NavLink>
  
    <NavLink className="m-auto flex flex-col items-center" to="/communities">
      {({ isActive }) => (
        <>
          <span
            className={`flex justify-center items-center w-14 h-7 rounded-xl transition-all duration-200 ${
              isActive ? "bg-[#b8faad]" : ""
            }`}
          >
            <img className="w-6 h-6" src={communitiesIcon} />
          </span>
          <span className="mt-1 font-bold">Communities</span>
        </>
      )}
    </NavLink>
  
    <NavLink className="m-auto flex flex-col items-center" to="/calls">
      {({ isActive }) => (
        <>
          <span
            className={`flex justify-center items-center w-14 h-7 rounded-xl transition-all duration-200 ${
              isActive ? "bg-[#b8faad]" : ""
            }`}
          >
            <img className="w-6 h-6" src={callsIcon} />
          </span>
          <span className="mt-1 font-bold">Calls</span>
        </>
      )}
    </NavLink>
  </div>
  
  );
};

export default Footer;

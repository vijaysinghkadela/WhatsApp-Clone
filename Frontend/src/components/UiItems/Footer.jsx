import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <Link to="/chats">Chats</Link>
      <Link to="/updates">Updates</Link>
    </div>
  );
};

export default Footer;

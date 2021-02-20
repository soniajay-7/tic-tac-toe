import React from "react";
import { FaTimes, FaRegCircle } from "react-icons/fa";

const Icon = ({ name }) => {
  switch (name) {
    case "Circle":
      return <FaRegCircle className="icon" />;
    case "Cross":
      return <FaTimes className="icon" />;
    default:
      return <h1> </h1>;
  }
};

export default Icon;

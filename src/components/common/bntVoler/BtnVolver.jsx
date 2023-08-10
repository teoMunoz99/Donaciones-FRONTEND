import React from "react";
import "./BtnVolver.css";
import { NavLink } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const BtnVolver = () => {
  return (
    <div className="mt-4 mx-4">
      <NavLink to="/" className="text-decoration-none text-dark">
        <IoIosArrowBack className="flecha" />
      </NavLink>
    </div>
  );
};

export default BtnVolver;

import React from "react";
import "./BtnVolver.css";
import { NavLink } from "react-router-dom";
import { MdArrowBackIosNew } from "react-icons/md";

const BtnVolver = () => {
  return (
    <div className="mt-4 mx-4">
      <NavLink to="/" className="text-decoration-none text-dark">
        <MdArrowBackIosNew className="flecha" />
      </NavLink>
    </div>
  );
};

export default BtnVolver;

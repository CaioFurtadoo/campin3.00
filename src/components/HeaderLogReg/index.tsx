import React from "react";
import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";


export const HeaderLogReg: React.FC = () => {
  return (
    <header className="p-10 w-[50vw] small:w-[100vw]">
      <Link to="/">
        <img  className="hover:scale-105 transition duration-300" src={Logo} alt="logo campin" />
      </Link>
    </header>
  );
};
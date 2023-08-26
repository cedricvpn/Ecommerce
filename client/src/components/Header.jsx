/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import bnc from "../assets/bnc.jpg";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { BsCartFill } from "react-icons/bs";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = ()=>{
    setShowMenu(preve => !preve)
  }
  return (
    <header className="fixed shadow-md w-full h-16 px-2 md:px-4 bg-white">
      {/*desktop*/}
      <div className="flex items-center h-full justify-between">
        <Link to={""}>
          <div className="h-12">
            <img src={bnc} className="h-full" />
          </div>
        </Link>
        <div className="flex items-center gap-4 md:gap-7">
          <nav className="flex gap-4 md:gap-7 text-base md:text-lg z-50 ">
            <Link to={"home"}>Home</Link>
            <Link to={"menu"}>Menu</Link>
            <Link to={"about"}>About</Link>
            <Link to={"contact"}>Contact</Link>
          </nav>
          <div className="text-2xl relative">
            <BsCartFill />
            <div className="absolute -top-2 -right-0 rounded text-white bg-red-500 h-4 text-sm p-0 m-0 text-center ">
              0
            </div>
          </div>
          <div className="text-xl " onClick={handleShowMenu}>
            <div className=" border-2 border-solid border-slate-600 p-1 rounded-full">
              <FaUserAlt color="green" />
            </div>
            {showMenu && (
              <div className="absolute right-2 bg-white py-3 px-2 shadow drop-shadow-md flex flex-col">
                <Link to={"NewProduct"} className="whitespace-nowrap cursor-pointer">New Product</Link>
                <Link to={"Login"} className="whitespace-nowrap cursor-pointer">Login</Link>
              </div>
            )}
          </div>
        </div>
      </div>
      {/*mobile */}
    </header>
  );
};

export default Header;

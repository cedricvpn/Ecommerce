/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import bnc from "../assets/bnc.jpg";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { BsCartFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { logoutRedux } from "../redux/userSlice";
import { toast } from "react-toastify";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch()
  const userData = useSelector(state => state.user)
  console.log(userData)

  const handleShowMenu = ()=>{
    setShowMenu(preve => !preve)
  }

  const handleLogout = ()=>{
    dispatch(logoutRedux())
    toast("Logout successfully")
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
            <Link to={"/"}>Home</Link>
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
            <div className=" text-3xl cursor-pointer w-10 h-10 rounded-full overflow-hidden">
              {userData.image ? <img src={userData.image}/> :<FaUserAlt color="green" />}
            </div>
            {showMenu && (
              <div className="absolute right-2 bg-white py-3  shadow drop-shadow-md flex flex-col ">
                <Link to={"NewProduct"} className="whitespace-nowrap cursor-pointer px-2">New Product</Link>
                   {
                    userData.loggedIn ? <p className="cursor-pointer px-2 " onClick={handleLogout}>Logout</p> : <Link to={"Login"} className="whitespace-nowrap cursor-pointer px-2">Login</Link>
                   }

                
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

import React from "react";
import logo from "../../Assets/logo.png";
const Header = () => {
  const menuItems = (
    <>
      <li className="text-lg  font-semibold lg:mr-10">
        <a href="/">Pricing</a>
      </li>
      <li className="text-lg font-semibold lg:mr-8" tabIndex="0">
        <a href="/">Log in</a>
      </li>
      <li className="text-lg font-semibold ">
        <label
          for="my-modal-3"
          className="bg-[#5593C1] text-white text-lg  border-2 py-2 px-4 btn modal-button normal-case font-semibold"
        >
          Try for free
        </label>
      </li>
    </>
  );
  return (
    <>
      <div className="flex items-center py-2 sticky  shadow-2xl top-0 z-50 px-6  bg-white mx-auto justify-between ">
        <div className="navbar-start">
          <div to="/" className=" normal-case text-[18px] font-sans">
            <img className="w-[190px]  " src={logo} alt="WebEazzy" />
          </div>
        </div>
        <div className=" hidden lg:flex ml-20 ">
          <ul className="menu menu-horizontal lg:ml-20 p-0 items-center justify-end ">
            {menuItems}
          </ul>
        </div>
        <div className="dropdown ">
          <label tabIndex="0" className="btn btn-accent lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            style={{ right: "0" }}
            tabIndex="0"
            className="menu  menu-compact dropdown-content mt-3 p-4 shadow  rounded-box w-64 bg-white"
          >
            {menuItems}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;

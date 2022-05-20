import React from "react";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";

function Header() {
  return (
    <header className="py-4 shadow-sm bg-white">
      <div className=" container flex justify-between items-center">
        {/* logo */}
        <a href="##">
          <img src="images/logo.png" alt="e-shop" className="w-10" />
        </a>
        {/* seacrh bar */}
        <div className="w-full flex max-w-xl relative">
          <span className="absolute left-0 top-0 h-full w-10 flex justify-center items-center">
            <AiOutlineSearch className="text-lg text-gray-400" />
          </span>
          <input
            type="text"
            className="w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none"
            placeholder="Search"
          />
          <button className=" bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition">
            Search
          </button>
        </div>
        {/* right naviagation */}
        <div className="flex items-center space-x-4">
          <a
            href="/#"
            className="flex justify-center items-center flex-col text-gray-700 hover:text-primary transition relative"
          >
            <AiOutlineHeart className="text-2xl w-10" />
            <div className="text-xs leadering-3">Wish List</div>
            <span className="absolute right-1 -top-1 w-4 h-4 rounded-full flex items-center justify-center bg-primary text-white text-xs">
              8
            </span>
          </a>
          <a
            href="/#"
            className="flex justify-center items-center flex-col text-gray-700 hover:text-primary transition relative"
          >
            <AiOutlineShoppingCart className="text-2xl w-10" />
            <div className="text-xs leadering-3">Cart</div>
            <span className="absolute right-1 -top-1 w-4 h-4 rounded-full flex items-center justify-center bg-primary text-white text-xs">
              8
            </span>
          </a>
          <a
            href="/#"
            className="flex justify-center items-center flex-col text-gray-700 hover:text-primary transition relative"
          >
            <AiOutlineUser className="text-2xl w-10" />
            <div className="text-xs leadering-3">Account</div>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;

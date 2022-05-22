import React from "react";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";

function Header() {
  return (
    <header className="bg-white py-4 shadow-sm">
      <div className=" container flex items-center justify-between">
        {/* logo */}
        <a href="##">
          <img src="/images/logo.png" alt="e-shop" className="w-10" />
        </a>
        {/* seacrh bar */}
        <div className="relative hidden w-full max-w-xl lg:flex">
          <span className="absolute left-0 top-0 flex h-full w-10 items-center justify-center">
            <AiOutlineSearch className="text-lg text-gray-400" />
          </span>
          <input
            type="text"
            className="w-full rounded-l-md border border-r-0 border-primary py-3 pl-12 pr-3 focus:outline-none"
            placeholder="Search"
          />
          <button className=" rounded-r-md border border-primary bg-primary px-8 text-white transition hover:bg-transparent hover:text-primary">
            Search
          </button>
        </div>
        {/* right naviagation */}
        <div className="flex items-center space-x-4">
          <a
            href="/#"
            className="relative flex flex-col items-center justify-center text-gray-700 transition hover:text-primary"
          >
            <AiOutlineHeart className="w-10 text-2xl" />
            <div className="leadering-3 text-xs">Wish List</div>
            <span className="absolute right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-xs text-white">
              8
            </span>
          </a>
          <a
            href="/#"
            className="relative hidden flex-col items-center justify-center text-gray-700 transition hover:text-primary lg:flex"
          >
            <AiOutlineShoppingCart className="w-10 text-2xl" />
            <div className="leadering-3 text-xs">Cart</div>
            <span className="absolute right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-xs text-white">
              8
            </span>
          </a>
          <a
            href="/#"
            className="relative flex flex-col items-center justify-center text-gray-700 transition hover:text-primary"
          >
            <AiOutlineUser className="w-10 text-2xl" />
            <div className="leadering-3 text-xs">Account</div>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
